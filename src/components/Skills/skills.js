import React from 'react';

const Skills = () => {
	return (
        <div className="skill-section">
        <h2 className='title'>Skills</h2>
        <div className="skills">
        
			<div>
				<div className="skill">
					<i className="fab fa-js-square fa-3x" />
				</div>
				<h5>JavaScript</h5>
			</div>

			<div>
				<div className="skill">
					<i className="fab fa-react fa-3x" />
				</div>
				<h5>React/Redux</h5>
			</div>
			<div>
				<div className="skill">
					<img className="icon" src="https://img.icons8.com/color/45/000000/firebase.png" alt="firebase" />
				</div>
				<h5>Firebase</h5>
				</div>
                <div>
				<div className="skill">
					<i className="fab fa-github-square fa-3x" />
				</div>
                <h5>Github</h5>
                </div>
        
            </div>
            </div>
	);
};

export default Skills;
