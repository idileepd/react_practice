//Action Creator
export const selectSong = (song) => {
  //return of Action

  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
