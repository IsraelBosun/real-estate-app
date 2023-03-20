import React, { useState, useEffect, createContext} from 'react'

import { housesData } from "../data";

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries ] = useState([]);
  const [property, setProperty ] = useState('Property type (any)');
  const [properties, setProperties ] = useState([]);
  const [price, setPrice ] = useState('Price range (any)');
  const [loading, setLoading ] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    });
    console.log(allCountries)
     // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]

    // set Countries state
    setCountries(uniqueCountries)
  }, [])



  // return all Properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type
    });
     // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]

    // set Properties state
    setProperties(uniqueProperties)
  }, []);

  const handleClick = () => {
    console.log(country, property)
  }
   

  return (
    <HouseContext.Provider 
    value = {{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
