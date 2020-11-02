import React from 'react';
import emailjs from 'emailjs-com'
import './contactme.scss'

export default class ContactUs extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            response:""
             
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

    

   


  render(){

    return (
    <div className="form">
    <form id="cancel"  onSubmit={this.sendEmail} >
        <div className="card-panel">
          <h5 className='white-text'>Send Me A Message!</h5>
          <div >
            <input className="input-field" type="text" placeholder="name" name='name' required/>
            <label className='form-input-label shrink'> Name</label>

          </div>
          <div >
            <input className="input-field" type="text" placeholder="Email" name='email' required/>
            <label className='form-input-label shrink'> Email</label>
            
          </div>
          <div >
            <input className="input-field" type="text" placeholder="Phone" name='phone' required/>
            <label className='form-input-label shrink'> Phone</label>
            
          </div>
          <div >
            <textarea className="input-field" placeholder="Message" name='message' required></textarea> 
            <label className='form-input-label shrink'> Message</label>          
          </div>
          <div>
            <input type="submit" value='Send' onClick={this.clearForm} className='btn grey darken-3'/>
          </div>

        </div>
        </form>
        {this.state.response? <div className='grey lighten 3'> <h5><i className="fa fa-check-circle" aria-hidden="true"></i>Your Message has been sent!</h5></div>:null}
      
      </div>
      
  );
}
}


