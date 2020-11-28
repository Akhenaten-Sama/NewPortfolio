import React from 'react';
import emailjs from 'emailjs-com'
import './contactme.scss'

export default class ContactUs extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            response:"",
            name:null,
            message:null,
            email:null,
            phone:null,

             
        }
    }
    
    componentDidMount(){
        this.setState({response:null})
    }


    
            


      sendEmail =(e)=> {
            e.preventDefault();
            const USER_ID = 'user_cBAMFUH0YdwQscLQz81ij'
            const Service_ID = 'Olalekan'
            const Template_ID = 'template_dhbxgws'
            emailjs.sendForm(Service_ID, Template_ID, e.target, USER_ID)
              .then((result) => {
        
        this.setState({response:result})
        document.getElementById("cancel").reset()

                  
              }, (error) => {
                  console.log(error.text);
              });
          }

    

    handleFocus =(e)=>{
      const {name, value} = e.target
     this.setState({[name]:value})
   }

 
  render(){
    const {name, email,phone, message} = this.state
    return (
    <div id="contact" >
    <form id="cancel"  onSubmit={this.sendEmail} >
        <div className="card-panel">
          <h4 className='text-center'>Send Me A Message!</h4>
          <div className="form" >
            <input className="input-field" type="text" onChange={this.handleFocus} name='name' required/>
            <label className = {`form-input-label ${name?'shrink':' '}`} > Name</label>

          </div>
          <div  className="form">
            <input className="input-field" type="text"  onChange={this.handleFocus}name='email' required/>
            <label className={`form-input-label ${email?'shrink':''}`} > Email</label>
            
          </div>
          <div className="form">
            <input className="input-field" type="text" onChange={this.handleFocus} name='phone' required/>
            <label className={`form-input-label ${phone?'shrink':null}`} > Phone</label>
            
          </div>
          <div className="form" >
            <textarea className="input-field" onChange={this.handleFocus} name='message' required></textarea> 
            <label className={`form-input-label ${message?'shrink':null}`} > Message</label>          
          </div>
          <div>
            <input type="submit" value='Send' onClick={this.clearForm} className='btn-light center '/>
          </div>

        </div>
        </form>
        {this.state.response? <div className='grey lighten 3'> <h5><i className="fa fa-check-circle" aria-hidden="true"></i>Your Message has been sent!</h5></div>:null}
      
      </div>
      
  );
}
}


