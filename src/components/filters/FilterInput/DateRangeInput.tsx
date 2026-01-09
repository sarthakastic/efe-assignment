import { Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import type { FilterCondition } from '../../../types/filter.types';

interface DateRangeInputProps {
  condition: FilterCondition;
  onChange: (value: { start: string; end: string }) => void;
}

export const DateRangeInput = ({ condition, onChange }: DateRangeInputProps) => {
  const range = (condition.value as { start: string; end: string }) || { start: '', end: '' };
  const startDate = range.start ? dayjs(range.start) : null;
  const endDate = range.end ? dayjs(range.end) : null;

  const handleStartChange = (date: Dayjs | null) => {
    onChange({
      start: date ? date.format('YYYY-MM-DD') : '',
      end: range.end || '',
    });
  };

  const handleEndChange = (date: Dayjs | null) => {
    onChange({
      start: range.start || '',
      end: date ? date.format('YYYY-MM-DD') : '',
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={handleStartChange}
          slotProps={{ textField: { size: 'small', fullWidth: true } }}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={handleEndChange}
          slotProps={{ textField: { size: 'small', fullWidth: true } }}
        />
      </Box>
    </LocalizationProvider>
  );
};

