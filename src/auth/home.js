import React, { Component } from 'react'
import { toast } from 'react-toastify';
import {Button ,Card } from 'react-bootstrap';


class home extends Component{
    render() {
        return (
           
            <div>
                 <Card style={{ width: '18rem',left:"36px",top:"16px" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
               <h1>hello</h1>
                <button onClick={()=>{
                    localStorage.clear();
                    this.props.history.push('/login')
                    toast.success('Thank You')
                }}>logg out</button>
            </div>
        )
    }
}

export default home;