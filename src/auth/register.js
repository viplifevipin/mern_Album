import React, { Component } from 'react'
import { Form ,Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


var divStyle={
  width: '300',
  height: '60',
  borderLeftidth: '0',
  marginLeft:'312',
  marginRight:'0'
}
export default class userSignup extends Component {

  constructor(props) {
    super(props);
       this.onSubmit=this.onSubmit.bind(this)
       this.state = {
           name:'',
           email: '',
           password:'',
           validation:''
       }
    }

    onSubmit=(event)=>{
        event.preventDefault();
        var name=this.state.name
        var email=this.state.email
        var password=this.state.password
       var validation=this.state.validation
console.log('name',name)
        const data={
            name:name,
            email:email,
            password:password
    }
    console.log("data",data)
    axios.post("http://localhost:3000/user/add",data,{})
    .then((response) => {
    console.log(response);
    if(response.data.user==false){
      this.setState({validation:response.data.message})
      console.log("aaaaaaaaaaaaaaaaaaaa",validation)
       toast.success(response.data.message);
      this.props.history.push('/login');
    }else if(response.data.user==true){
        toast.error(response.data.message)
        this.props.history.push('/register');
    }
    })
    .catch((error) => {
    console.log(error);
    });
    }

    name = (e) => {  
      this.setState({  
              name: e.target.value
      });  
  };  
  
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
            <div >
              <h1>Welcome</h1>
                <Form  onSubmit={this.onSubmit}>  
                <Form.Group controlId="formBasicEmail"  >
                <Form.Label>Name</Form.Label>
            <Form.Control  style={divStyle} type="text" name="name" placeholder="Enter name" onChange={this.name} />
             </Form.Group>
      <Form.Group controlId="formBasicEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control style={divStyle} type="email" name="email" placeholder="Enter email" onChange={this.email} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password"  onChange={this.password}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
<h6>if you have an account </h6>
<Button href="/login">Sign In</Button>
           </div>
        )
    }
}
