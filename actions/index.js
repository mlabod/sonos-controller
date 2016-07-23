export const play = () => ({ type: 'PLAY' })

export const pause = () => ({ type: 'PAUSE' })

export const playNext = () => ({ type: 'NEXT' })

export const playPrev = () => ({ type: 'PREV' })

export const switchRoom = (ip) => ({ type: 'SWITCH_ROOM', ip })

export const roomInfo = (data) => ({ type: 'ROOM_INFO', data })

export const songInfo = (data) => {
  return {
    type: 'SONG_INFO',
    artist: data.artist,
    title: data.title,
    cover: data.cover
  }
}
