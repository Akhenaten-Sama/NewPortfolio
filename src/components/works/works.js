import React from 'react';
import Project from '../project';

const Works = ()=>{
    return(<div className='work'>
     
        <h2 className='title'>SOME WORKS</h2>
        <div className='projects' id='projects'>
        <Project
         name='Zeez'
         link='https://zeez-the-plug.netlify.app'
         github='https://github.com/Akhenaten-Sama/Zeezah'
         img='zeez.jpeg'
         />

         <Project name='TripsNG'
         link="tripsng.netlify.app"
         github="https://github.com/Akhenaten-Sama/oldhtml"
         img='trips.jpeg'/>
        <Project name='SegunFlames'
        link='https://segun-oniyide.netlify.app' 
        github='https://github.com/Akhenaten-Sama/Segun-Oniyide'
        img='Flames.jpeg'
        />
        <Project name ='Weather App'
        link='https://seun-weather-app.herokuapp.com' 
        github='https://github.com/Akhenaten-Sama/Node-weather-app'
        img='weather.jpeg'
        />
        <Project name='Findr'
        link='https://findrr.netlify.app' 
        github='https://github.com/Akhenaten-Sama/Findr'
        img='Findr.jpeg'/>

        <Project 
        name='Voting App'
        link='https://voteapp.netlify.app'
        github="https://github.com/Akhenaten-Sama/voteapps"
        img='vote.jpeg'/>
        </div>
        </div>)
}

export default Works