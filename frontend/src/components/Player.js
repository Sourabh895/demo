import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import './Player.css';



class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            imgUrl: '',
            artsist: '',
            audio: ''
        }
    
    }

   
  
    async componentDidMount(){
       let song = await axios.get(`/songs/${this.props.match.params.id}`);
        console.log(song)
      song = song.data;
        this.setState({title: song.title, artist: song.artist, imgUrl: song.imgUrl, audio: song.audio})
    }


    render() {
    return (
        <div>
           
            <h2 style={{color: "#e5383b", margin: "20px 0"}}>Playing now...</h2>
            <Card style={{ width: '30rem', margin: "10px auto", backgroundColor: '#343a40', color : '#ffffff' }}>
                <Card.Img  variant="top" src={this.state.imgUrl} style={{height: "280px", padding: "10px"}} />
                <Card.Body>
               <Card.Title>Title: {this.state.title}</Card.Title>
              <Card.Text>Artist :
               {this.state.artist}
              </Card.Text>
              <audio className="audio" src={this.state.audio} controls ></audio>
              <br/>
              <p style={{marginTop: "5px", color: "grey"}}><strong>Song By: </strong> {this.state.title} its a good artist for pop song.</p>
            </Card.Body> 
           </Card>
            
        </div>
    )
}
}
export default Player;
