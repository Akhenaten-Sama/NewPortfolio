import React from 'react';

const About = () => {
	return (
		<div >
            <section className="about">

		          <div className= "next-1">
					<h2  className="text head-text">Hello There,</h2>
					<div className='paragh' >
                    <p className="text para">My name is Oluwaseun, a frontend engineer.</p>
                    <p className="text para">
					I am experienced in React, Redux and Firebase while also adept in Node/Express. I am currently based in Ibadan, Nigeria but available to work remotely.</p>
                    <p className="text para">I like to watch videos on astrophysics and
                    take random photographs in my spare time.</p>
						  
					</div>
				</div>
				<div >
				  <button className='btn-light button'> <a href="#contact" >Hire me</a></button> 
				</div>
			</section>
		</div>
	);
};

export default About;
