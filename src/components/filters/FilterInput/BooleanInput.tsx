import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import type { FilterCondition } from '../../../types/filter.types';

interface BooleanInputProps {
  condition: FilterCondition;
  onChange: (value: boolean) => void;
}

export const BooleanInput = ({ condition, onChange }: BooleanInputProps) => {
  const value = condition.value as boolean;

  return (
    <FormControl fullWidth>
      <RadioGroup
        row
        value={value === true ? 'true' : value === false ? 'false' : ''}
        onChange={(e) => onChange(e.target.value === 'true')}
      >
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
};

