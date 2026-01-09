# Dynamic Filter Component System

A powerful, reusable, and type-safe dynamic filter component system built with React 18, TypeScript, and Material UI. This application allows users to filter employee data using multiple filter conditions with various field types, operators, and input methods.

## 🌐 Live Demo

**[View Live Application](https://efe-assignment-1hq3.vercel.app/)**

## ✨ Features

### Core Functionality
- **Dynamic Filter Builder**: Add multiple filter conditions with different field types
- **Multi-Type Filter Support**: Supports text, number, date, amount, single-select, multi-select, and boolean fields
- **Real-time Filtering**: Apply filters to update displayed data instantly
- **Sortable Data Table**: Sort columns by clicking headers
- **Filter Persistence**: Filters are automatically saved to localStorage
- **Data Export**: Export filtered data to CSV or JSON format

### Advanced Features
- **Regex Support**: Text fields support regex pattern matching
- **Range Filters**: Number and amount fields support between-range filtering
- **Debounced Inputs**: Optimized input handling for better performance
- **Accessibility**: Full ARIA labels and keyboard navigation support
- **Responsive Design**: Mobile-friendly with horizontal scrolling for filter rows
- **Modern UI**: Beautiful gradient background with glassmorphism effects

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material UI (MUI)** - Component library
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux
- **Day.js** - Date manipulation
- **Lucide React** - Icon library
- **MUI X Date Pickers** - Date range selection

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd efe-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
efe-assignment/
├── src/
│   ├── components/          # React components
│   │   ├── filters/          # Filter-related components
│   │   │   ├── FilterBuilder/    # Main filter builder container
│   │   │   ├── FilterRow/        # Individual filter row
│   │   │   └── FilterInput/      # Dynamic input components
│   │   └── table/            # Data table component
│   ├── config/              # Configuration files
│   │   └── filterConfig.ts  # Field definitions and operator mappings
│   ├── data/                # Data files
│   │   └── mockData.ts      # Sample employee data (55+ records)
│   ├── hooks/               # Custom React hooks
│   │   ├── useDebounce.ts   # Debounce utility hook
│   │   └── useThrottle.ts   # Throttle utility hook
│   ├── services/            # Business logic services
│   │   ├── filterService.ts     # Filtering algorithms
│   │   ├── exportService.ts    # CSV/JSON export functionality
│   │   └── mockApi.ts          # Mock API service
│   ├── store/               # Redux store
│   │   ├── filterSlice.ts   # Filter state management
│   │   ├── hooks.ts         # Typed Redux hooks
│   │   └── index.ts         # Store configuration
│   ├── types/               # TypeScript type definitions
│   │   └── filter.types.ts  # Filter-related types
│   ├── utils/               # Utility functions
│   │   └── localStorage.ts  # LocalStorage persistence
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Component Usage Examples

### FilterBuilder Component

The main filter container that manages multiple filter conditions.

```tsx
import { FilterBuilder } from './components/filters/FilterBuilder';

function App() {
  return (
    <div>
      <FilterBuilder />
    </div>
  );
}
```

**Features:**
- Add new filters with "Add Filter" button
- Clear all filters with "Clear All" button
- Apply filters with "Apply Filters" button
- Filters are automatically persisted to localStorage

### FilterRow Component

Individual filter row with field, operator, and value selectors.

```tsx
import { FilterRow } from './components/filters/FilterRow';
import type { FilterCondition } from './types/filter.types';

const condition: FilterCondition = {
  id: 'filter-1',
  field: 'name',
  fieldType: FieldType.TEXT,
  operator: 'contains',
  value: 'John'
};

function MyComponent() {
  const handleUpdate = (updatedCondition: FilterCondition) => {
    // Update filter logic
  };

  const handleRemove = () => {
    // Remove filter logic
  };

  return (
    <FilterRow
      condition={condition}
      onUpdate={handleUpdate}
      onRemove={handleRemove}
    />
  );
}
```

### FilterInput Components

Dynamic input components that render based on field type.

```tsx
import { FilterInput } from './components/filters/FilterInput';
import type { FilterCondition } from './types/filter.types';

const condition: FilterCondition = {
  id: 'filter-1',
  field: 'salary',
  fieldType: FieldType.AMOUNT,
  operator: 'between',
  value: { min: 50000, max: 100000 }
};

function MyComponent() {
  const handleValueChange = (value: any) => {
    // Handle value change
  };

  return (
    <FilterInput
      condition={condition}
      onChange={handleValueChange}
    />
  );
}
```

**Available Input Types:**
- `TextInput` - Text fields with regex support
- `NumberInput` - Number fields with range support
- `DateRangeInput` - Date range picker
- `AmountRangeInput` - Amount range with currency formatting
- `SingleSelectInput` - Dropdown for single selection
- `MultiSelectInput` - Multi-select with checkboxes
- `BooleanInput` - Radio buttons for boolean values

### DataTable Component

Sortable data table with record counts.

```tsx
import { DataTable } from './components/table';
import type { Employee } from './data/mockData';

const employees: Employee[] = [
  // ... employee data
];

function MyComponent() {
  return (
    <DataTable
      data={employees}
      totalCount={55}
    />
  );
}
```

**Features:**
- Sortable columns (click headers to sort)
- Record count display (filtered vs total)
- "No results" message when filters return empty
- Responsive design

## 🔧 Filter Configuration

Filters are configured in `src/config/filterConfig.ts`. To add a new filterable field:

```typescript
import { FieldType } from '../types/filter.types';

export const FIELD_DEFINITIONS: FieldDefinition[] = [
  {
    key: 'customField',
    label: 'Custom Field',
    type: FieldType.TEXT,
    operators: ['equals', 'contains', 'startsWith', 'endsWith', 'doesNotContain', 'regex'],
  },
  // ... more fields
];
```

## 📊 Supported Filter Types

### Text Fields
- **Fields**: ID, Name, Email, Department
- **Operators**: Equals, Contains, Starts With, Ends With, Does Not Contain, Matches Regex
- **Input**: Text input with regex validation

### Number Fields
- **Fields**: Projects, Performance Rating
- **Operators**: Equals, Greater Than, Less Than, Greater Than or Equal, Less Than or Equal, Between
- **Input**: Number input or min/max range inputs

### Date Fields
- **Fields**: Join Date, Last Review
- **Operators**: Between
- **Input**: Date range picker with calendar interface

### Amount Fields
- **Fields**: Salary
- **Operators**: Between
- **Input**: Min/max amount inputs with currency formatting

### Single Select Fields
- **Fields**: City, Role
- **Operators**: Is, Is Not
- **Input**: Dropdown with predefined options

### Multi-Select Fields
- **Fields**: Skills, Role (multi-select)
- **Operators**: In, Not In
- **Input**: Multi-select dropdown with checkboxes

### Boolean Fields
- **Fields**: Active Status
- **Operators**: Is
- **Input**: Radio buttons (Yes/No)

## 🎨 Styling

The application uses Material UI for styling with a custom gradient background:

- **Background**: Blue to violet gradient (`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`)
- **Container**: Glassmorphism effect with semi-transparent white background
- **Responsive**: Mobile-friendly with horizontal scrolling for filter rows

## 🔄 State Management

The application uses Redux Toolkit for state management:

```typescript
// Access filters
const filters = useAppSelector((state) => state.filter.filters);
const appliedFilters = useAppSelector((state) => state.filter.appliedFilters);

// Dispatch actions
const dispatch = useAppDispatch();
dispatch(addFilter(newFilter));
dispatch(applyFilters());
dispatch(removeFilter(filterId));
```

## 💾 Data Persistence

Filters are automatically saved to localStorage and restored on page load:

- **Draft Filters**: Saved when filters are added/updated
- **Applied Filters**: Saved when "Apply Filters" is clicked
- **Automatic Restore**: Filters are loaded on application start

## 📤 Data Export

Export filtered data to CSV or JSON:

```typescript
import { exportService } from './services/exportService';

// Export to CSV
exportService.exportToCSV(filteredEmployees, 'employees.csv');

// Export to JSON
exportService.exportToJSON(filteredEmployees, 'employees.json');
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧪 Testing Filter Logic

The filtering logic supports:

- **AND Logic**: All filters must match (different fields)
- **OR Logic**: Multiple filters on the same field (at least one must match)
- **Case-Insensitive**: Text matching is case-insensitive
- **Nested Objects**: Supports dot notation (e.g., `address.city`)
- **Array Filtering**: Handles array fields like skills

## 📝 Type Safety

The application is fully typed with TypeScript:

```typescript
import type { FilterCondition, FieldType, FilterOperator } from './types/filter.types';
import type { Employee } from './data/mockData';
```

## 🔍 Filter Service API

```typescript
import { applyFilters, getNestedValue } from './services/filterService';

// Apply filters to data
const filteredData = applyFilters(employees, filters);

// Get nested value from object
const city = getNestedValue(employee, 'address.city');
```

## 🎯 Best Practices

1. **Type Safety**: Always use TypeScript types for filter conditions
2. **Component Reusability**: Filter components are designed to be reusable
3. **Performance**: Filtering is optimized with memoization
4. **Accessibility**: All interactive elements have ARIA labels
5. **Responsive Design**: Components adapt to mobile and desktop screens

## 📄 License

This project is part of a frontend assessment.

## 👤 Author

Built as a demonstration of advanced React and TypeScript skills with focus on:
- Component architecture and modularity
- Type safety throughout the application
- Reusable and extensible design patterns
- Modern React best practices
- Performance optimization

---

**Live Demo**: [https://efe-assignment-1hq3.vercel.app/](https://efe-assignment-1hq3.vercel.app/)
