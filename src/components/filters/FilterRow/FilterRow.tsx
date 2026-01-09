import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import { Trash2 } from 'lucide-react';
import type { FilterCondition, FilterOperator } from '../../../types/filter.types';
import { FIELD_DEFINITIONS, OPERATOR_LABELS, getFieldDefinition } from '../../../config/filterConfig';
import { FilterInput } from '../FilterInput';

interface FilterRowProps {
  condition: FilterCondition;
  onUpdate: (condition: FilterCondition) => void;
  onRemove: () => void;
}

export const FilterRow = ({ condition, onUpdate, onRemove }: FilterRowProps) => {
  const fieldDef = getFieldDefinition(condition.field);

  const handleFieldChange = (fieldKey: string) => {
    const newFieldDef = getFieldDefinition(fieldKey);
    if (!newFieldDef) return;

    // Reset operator and value when field changes
    const newCondition: FilterCondition = {
      ...condition,
      field: fieldKey,
      fieldType: newFieldDef.type,
      operator: newFieldDef.operators[0],
      value: getDefaultValue(newFieldDef.type),
    };

    onUpdate(newCondition);
  };

  const handleOperatorChange = (operator: FilterOperator) => {
    const newCondition: FilterCondition = {
      ...condition,
      operator,
      // Reset value if operator type changes
      value: getDefaultValue(condition.fieldType),
    };
    onUpdate(newCondition);
  };

  const handleValueChange = (value: any) => {
    const newCondition: FilterCondition = {
      ...condition,
      value,
    };
    onUpdate(newCondition);
  };

  const getDefaultValue = (fieldType: string): any => {
    switch (fieldType) {
      case 'text':
      case 'singleSelect':
        return '';
      case 'number':
        return NaN;
      case 'date':
        return { start: '', end: '' };
      case 'amount':
        return { min: NaN, max: NaN };
      case 'multiSelect':
        return [];
      case 'boolean':
        return true;
      default:
        return '';
    }
  };

  return (
    <Paper elevation={1} sx={{ p: 2, mb: 2, overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'flex-start',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '4px',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.5)',
            },
          },
          // Prevent flex items from shrinking on mobile
          '& > *': {
            flexShrink: 0,
          },
        }}
      >
        {/* Field Selector */}
        <FormControl size="small" sx={{ minWidth: { xs: 150, sm: 180 } }}>
          <InputLabel>Field</InputLabel>
          <Select
            value={condition.field}
            onChange={(e) => handleFieldChange(e.target.value)}
            label="Field"
          >
            {FIELD_DEFINITIONS.map((field) => (
              <MenuItem key={field.key} value={field.key}>
                {field.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Operator Selector */}
        <FormControl size="small" sx={{ minWidth: { xs: 160, sm: 200 } }}>
          <InputLabel>Operator</InputLabel>
          <Select
            value={condition.operator}
            onChange={(e) => handleOperatorChange(e.target.value as FilterOperator)}
            label="Operator"
          >
            {fieldDef?.operators.map((op) => (
              <MenuItem key={op} value={op}>
                {OPERATOR_LABELS[op]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Dynamic Filter Input */}
        <Box sx={{ minWidth: { xs: 200, sm: 250 }, flex: { xs: '0 0 auto', sm: 1 } }}>
          <FilterInput condition={condition} onChange={handleValueChange} />
        </Box>

        {/* Remove Button */}
        <IconButton
          color="error"
          onClick={onRemove}
          size="small"
          sx={{ mt: 0.5, flexShrink: 0 }}
        >
          <Trash2 size={18} />
        </IconButton>
      </Box>
    </Paper>
  );
};

