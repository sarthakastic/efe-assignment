import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type { FilterCondition } from '../../../types/filter.types';
import { getFieldDefinition } from '../../../config/filterConfig';

interface SingleSelectInputProps {
  condition: FilterCondition;
  onChange: (value: string) => void;
}

export const SingleSelectInput = ({ condition, onChange }: SingleSelectInputProps) => {
  const fieldDef = getFieldDefinition(condition.field);
  const options = fieldDef?.options || [];

  return (
    <FormControl fullWidth size="small">
      <InputLabel>Select Value</InputLabel>
      <Select
        value={condition.value as string || ''}
        onChange={(e) => onChange(e.target.value)}
        label="Select Value"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

