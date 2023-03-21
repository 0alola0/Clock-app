import React from 'react';
import DetailInn from './DetailInn';

const Details = ({data}) => {


  return (
    <div className="details-wrapper">
        <div className="details-left">
            <DetailInn minor={"CURRENT TIMEZONE"} major={data?.timezone}/>
            <DetailInn minor={"DAY OF THE YEAR"} major={data?.day_of_year}/>
        </div>
        <div className="details-right">  
            <DetailInn minor={"DAY OF THE WEEK"} major={data?.day_of_week}/>
            <DetailInn minor={"WEEK NUMBER"} major={data?.week_number}/>
        </div>
    </div>
  );
}

export default Details;
