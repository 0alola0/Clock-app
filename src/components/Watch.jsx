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
    let word = greeting<5? "MORNING" : (greeting<12? "AFTERNOON" : "EVENING")
    console.log(word)

    const handleToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    const height = {
        overflow: 'hidden',
        maxHeight: toggle? 0 : 500
    }    
    
    console.log(data, currentTime)

    if(loading) return (<LoadingScreen/>)

  return (
    <div>
        <div className="out-container">
            <div className="watch-wrapper">
                <div className="welcomer">
                    <img src={word=="EVENING"? "/assets/desktop/icon-moon.svg" : "/assets/desktop/icon-sun.svg"} alt="" />
                    <h3 className="welcomer-text"> GOOD {word}, IT'S CURRENTLY</h3>
                </div>
                <div className="time-wrapper">
                    <h1 className="time">{currentTime}</h1>
                    <h3 className="zone">{data?.abbreviation}</h3>
                </div>
                <CityCountry customer={data?.client_ip}/>
            </div>
            <button onClick={handleToggle}>
                {toggle? "more" : "less"}
                <img src="/assets/desktop/icon-arrow-down.svg" alt="arrow" />
            </button>
        </div>

        <div style={height} className="details-div" >
            <Details data={data}/>
        </div>
    </div>

  );
}

export default Watch;
