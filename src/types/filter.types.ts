/**
 * Filter Type Definitions
 * Defines all types related to the dynamic filter system
 */

// Field types - using const object instead of enum for erasable syntax
export const FieldType = {
  TEXT: 'text',
  NUMBER: 'number',
  DATE: 'date',
  AMOUNT: 'amount',
  SINGLE_SELECT: 'singleSelect',
  MULTI_SELECT: 'multiSelect',
  BOOLEAN: 'boolean',
} as const;

export type FieldType = (typeof FieldType)[keyof typeof FieldType];

// Operator types per field type
export type TextOperator = 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'doesNotContain';
export type NumberOperator = 'equals' | 'greaterThan' | 'lessThan' | 'greaterThanOrEqual' | 'lessThanOrEqual';
export type DateOperator = 'between';
export type AmountOperator = 'between';
export type SelectOperator = 'is' | 'isNot';
export type MultiSelectOperator = 'in' | 'notIn';
export type BooleanOperator = 'is';

// Union type for all operators
export type FilterOperator =
  | TextOperator
  | NumberOperator
  | DateOperator
  | AmountOperator
  | SelectOperator
  | MultiSelectOperator
  | BooleanOperator;

// Filter value types (discriminated union based on field type)
export type FilterValue =
  | string // Text, single select
  | number // Number
  | { min: number; max: number } // Amount/Number range
  | { start: string; end: string } // Date range (ISO strings)
  | string[] // Multi-select
  | boolean; // Boolean

// Filter condition structure
export interface FilterCondition {
  id: string; // Unique ID for the filter
  field: string; // Field name to filter on
  fieldType: FieldType; // Type of the field
  operator: FilterOperator; // Selected operator
  value: FilterValue; // Filter value (type varies by field type)
}

// Field definition for configuration
export interface FieldDefinition {
  key: string; // Field identifier (supports dot notation for nested fields)
  label: string; // Display label
  type: FieldType; // Field type
  operators: FilterOperator[]; // Available operators for this field
  options?: string[]; // For select fields - predefined options
  path?: string; // For nested fields (e.g., "address.city")
}

// Operator label mapping
export type OperatorLabels = Record<FilterOperator, string>;

