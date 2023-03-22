import React from 'react';
import getData from '../hooks/getData';
import Typewriter from "typewriter-effect";
import LoadingScreen from './LoadingScreen';
import QouteCSS from './styleModules/Quote.module.css'

const Quote = () => {
    const {data, loading, error, refetch} = getData('//api.quotable.io/random')
    var quote = data?.content
    console.log("happening")
    if(loading) return (<LoadingScreen/>)

  return (
    <div className={QouteCSS.wrapper}>
        <div className={QouteCSS.container}>
            <h3 className={QouteCSS.advice}> 
             <Typewriter
             onInit={(typewriter)=> {
             typewriter
             .typeString("welcome")
             .pauseFor(1000)
             .deleteAll()
             .typeString(data?.content)
             .pauseFor(1000)
             .start();
             }}/>
             </h3>
            <button className={QouteCSS.btn} onClick={refetch}><img src="/assets/desktop/icon-refresh.svg" alt="" /></button>
        </div>
        <h3 className={QouteCSS.author}>{data?.authorSlug.replace(/-/g, " ")}</h3>
    </div>
  );
}

export default Quote;
