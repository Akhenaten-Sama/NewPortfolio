import React from 'react';

const Skillset =[
	{id:1, name:"Html", icon:"fab fa-html5 fa-3x"},
	{id:2, name:"CSS", icon:"fab fa-css3-alt fa-3x"},
	{id:3, name:"JavaScript", icon:"fab fa-js-square fa-3x"},
	{id:4, name:"React", icon:"fab fa-react fa-3x"},
	{id:5, name:"NodeJs", icon:"fab fa-node-js fa-3x"},
	{id:6, name:"Redux", img:"https://img.icons8.com/color/45/000000/redux.png"},
	{id:7, name:"GraphQL", img:"https://img.icons8.com/color/45/000000/graphql.png"},
	{id:8, name:"Firebase", img:"https://img.icons8.com/color/45/000000/firebase.png"},
	

	
	{id:9, name:"Github", icon:"fab fa-github-square fa-3x"},
	{id:10, name:"Docker", icon:"fab fa-docker fa-2x"},
	
	
]


const Skills = () => {
	return (
        <div className="skill-section">
        <h2 className='title skill-color'>Skills</h2>
		<div className="skills">
		

		{Skillset.map(skill=>{
			return(<div key={skill.id}>
			<div  className="skill">
			{skill.icon?<i className={skill.icon} />:<img className="icon" src={skill.img} alt="firebase" />}
			</div>
			<h5 className='skill-name'>{skill.name}</h5>
		</div>)
		})
	}

			
			
                
        
            </div>
            </div>
	);
};

export default Skills;
