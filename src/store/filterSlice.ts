import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterCondition } from '../types/filter.types';

interface FilterState {
  filters: FilterCondition[];
  appliedFilters: FilterCondition[];
}

const initialState: FilterState = {
  filters: [],
  appliedFilters: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<FilterCondition>) => {
      state.filters.push(action.payload);
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.filters = state.filters.filter((filter) => filter.id !== action.payload);
      // Automatically sync applied filters when a filter is removed
      state.appliedFilters = [...state.filters];
    },
    updateFilter: (state, action: PayloadAction<FilterCondition>) => {
      const index = state.filters.findIndex((filter) => filter.id === action.payload.id);
      if (index !== -1) {
        state.filters[index] = action.payload;
      }
    },
    clearAllFilters: (state) => {
      state.filters = [];
    },
    setFilters: (state, action: PayloadAction<FilterCondition[]>) => {
      state.filters = action.payload;
    },
    applyFilters: (state) => {
      // Copy current filters to applied filters
      state.appliedFilters = [...state.filters];
    },
    clearAppliedFilters: (state) => {
      state.appliedFilters = [];
    },
  },
});

export const {
  addFilter,
  removeFilter,
  updateFilter,
  clearAllFilters,
  setFilters,
  applyFilters,
  clearAppliedFilters,
} = filterSlice.actions;
export default filterSlice.reducer;

