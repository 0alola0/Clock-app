import React from 'react';
import { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import getData from '../hooks/getData';
import CityCountry from './CityCountry';
import Details from './Details';



const Watch = () => {
    const [toggle, setToggle] = useState(true)

    const {data, loading, error, refetch} = getData('//worldtimeapi.org/api/ip')
    let currentTime = data?.datetime.slice(11, 16)
    let greeting = parseInt(currentTime?.slice(0,2))
    let word = greeting<5? "MORNING" : (greeting<18? "AFTERNOON" : "EVENING")
    const handleToggle = () => {
        setToggle(!toggle)
    }
    
    const height = {
        overflow: 'hidden',
        maxHeight: toggle? 0 : 500,
        backgroundColor: word=="EVENING"? "rgba(0, 0, 0, 0.589)" : "rgba(214, 214, 214, 0.589)"
    }
    const currentBorder = {
        borderColor: word=="EVENING"? "black" : "white"
    }
    const currentColor  = {
        color: word=="EVENING"? "black" : "white"
    }

    document.body.style.backgroundImage = word=="EVENING"? `url("/assets/desktop/bg-image-nighttime.jpg")` : `url("/assets/desktop/bg-image-daytime.jpg")`;

    if(loading) return (<LoadingScreen/>)

  return (
    <div>
        <div className="watch-wrapper">
            <div className="welcomer">
                <img src={word=="EVENING"? "/assets/desktop/icon-moon.svg" : "/assets/desktop/icon-sun.svg"} alt="" />
                <h3 className="welcomer-text"> GOOD {word}, <span className="temporaryText">IT'S CURRENTLY</span></h3>
            </div>
            <div className="time-wrapper">
                <h1 className="time">{currentTime}</h1>
                <h3 className="zone">{data?.abbreviation}</h3>
            </div>
            <div className="toggle-out">
                <CityCountry customer={data?.timezone}/>
                <button className="toggle-btn" onClick={handleToggle}>
                {toggle? "more" : "less"}
                <img src= {toggle? "/assets/desktop/icon-arrow-down.svg"  : "/assets/desktop/icon-arrow-up.svg" } alt="arrow" />
                </button>
            </div>
        </div>

        <div style={height} className="details-div" >
            <Details currentBorder={currentBorder} currentColor={currentColor} data={data}/>
        </div>
    </div>

  );
}

export default Watch;
