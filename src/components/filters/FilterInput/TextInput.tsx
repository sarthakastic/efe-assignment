import { TextField } from '@mui/material';
import type { FilterCondition } from '../../../types/filter.types';

interface TextInputProps {
  condition: FilterCondition;
  onChange: (value: string) => void;
}

export const TextInput = ({ condition, onChange }: TextInputProps) => {
  return (
    <TextField
      fullWidth
      size="small"
      value={condition.value as string || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter text..."
      variant="outlined"
    />
  );
};

