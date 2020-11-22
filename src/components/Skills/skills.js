import React from 'react';

const Skillset =[
	{name:"Html", icon:"fab fa-html5 fa-3x"},
	{name:"CSS", icon:"fab fa-css3-alt fa-3x"},
	{name:"JavaScript", icon:"fab fa-js-square fa-3x"},
	{name:"React", icon:"fab fa-react fa-3x"},
	{name:"NodeJs", icon:"fab fa-node-js fa-3x"},
	{name:"Redux", img:"https://img.icons8.com/color/45/000000/redux.png"},
	{name:"GraphQL", img:"https://img.icons8.com/color/45/000000/graphql.png"},
	{name:"Firebase", img:"https://img.icons8.com/color/45/000000/firebase.png"},
	

	
	{name:"Github", icon:"fab fa-github-square fa-3x"},
	{name:"Docker", icon:"fab fa-docker fa-2x"},
	
	
]


const Skills = () => {
	return (
        <div className="skill-section">
        <h2 className='title'>Skills</h2>
		<div className="skills">
		

		{Skillset.map(skill=>{
			return(<div>
			<div className="skill">
			{skill.icon?<i className={skill.icon} />:<img className="icon" src={skill.img} alt="firebase" />}
			</div>
			<h5 class='skill-name'>{skill.name}</h5>
		</div>)
		})
	}

			
			
                
        
            </div>
            </div>
	);
};

export default Skills;
