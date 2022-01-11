import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderSongsList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
          <p>{song.title}</p>
          <p>{song.duration}</p>
          <button
            onClick={() => {
              this.props.selectSong(song);
            }}
          >
            Select Song
          </button>
          <hr />
        </div>
      );
    });
  }

  renderSong(){
      console.log(this.props)
      if(this.props.song){
          return <p>{this.props.song.title}</p>
      }
      return <></>
  }

  render() {
    return (
      <div>
        <div>
          SongList
          <br />
          {this.renderSongsList()}
        </div>
        <div>
         Selected Song:  {this.renderSong()}
        </div>
      </div>
    );
  }
}

// gets state from provider, props.state
//the object that return from this function is going to show up as a PROPS inside our component
const mapStateToProps = (state) => {
  return { songs: state.songs, song: state.selectedSong };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
