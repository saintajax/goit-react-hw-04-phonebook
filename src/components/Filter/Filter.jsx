import { Label, Input } from './Filter.styled';
import { PropTypes } from 'prop-types';

export const Filter = ({ valueFilter, handleChange }) => {
  return (
    <Label>
      Find contact by name
      <Input name="filter" value={valueFilter} onChange={handleChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
