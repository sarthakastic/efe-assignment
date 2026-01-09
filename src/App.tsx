import { useEffect, useState, useMemo } from 'react';
import './App.css';
import { Container, Typography, Box, CircularProgress, Button, Stack } from '@mui/material';
import { FileText, FileJson } from 'lucide-react';
import { employeeApi, type Employee } from './services';
import { useAppSelector } from './store/hooks';
import { applyFilters } from './services/filterService';
import { exportService } from './services/exportService';
import { FilterBuilder } from './components/filters/FilterBuilder';
import { DataTable } from './components/table';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get applied filters from Redux store (only these are used for filtering)
  const appliedFilters = useAppSelector((state) => state.filter.appliedFilters);

  // Fetch employees on mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await employeeApi.getAllEmployees();
        setEmployees(data);
      } catch (err) {
        setError('Failed to load employees');
        // eslint-disable-next-line no-console
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Apply filters to employees (only when Apply button is clicked)
  const filteredEmployees = useMemo(() => {
    return applyFilters(employees, appliedFilters);
  }, [employees, appliedFilters]);

  return (
    <Container
      sx={{
        py: 4,
        maxWidth: '90vw',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 2,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ color: '#333' }} component="h1">
          Employee Directory
        </Typography>
        {!loading && !error && filteredEmployees.length > 0 && (
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              startIcon={<FileText size={18} />}
              onClick={() => exportService.exportToCSV(filteredEmployees)}
              aria-label="Export filtered data to CSV"
            >
              Export CSV
            </Button>
            <Button
              variant="outlined"
              startIcon={<FileJson size={18} />}
              onClick={() => exportService.exportToJSON(filteredEmployees)}
              aria-label="Export filtered data to JSON"
            >
              Export JSON
            </Button>
          </Stack>
        )}
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          {/* Filter Builder */}
          <FilterBuilder />

          {/* Data Table */}
          <DataTable data={filteredEmployees} totalCount={employees.length} />
        </>
      )}
    </Container>
  );
}

export default App;
