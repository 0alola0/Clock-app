import React from 'react';
import LoadingScreen from './LoadingScreen';
import getData from '../hooks/getData';



const CityCountry = ({customer}) => {
    const {data, loading, error, refetch} = getData('//ip-api.com/json')
    var city = data?.city
    var country = data?.countryCode
  return (
    <div>
        <h3 className="location">{city}, {country}</h3>
    </div>
  );
}

export default CityCountry;
