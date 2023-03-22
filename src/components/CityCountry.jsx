import React from 'react';
import LoadingScreen from './LoadingScreen';
import getData from '../hooks/getData';



const CityCountry = ({customer}) => {
    const {data, loading, error, refetch} = getData('//ip-api.com/json/')
    const city = data?.city
    const country = data?.countryCode
    const content = data? `${city}, ${country}` : customer

  return (
    <div>
        <h3 className="location">{content}</h3>
    </div>
  );
}

export default CityCountry;
