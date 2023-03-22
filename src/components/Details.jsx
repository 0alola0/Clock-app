import React from 'react';
import DetailInn from './DetailInn';

const Details = ({currentBorder, currentColor, data}) => {


  return (
    <div className="details-wrapper">
        <div style={currentBorder} className="details-left">
            <DetailInn currentColor={currentColor} minor={"CURRENT TIMEZONE"} major={data?.timezone}/>
            <DetailInn currentColor={currentColor} minor={"DAY OF THE YEAR"} major={data?.day_of_year}/>
        </div>
        <div className="details-right">  
            <DetailInn currentColor={currentColor} minor={"DAY OF THE WEEK"} major={data?.day_of_week}/>
            <DetailInn currentColor={currentColor} minor={"WEEK NUMBER"} major={data?.week_number}/>
        </div>
    </div>
  );
}

export default Details;
