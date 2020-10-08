
import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";
import  './css/Main.css'
import profilphoto from "./../Assets/profilphoto.jpg"

class Person extends Component {
   // constructor(props){
   //super(props);
   state = {
       imgSrc: profilphoto,
       fullName: "Samira HMANI",
       bio: "I have a Master's degree in Auditing and Computer Security",
       profession: "Student Full-Stack JavaScript in Go My Code",
       show: false,
    };
   handleClick = () => {
    this.setState({ show: !this.state.show });
  };
   
   render() {
       return(
        <div className="Person">
        <button type="button" class="btn btn-info"
          onClick={this.handleClick}>
            SHOW
        </button>
       {this.state.show ? (
          <Card style={{ width: "20rem" , border:"6px"}}>
            <Card.Img variant="top" src={this.state.imgSrc} />
            <Card.Body>
              <Card.Title className="Name">{this.state.fullName}</Card.Title>
              <Card.Text>
                  {this.state.bio}
              </Card.Text>  </Card.Body>
             <ListGroup className="list-group-flush">
                <ListGroupItem>{this.state.profession} </ListGroupItem>
             </ListGroup>

          </Card>
        ) : null}
    </div>
    );}
}

export default Person
