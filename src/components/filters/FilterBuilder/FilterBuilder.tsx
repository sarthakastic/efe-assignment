import { Box, Button, Paper, Typography } from '@mui/material';
import { Plus, X, Check } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  addFilter,
  removeFilter,
  updateFilter,
  clearAllFilters,
  applyFilters,
  clearAppliedFilters,
} from '../../../store/filterSlice';
import { FieldType } from '../../../types/filter.types';
import type { FilterCondition } from '../../../types/filter.types';
import { FIELD_DEFINITIONS } from '../../../config/filterConfig';
import { FilterRow } from '../FilterRow';

/**
 * Filter Builder Component
 * Allows users to add, update, and remove multiple filter conditions
 */
export const FilterBuilder = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filter.filters);

  const handleAddFilter = () => {
    const firstField = FIELD_DEFINITIONS[0];
    if (!firstField) return;

    const newFilter: FilterCondition = {
      id: `filter-${Date.now()}-${Math.random()}`,
      field: firstField.key,
      fieldType: firstField.type,
      operator: firstField.operators[0],
      value: getDefaultValue(firstField.type),
    };

    dispatch(addFilter(newFilter));
  };

  const handleUpdateFilter = (condition: FilterCondition) => {
    dispatch(updateFilter(condition));
  };

  const handleRemoveFilter = (id: string) => {
    dispatch(removeFilter(id));
    // Applied filters are automatically synced in the reducer
  };

  const handleClearAll = () => {
    dispatch(clearAllFilters());
    dispatch(clearAppliedFilters());
  };

  const handleApplyFilters = () => {
    dispatch(applyFilters());
  };

  const getDefaultValue = (fieldType: FieldType): any => {
    switch (fieldType) {
      case FieldType.TEXT:
      case FieldType.SINGLE_SELECT:
        return '';
      case FieldType.NUMBER:
        return NaN;
      case FieldType.DATE:
        return { start: '', end: '' };
      case FieldType.AMOUNT:
        return { min: NaN, max: NaN };
      case FieldType.MULTI_SELECT:
        return [];
      case FieldType.BOOLEAN:
        return true;
      default:
        return '';
    }
  };

  return (
    <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3, overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: 1, sm: 0 },
        }}
      >
        <Typography variant="h6" sx={{ width: { xs: '100%', sm: 'auto' } }}>
          Filters
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            startIcon={<Plus size={18} />}
            onClick={handleAddFilter}
            size="small"
            aria-label="Add new filter"
          >
            Add Filter
          </Button>
          {filters.length > 0 && (
            <Button
              variant="outlined"
              color="error"
              startIcon={<X size={18} />}
              onClick={handleClearAll}
              size="small"
              aria-label="Clear all filters"
            >
              Clear All
            </Button>
          )}
        </Box>
      </Box>

      {filters.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 3 }}>
          No filters applied. Click "Add Filter" to start filtering.
        </Typography>
      ) : (
        <Box>
          {filters.map((filter) => (
            <FilterRow
              key={filter.id}
              condition={filter}
              onUpdate={handleUpdateFilter}
              onRemove={() => handleRemoveFilter(filter.id)}
            />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Check size={18} />}
              onClick={handleApplyFilters}
              size="medium"
              aria-label="Apply filters to table"
            >
              Apply Filters
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

