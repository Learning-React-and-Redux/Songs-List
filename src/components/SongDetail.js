import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) =>{
  if(!song){
      return <div>Select a song</div>;
  }

  return (<div>
      <h3>Detail for :</h3>
      <p>title: </p>{song.title}
      <p>duration: </p>{song.duration}
  </div>);
};

const mapStateToProps = (state) =>{
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
