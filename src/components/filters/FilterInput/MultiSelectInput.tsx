import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from '@mui/material';
import type { FilterCondition } from '../../../types/filter.types';
import { getFieldDefinition } from '../../../config/filterConfig';

interface MultiSelectInputProps {
  condition: FilterCondition;
  onChange: (value: string[]) => void;
}

export const MultiSelectInput = ({ condition, onChange }: MultiSelectInputProps) => {
  const fieldDef = getFieldDefinition(condition.field);
  const options = fieldDef?.options || [];
  const selectedValues = Array.isArray(condition.value) ? condition.value : [];

  return (
    <FormControl fullWidth size="small">
      <InputLabel>Select Values</InputLabel>
      <Select
        multiple
        value={selectedValues}
        onChange={(e) => onChange(e.target.value as string[])}
        input={<OutlinedInput label="Select Values" />}
        renderValue={(selected) => (selected as string[]).join(', ')}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={selectedValues.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

