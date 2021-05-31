import React, { Component } from 'react';
import Song from './Song';
import './SongList.css';
import axios from 'axios'

 class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs : []
        }
    }

  
    async componentDidMount() {
       const fetched = await axios.get('/songs');
       console.log(fetched);
       this.setState({songs: fetched.data });
    }



    render() {
    let songList = this.state.songs.map((song) => {
        return <Song
          key={song._id}
          id={song._id}
          title={song.title}
          imgUrl={song.imgUrl}
          content={song.content}
          artist={song.artist}
          audio={song.audio}
         
          />
    })


        return (
            <div>
            <h1 style={{marginTop: "14px", color: "#283618"}}>Popular Song List</h1>
            <div className="SongList">
                {songList}  
             </div>
             </div>
        )
    }
}



export default SongList;