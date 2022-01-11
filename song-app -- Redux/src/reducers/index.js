import { combineReducers } from "redux";

//we just get songs no actions
const songsReducer = () => {
  return [
    {
      title: "Ramulo Ramulo",
      duration: "4:50",
    },
    {
      title: "Podham",
      duration: "3:20",
    },
    {
      title: "Akanda - Title Song",
      duration: "3:10",
    },
    {
      title: "Leharayi",
      duration: "5:12",
    },
  ];
};

//we want default selected song as null
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  // return currently selected song
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
