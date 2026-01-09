import type { Employee } from '../data/mockData';
import { FieldType } from '../types/filter.types';
import type { FilterCondition } from '../types/filter.types';
import { getFieldDefinition } from '../config/filterConfig';

/**
 * Filter Service
 * Implements client-side filtering algorithms for all field types
 */

/**
 * Get nested value from object using dot notation path
 */
export const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, prop) => current?.[prop], obj);
};

/**
 * Normalize text for case-insensitive comparison
 */
const normalizeText = (text: string): string => {
  return text?.toString().toLowerCase().trim() || '';
};

/**
 * Filter a single employee record against a filter condition
 */
const matchesFilter = (employee: Employee, condition: FilterCondition): boolean => {
  const fieldDef = getFieldDefinition(condition.field);
  if (!fieldDef) return true;

  // Get the value from the employee record (handle nested paths)
  const fieldValue = fieldDef.path
    ? getNestedValue(employee, fieldDef.path)
    : (employee as any)[condition.field];

  switch (condition.fieldType) {
    case FieldType.TEXT:
      return filterByText(fieldValue, condition);

    case FieldType.NUMBER:
      return filterByNumber(fieldValue, condition);

    case FieldType.DATE:
      return filterByDate(fieldValue, condition);

    case FieldType.AMOUNT:
      return filterByAmount(fieldValue, condition);

    case FieldType.SINGLE_SELECT:
      return filterBySingleSelect(fieldValue, condition);

    case FieldType.MULTI_SELECT:
      return filterByMultiSelect(fieldValue, condition);

    case FieldType.BOOLEAN:
      return filterByBoolean(fieldValue, condition);

    default:
      return true;
  }
};

/**
 * Text field filtering
 */
const filterByText = (value: any, condition: FilterCondition): boolean => {
  const textValue = value?.toString() || '';
  const filterValue = condition.value as string;

  switch (condition.operator) {
    case 'equals':
      return normalizeText(textValue) === normalizeText(filterValue);
    case 'contains':
      return normalizeText(textValue).includes(normalizeText(filterValue));
    case 'startsWith':
      return normalizeText(textValue).startsWith(normalizeText(filterValue));
    case 'endsWith':
      return normalizeText(textValue).endsWith(normalizeText(filterValue));
    case 'doesNotContain':
      return !normalizeText(textValue).includes(normalizeText(filterValue));
    case 'regex':
      try {
        // For regex, we don't normalize to preserve case sensitivity option
        const regex = new RegExp(filterValue, 'i'); // Case-insensitive by default
        return regex.test(textValue);
      } catch (error) {
        // Invalid regex pattern - return false
        return false;
      }
    default:
      return true;
  }
};

/**
 * Number field filtering
 */
const filterByNumber = (value: any, condition: FilterCondition): boolean => {
  const numValue = Number(value);

  if (isNaN(numValue)) return false;

  switch (condition.operator) {
    case 'equals': {
      const filterValue = Number(condition.value);
      if (isNaN(filterValue)) return false;
      return numValue === filterValue;
    }
    case 'greaterThan': {
      const filterValue = Number(condition.value);
      if (isNaN(filterValue)) return false;
      return numValue > filterValue;
    }
    case 'lessThan': {
      const filterValue = Number(condition.value);
      if (isNaN(filterValue)) return false;
      return numValue < filterValue;
    }
    case 'greaterThanOrEqual': {
      const filterValue = Number(condition.value);
      if (isNaN(filterValue)) return false;
      return numValue >= filterValue;
    }
    case 'lessThanOrEqual': {
      const filterValue = Number(condition.value);
      if (isNaN(filterValue)) return false;
      return numValue <= filterValue;
    }
    case 'between': {
      const range = condition.value as { min: number; max: number };
      if (isNaN(range.min) || isNaN(range.max)) return false;
      return numValue >= range.min && numValue <= range.max;
    }
    default:
      return true;
  }
};

/**
 * Date field filtering (between range)
 */
const filterByDate = (value: any, condition: FilterCondition): boolean => {
  if (condition.operator !== 'between') return true;

  const dateValue = new Date(value).getTime();
  const range = condition.value as { start: string; end: string };
  const startDate = new Date(range.start).getTime();
  const endDate = new Date(range.end).getTime();

  if (isNaN(dateValue) || isNaN(startDate) || isNaN(endDate)) return false;

  return dateValue >= startDate && dateValue <= endDate;
};

/**
 * Amount field filtering (between range)
 */
const filterByAmount = (value: any, condition: FilterCondition): boolean => {
  if (condition.operator !== 'between') return true;

  const numValue = Number(value);
  const range = condition.value as { min: number; max: number };

  if (isNaN(numValue) || isNaN(range.min) || isNaN(range.max)) return false;

  return numValue >= range.min && numValue <= range.max;
};

/**
 * Single select field filtering
 */
const filterBySingleSelect = (value: any, condition: FilterCondition): boolean => {
  const stringValue = String(value || '');
  const filterValue = String(condition.value || '');

  switch (condition.operator) {
    case 'is':
      return stringValue === filterValue;
    case 'isNot':
      return stringValue !== filterValue;
    default:
      return true;
  }
};

/**
 * Multi-select field filtering (array contains or string matching)
 * Handles both array fields (like skills) and string fields (like role)
 */
const filterByMultiSelect = (value: any, condition: FilterCondition): boolean => {
  const filterValues = Array.isArray(condition.value) ? condition.value : [];

  if (filterValues.length === 0) return true;

  // If the field value is an array (e.g., skills)
  if (Array.isArray(value)) {
    switch (condition.operator) {
      case 'in':
        // Check if any of the filter values are in the array
        return filterValues.some((fv) => value.includes(fv));
      case 'notIn':
        // Check if none of the filter values are in the array
        return !filterValues.some((fv) => value.includes(fv));
      default:
        return true;
    }
  } else {
    // If the field value is a string (e.g., role)
    const stringValue = String(value || '');
    switch (condition.operator) {
      case 'in':
        // Check if the string value is in the filter values array
        return filterValues.includes(stringValue);
      case 'notIn':
        // Check if the string value is NOT in the filter values array
        return !filterValues.includes(stringValue);
      default:
        return true;
    }
  }
};

/**
 * Boolean field filtering
 */
const filterByBoolean = (value: any, condition: FilterCondition): boolean => {
  if (condition.operator !== 'is') return true;

  const boolValue = Boolean(value);
  const filterValue = Boolean(condition.value);

  return boolValue === filterValue;
};

/**
 * Apply all filters to employee data
 * AND logic: all filters must match (different fields)
 * OR logic: multiple filters on same field (not implemented in basic version)
 */
export const applyFilters = (employees: Employee[], filters: FilterCondition[]): Employee[] => {
  if (filters.length === 0) return employees;

  return employees.filter((employee) => {
    // Group filters by field to handle OR logic within same field
    const filtersByField = filters.reduce((acc, filter) => {
      if (!acc[filter.field]) {
        acc[filter.field] = [];
      }
      acc[filter.field].push(filter);
      return acc;
    }, {} as Record<string, FilterCondition[]>);

    // For each field, at least one filter must match (OR within same field)
    // All fields must have at least one matching filter (AND between fields)
    return Object.values(filtersByField).every((fieldFilters) => {
      // OR logic: at least one filter in this field group must match
      return fieldFilters.some((filter) => matchesFilter(employee, filter));
    });
  });
};

