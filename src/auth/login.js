import React, { Component } from 'react'
import { Form ,Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

export default class signIn extends Component {

    constructor(props) {
        super(props);
           this.onSubmit=this.onSubmit.bind(this)
           this.state = {
               email: '',
               password:'',
               validation:''
           }
        }

        onSubmit=(event)=>{
            event.preventDefault();
            var email=this.state.email
            var password=this.state.password

    console.log('email',email)
            const data={
                email:email,
                password:password
        }
        console.log("data",data)
        axios.post("http://localhost:3000/user/login",data,{})
        .then((response) => {
        console.log(response);
        if(response.data.userData==false){
            toast.error(response.data.message)
        }else if(response.data.isMatch==false){
            toast.error(response.data.message)
        }
        else{
            localStorage.setItem('auth',JSON.stringify(response.data))
            this.props.history.push('/home')
            toast.success("welcome back")
        }
        
        })
        .catch((error) => {
            toast.error(data.message)
        console.log(error);
        });
        }
  
      
      email = (e) => {  
          this.setState({  
                  email: e.target.value
          });  
      };
    
      password = (e) => {  
        this.setState({  
                password: e.target.value
        });  
    };

    render() {
        return (
            <div>
        <Form  onSubmit={this.onSubmit}> 
<Form.Group controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" name="email" placeholder="Enter email" onChange={this.email} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" name="password" placeholder="Password" onChange={this.password} />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
       </div>
        )
    }
}
