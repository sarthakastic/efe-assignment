import type { FilterCondition } from '../types/filter.types';

const FILTERS_STORAGE_KEY = 'employee-filters';
const APPLIED_FILTERS_STORAGE_KEY = 'employee-applied-filters';

/**
 * LocalStorage utility for filter persistence
 */
export const filterStorage = {
  /**
   * Save filters to localStorage
   */
  saveFilters: (filters: FilterCondition[]): void => {
    try {
      localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to save filters to localStorage:', error);
    }
  },

  /**
   * Load filters from localStorage
   */
  loadFilters: (): FilterCondition[] => {
    try {
      const stored = localStorage.getItem(FILTERS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to load filters from localStorage:', error);
      return [];
    }
  },

  /**
   * Save applied filters to localStorage
   */
  saveAppliedFilters: (filters: FilterCondition[]): void => {
    try {
      localStorage.setItem(APPLIED_FILTERS_STORAGE_KEY, JSON.stringify(filters));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to save applied filters to localStorage:', error);
    }
  },

  /**
   * Load applied filters from localStorage
   */
  loadAppliedFilters: (): FilterCondition[] => {
    try {
      const stored = localStorage.getItem(APPLIED_FILTERS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to load applied filters from localStorage:', error);
      return [];
    }
  },

  /**
   * Clear all filter data from localStorage
   */
  clearFilters: (): void => {
    try {
      localStorage.removeItem(FILTERS_STORAGE_KEY);
      localStorage.removeItem(APPLIED_FILTERS_STORAGE_KEY);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to clear filters from localStorage:', error);
    }
  },
};

