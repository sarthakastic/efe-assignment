import { Box, TextField } from '@mui/material';
import type { FilterCondition } from '../../../types/filter.types';

interface AmountRangeInputProps {
  condition: FilterCondition;
  onChange: (value: { min: number; max: number }) => void;
}

export const AmountRangeInput = ({ condition, onChange }: AmountRangeInputProps) => {
  const range = (condition.value as { min: number; max: number }) || { min: NaN, max: NaN };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = value === '' ? NaN : Number(value);
    onChange({
      min: isNaN(numValue) ? NaN : numValue,
      max: range.max,
    });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = value === '' ? NaN : Number(value);
    onChange({
      min: range.min,
      max: isNaN(numValue) ? NaN : numValue,
    });
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <TextField
        fullWidth
        size="small"
        type="number"
        label="Min"
        value={isNaN(range.min) ? '' : range.min}
        onChange={handleMinChange}
        placeholder="Min amount"
        variant="outlined"
        InputProps={{
          startAdornment: '$',
        }}
      />
      <TextField
        fullWidth
        size="small"
        type="number"
        label="Max"
        value={isNaN(range.max) ? '' : range.max}
        onChange={handleMaxChange}
        placeholder="Max amount"
        variant="outlined"
        InputProps={{
          startAdornment: '$',
        }}
      />
    </Box>
  );
};

