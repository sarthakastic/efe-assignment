import { useMemo, useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableSortLabel,
} from '@mui/material';
import type { Employee } from '../../data/mockData';

type SortField = keyof Employee | 'address.city';
type SortDirection = 'asc' | 'desc';

interface DataTableProps {
  data: Employee[];
  totalCount: number;
}

/**
 * Data Table Component with Sorting
 * Displays employee data in a sortable table with record counts
 */
export const DataTable = ({ data, totalCount }: DataTableProps) => {
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      let aValue: any;
      let bValue: any;

      if (sortField === 'address.city') {
        aValue = a.address.city;
        bValue = b.address.city;
      } else {
        aValue = a[sortField as keyof Employee];
        bValue = b[sortField as keyof Employee];
      }

      // Handle different data types
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      if (aValue instanceof Date && bValue instanceof Date) {
        return sortDirection === 'asc'
          ? aValue.getTime() - bValue.getTime()
          : bValue.getTime() - aValue.getTime();
      }

      // Handle arrays (skills)
      if (Array.isArray(aValue) && Array.isArray(bValue)) {
        const aStr = aValue.join(', ');
        const bStr = bValue.join(', ');
        return sortDirection === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
      }

      // Handle booleans
      if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        return sortDirection === 'asc' ? (aValue === bValue ? 0 : aValue ? 1 : -1) : (aValue === bValue ? 0 : aValue ? -1 : 1);
      }

      return 0;
    });

    return sorted;
  }, [data, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const columns: Array<{ key: SortField; label: string; align?: 'right' | 'left' }> = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'department', label: 'Department' },
    { key: 'role', label: 'Role' },
    { key: 'salary', label: 'Salary', align: 'right' },
    { key: 'joinDate', label: 'Join Date' },
    { key: 'isActive', label: 'Active' },
    { key: 'address.city', label: 'City' },
    { key: 'skills', label: 'Skills' },
    { key: 'projects', label: 'Projects' },
    { key: 'lastReview', label: 'Last Review' },
    { key: 'performanceRating', label: 'Performance Rating' },
  ];

  return (
    <Box>
      {/* Record Count */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Showing <strong>{sortedData.length}</strong> of <strong>{totalCount}</strong> records
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align={column.align}
                  sx={{ backgroundColor: 'background.paper' }}
                >
                  <TableSortLabel
                    active={sortField === column.key}
                    direction={sortField === column.key ? sortDirection : 'asc'}
                    onClick={() => handleSort(column.key)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="text.secondary">
                    No results found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((emp) => (
                <TableRow key={emp.id} hover>
                  <TableCell>{emp.id}</TableCell>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.department}</TableCell>
                  <TableCell>{emp.role}</TableCell>
                  <TableCell align="right">
                    {emp.salary.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    })}
                  </TableCell>
                  <TableCell>{emp.joinDate}</TableCell>
                  <TableCell>{emp.isActive ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{emp.address.city}</TableCell>
                  <TableCell>{emp.skills.join(', ')}</TableCell>
                  <TableCell>{emp.projects}</TableCell>
                  <TableCell>{emp.lastReview}</TableCell>
                  <TableCell>{emp.performanceRating}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

