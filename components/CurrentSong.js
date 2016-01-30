import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { play, pause, playPrev, playNext } from '../actions';

const CurrentSong = ({ song, playing, actions }) => {

  return (
    <div className="song">
      <img className="song-cover" src={song.cover}/>
      <div className="song-meta">
        <div className="song-title">{song.title}</div>
        <div className="song-artist">{song.artist}</div>
        <div className="song-controls">
          <div className="song-prev" onClick={actions.playPrev}></div>
          <div className={playing ? ' hidden' : 'song-play'}  onClick={actions.play}></div>
          <div className={playing ? 'song-pause' : 'hidden'}  onClick={actions.pause}></div>
          <div className="song-next" onClick={actions.playNext}></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.song,
    playing: state.playing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({play, pause, playPrev, playNext}, dispatch) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentSong);
