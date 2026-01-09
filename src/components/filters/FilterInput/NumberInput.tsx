import { Box, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import type { FilterCondition } from '../../../types/filter.types';

interface NumberInputProps {
  condition: FilterCondition;
  onChange: (value: number | { min: number; max: number }) => void;
}

export const NumberInput = ({ condition, onChange }: NumberInputProps) => {
  const isBetween = condition.operator === 'between';
  
  const [localValue, setLocalValue] = useState<number | { min: number; max: number }>(
    isBetween
      ? (condition.value as { min: number; max: number }) || { min: NaN, max: NaN }
      : (condition.value as number) || NaN
  );

  // Sync with condition value if changed externally (e.g., operator change)
  useEffect(() => {
    if (isBetween) {
      const newValue = (condition.value as { min: number; max: number }) || { min: NaN, max: NaN };
      if (JSON.stringify(newValue) !== JSON.stringify(localValue)) {
        setLocalValue(newValue);
      }
    } else {
      const newValue = (condition.value as number) || NaN;
      if (newValue !== localValue) {
        setLocalValue(newValue);
      }
    }
  }, [condition.value, isBetween]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isBetween) {
    const range = localValue as { min: number; max: number };
    
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const numValue = value === '' ? NaN : Number(value);
      const newValue = {
        min: isNaN(numValue) ? NaN : numValue,
        max: range.max,
      };
      setLocalValue(newValue);
      onChange(newValue); // Update immediately
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const numValue = value === '' ? NaN : Number(value);
      const newValue = {
        min: range.min,
        max: isNaN(numValue) ? NaN : numValue,
      };
      setLocalValue(newValue);
      onChange(newValue); // Update immediately
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
          placeholder="Min"
          variant="outlined"
          inputProps={{ step: 'any' }}
          aria-label={`Minimum value for ${condition.field}`}
        />
        <TextField
          fullWidth
          size="small"
          type="number"
          label="Max"
          value={isNaN(range.max) ? '' : range.max}
          onChange={handleMaxChange}
          placeholder="Max"
          variant="outlined"
          inputProps={{ step: 'any' }}
          aria-label={`Maximum value for ${condition.field}`}
        />
      </Box>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || value === '-') {
      setLocalValue(NaN);
      onChange(NaN); // Update immediately
    } else {
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        setLocalValue(numValue);
        onChange(numValue); // Update immediately
      }
    }
  };

  return (
    <TextField
      fullWidth
      size="small"
      type="number"
      value={isNaN(localValue as number) ? '' : localValue}
      onChange={handleChange}
      placeholder="Enter number..."
      variant="outlined"
      inputProps={{ step: 'any' }}
      aria-label={`Filter ${condition.field} ${condition.operator}`}
    />
  );
};

