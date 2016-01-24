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
    type: 'INFO',
    artist: data.artist,
    title: data.title,
    cover: data.cover
  }
}
