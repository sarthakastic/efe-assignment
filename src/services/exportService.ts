import type { Employee } from '../data/mockData';

/**
 * Export Service
 * Handles exporting data to CSV and JSON formats
 */

/**
 * Format date string for CSV export (Excel-friendly format)
 */
const formatDateForCSV = (dateString: string): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Invalid date, return as-is
    
    // Format as MM/DD/YYYY for Excel compatibility
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  } catch {
    return dateString;
  }
};

/**
 * Format value for CSV export
 */
const formatValueForCSV = (value: any, header: string): string => {
  // Handle date fields
  if ((header === 'joinDate' || header === 'lastReview') && typeof value === 'string') {
    const formattedDate = formatDateForCSV(value);
    return `"${formattedDate}"`; // Always quote dates
  }
  
  // Handle nested objects
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return `"${value.join('; ')}"`;
    }
    // For nested objects like address, format nicely
    if (header === 'address') {
      const addr = value as { city: string; state: string; country: string };
      return `"${addr.city}, ${addr.state}, ${addr.country}"`;
    }
    return `"${JSON.stringify(value)}"`;
  }
  
  // Handle boolean values
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
  
  // Handle numbers - format currency for salary
  if (typeof value === 'number') {
    if (header === 'salary') {
      return `"$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}"`;
    }
    return String(value);
  }
  
  // Handle strings - escape quotes and wrap if needed
  const stringValue = String(value ?? '');
  if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n') || stringValue.includes('\r')) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  
  return stringValue;
};

/**
 * Convert array of objects to CSV string
 */
const convertToCSV = (data: Employee[]): string => {
  if (data.length === 0) return '';

  // Get headers from first object
  const headers = Object.keys(data[0]);
  
  // Create CSV rows
  const csvRows = [
    // Header row
    headers.map(h => `"${h}"`).join(','), // Quote headers for safety
    // Data rows
    ...data.map((row) => {
      return headers.map((header) => {
        const value = (row as any)[header];
        return formatValueForCSV(value, header);
      }).join(',');
    }),
  ];

  return csvRows.join('\n');
};

/**
 * Download file with given content and filename
 */
const downloadFile = (content: string, filename: string, mimeType: string): void => {
  // Add BOM (Byte Order Mark) for UTF-8 to help Excel recognize encoding
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Export employees to CSV
 */
export const exportToCSV = (employees: Employee[], filename: string = 'employees.csv'): void => {
  const csv = convertToCSV(employees);
  downloadFile(csv, filename, 'text/csv;charset=utf-8;');
};

/**
 * Export employees to JSON
 */
export const exportToJSON = (employees: Employee[], filename: string = 'employees.json'): void => {
  const json = JSON.stringify(employees, null, 2);
  downloadFile(json, filename, 'application/json');
};

/**
 * Export service object
 */
export const exportService = {
  exportToCSV,
  exportToJSON,
};

