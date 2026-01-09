import { useState, useEffect } from 'react';
import { TextField, FormHelperText } from '@mui/material';
import type { FilterCondition } from '../../../types/filter.types';

interface TextInputProps {
  condition: FilterCondition;
  onChange: (value: string) => void;
}

export const TextInput = ({ condition, onChange }: TextInputProps) => {
  const [localValue, setLocalValue] = useState<string>((condition.value as string) || '');
  const [regexError, setRegexError] = useState<string>('');

  // Sync with condition value if changed externally (e.g., field/operator change)
  useEffect(() => {
    const conditionValue = (condition.value as string) || '';
    if (conditionValue !== localValue) {
      setLocalValue(conditionValue);
    }
  }, [condition.value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value);
    onChange(value); // Update immediately since filters are applied on button click

    // Validate regex if operator is regex
    if (condition.operator === 'regex') {
      try {
        new RegExp(value);
        setRegexError('');
      } catch (error) {
        setRegexError('Invalid regex pattern');
      }
    } else {
      setRegexError('');
    }
  };

  return (
    <>
      <TextField
        fullWidth
        size="small"
        value={localValue}
        onChange={handleChange}
        placeholder={
          condition.operator === 'regex'
            ? 'Enter regex pattern (e.g., ^[A-Z].*)'
            : 'Enter text...'
        }
        variant="outlined"
        error={!!regexError}
        aria-label={`Filter ${condition.field} ${condition.operator}`}
        aria-describedby={regexError ? 'regex-error' : undefined}
      />
      {regexError && (
        <FormHelperText id="regex-error" error>
          {regexError}
        </FormHelperText>
      )}
    </>
  );
};

