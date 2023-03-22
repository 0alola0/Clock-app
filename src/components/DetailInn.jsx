import React from 'react';

const DetailInn = ({currentColor, minor, major}) => {
  return (
     <div className="inner-detail">
         <h4 style={currentColor} className="detail-meek-text">{minor}</h4>
         <h2 style={currentColor} className="detail-bold-text">{major}</h2>
     </div>  
  );
}

export default DetailInn;
