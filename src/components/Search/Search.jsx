import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../utils/api";

const search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&languageCode=es&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      className="mx-12 my-4 rounded-full shadow-lg"
      placeholder="Ingresá una ciudad"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default search;
