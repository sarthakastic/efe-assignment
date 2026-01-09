import { FieldType } from '../../../types/filter.types';
import { TextInput } from './TextInput';
import { NumberInput } from './NumberInput';
import { DateRangeInput } from './DateRangeInput';
import { AmountRangeInput } from './AmountRangeInput';
import { SingleSelectInput } from './SingleSelectInput';
import { MultiSelectInput } from './MultiSelectInput';
import { BooleanInput } from './BooleanInput';
import type { FilterCondition } from '../../../types/filter.types';

interface FilterInputProps {
  condition: FilterCondition;
  onChange: (value: any) => void;
}

/**
 * Dynamic Filter Input Component
 * Renders the appropriate input component based on field type
 */
export const FilterInput = ({ condition, onChange }: FilterInputProps) => {
  switch (condition.fieldType) {
    case FieldType.TEXT:
      return <TextInput condition={condition} onChange={onChange} />;

    case FieldType.NUMBER:
      return (
        <NumberInput
          condition={condition}
          onChange={(value) => onChange(value)}
        />
      );

    case FieldType.DATE:
      return <DateRangeInput condition={condition} onChange={onChange} />;

    case FieldType.AMOUNT:
      return <AmountRangeInput condition={condition} onChange={onChange} />;

    case FieldType.SINGLE_SELECT:
      return <SingleSelectInput condition={condition} onChange={onChange} />;

    case FieldType.MULTI_SELECT:
      return <MultiSelectInput condition={condition} onChange={onChange} />;

    case FieldType.BOOLEAN:
      return <BooleanInput condition={condition} onChange={onChange} />;

    default:
      return null;
  }
};

