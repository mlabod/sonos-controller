export const play = () => {
  return {
    type: 'PLAY'
  };
};

export const pause = () => {
  return {
    type: 'PAUSE'
  }
}

export const playNext = () => {
  return {
    type: 'NEXT'
  };
};

export const playPrev = () => {
  return {
    type: 'PREV'
  };
};

export const songInfo = (data) => {
  return {
    type: 'SONG_INFO',
    artist: data.artist,
    title: data.title,
    cover: data.cover
  }
}

export const switchRoom = (ip) => {

  console.log('SWITCH');

  return {
    type: 'SWITCH_ROOM',
    ip
  }
}

export const roomInfo = (data) => {
  return {
    type: 'ROOM_INFO',
    data: data
  }
}
