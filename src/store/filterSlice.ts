import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterCondition } from '../types/filter.types';
import { filterStorage } from '../utils/localStorage';

interface FilterState {
  filters: FilterCondition[];
  appliedFilters: FilterCondition[];
}

// Load initial state from localStorage
const initialState: FilterState = {
  filters: filterStorage.loadFilters(),
  appliedFilters: filterStorage.loadAppliedFilters(),
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<FilterCondition>) => {
      state.filters.push(action.payload);
      filterStorage.saveFilters(state.filters);
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.filters = state.filters.filter((filter) => filter.id !== action.payload);
      // Automatically sync applied filters when a filter is removed
      state.appliedFilters = [...state.filters];
      filterStorage.saveFilters(state.filters);
      filterStorage.saveAppliedFilters(state.appliedFilters);
    },
    updateFilter: (state, action: PayloadAction<FilterCondition>) => {
      const index = state.filters.findIndex((filter) => filter.id === action.payload.id);
      if (index !== -1) {
        state.filters[index] = action.payload;
        filterStorage.saveFilters(state.filters);
      }
    },
    clearAllFilters: (state) => {
      state.filters = [];
      filterStorage.saveFilters(state.filters);
    },
    setFilters: (state, action: PayloadAction<FilterCondition[]>) => {
      state.filters = action.payload;
      filterStorage.saveFilters(state.filters);
    },
    applyFilters: (state) => {
      // Copy current filters to applied filters
      state.appliedFilters = [...state.filters];
      filterStorage.saveAppliedFilters(state.appliedFilters);
    },
    clearAppliedFilters: (state) => {
      state.appliedFilters = [];
      filterStorage.saveAppliedFilters(state.appliedFilters);
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

