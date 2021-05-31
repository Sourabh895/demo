import React, { Component } from 'react';
import './Song.css'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

 class Song extends Component {
    render() {
        return (
            <div className="Song">
                <Card style={{ width: '18rem' , backgroundColor: "#faedcd"}}>
                <Card.Img variant="top" src={this.props.imgUrl} style={{height: '200px', padding : "7px"}}/>
                <Card.Body>
               <Card.Title>Title: {this.props.title}</Card.Title>
              <Card.Text>Desc : {this.props.content}
              </Card.Text>
              <Button style={{margin: "0 20px" }} variant="outline-success">Likes</Button>
              <Link to={`/songs/${this.props.id}`}>
             <Button variant="primary">Play</Button>
             </Link>
            </Card.Body>
           </Card>
            </div>
        )
    }
}

export default Song;

