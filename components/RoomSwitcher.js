import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { switchRoom } from '../actions';

const RoomSwitcher = ({ rooms, switchRoom }) => {

  console.log(rooms, switchRoom)

  return (
    <div className="title-bar">
      <div className="select">
        <select>
          {rooms.map(function(room) {
            return <option value={room.ip} onChange={switchRoom}>{room.CurrentZoneName}</option>
          })}
          </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { rooms: state.rooms };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({switchRoom}, dispatch) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomSwitcher);
