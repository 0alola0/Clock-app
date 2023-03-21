import React from 'react';

const DetailInn = ({minor, major}) => {
  return (
     <div className="inner-detail">
         <h4 className="detail-meek-text">{minor}</h4>
         <h2 className="detail-bold-text">{major}</h2>
     </div>  
  );
}

export default DetailInn;
