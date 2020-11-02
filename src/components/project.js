import React from 'react';

const Project = ({img, link, name, github})=>(
    <div>
    <div className="item">
        <div>
            <img src={img} alt=""/>
            <a href={link} className="btn-light" >
                <i className="fas fa-eye"></i>{name}
            </a>
            <a href={github} className="btn-dark">
                <i className="fab fa-github"></i>Github
            </a>
        </div>
    </div>
    
    </div>)

    export default Project