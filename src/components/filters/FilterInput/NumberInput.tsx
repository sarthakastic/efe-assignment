import { TextField } from '@mui/material';
import type { FilterCondition } from '../../../types/filter.types';

interface NumberInputProps {
  condition: FilterCondition;
  onChange: (value: number) => void;
}

export const NumberInput = ({ condition, onChange }: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || value === '-') {
      onChange(NaN);
      return;
    }
    const numValue = Number(value);
    if (!isNaN(numValue)) {
      onChange(numValue);
    }
  };

  return (
    <TextField
      fullWidth
      size="small"
      type="number"
      value={isNaN(condition.value as number) ? '' : condition.value}
      onChange={handleChange}
      placeholder="Enter number..."
      variant="outlined"
      inputProps={{ step: 'any' }}
    />
  );
};

