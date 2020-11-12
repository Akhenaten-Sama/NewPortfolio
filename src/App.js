import React, {useEffect, useRef, useState} from 'react'
import './App.scss';
import About from './components/about/About';
import ContactUs from './components/ContactMe/contact';
import cursor from './components/cursor';
import Footer from './components/footer/footer';
import Header from './components/navbar/navbar';
import Skills from './components/Skills/skills';
import Works from './components/works/works';
import {Horizontal, skew, Timelines} from './gsap/gsap';
import {ReactComponent as Logo} from './MyText.svg'

function App() {
  let skewAnim = useRef([])
  skewAnim.current=[]
  const addToRefs = el => {
    if (el && !skewAnim.current.includes(el)) {
        skewAnim.current.push(el);
    }
};

  

  const [state, setState] = useState({top:0, left:0})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    
      setTimeout(()=>{
        setLoading(false)
      }, 2800)
    
  }, [loading])


  useEffect(()=>{
if(!loading){
  Timelines()
  cursor()
  document.addEventListener('mousemove', (e)=>{
    setState({top:e.pageY, left:e.pageX})
  })
}
Horizontal()

  }, [loading])


  
  return loading? (<div className='container'>
  <Logo  /> 
  </div>):(
    <div className="App">
     
     <div className='head' ref={addToRefs} >
     <Header  />
      <About/>
     </div>
     <div className='cursor' style={{top:state.top, left:state.left}}/>
     <div ref={addToRefs}>
     <Skills  />
     </div>
     <div ref={addToRefs}>
     <Works  />
     </div>
     <div ref={addToRefs}>
     <ContactUs  />
     </div>
     <div ref={addToRefs}>
     <Footer />
     </div>

     
     
      
      
      
      
      

    </div>
  );
}

export default App;
