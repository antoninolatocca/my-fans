import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'italy', label: 'Italy' },
  { value: 'spain', label: 'Spain' },
  { value: 'france', label: 'France' },
];

function CountryAutocomplete() {

  return (
    <Select options={options} placeholder="Your country" id="country" autocomplete="off" />
  );
}

export default CountryAutocomplete;