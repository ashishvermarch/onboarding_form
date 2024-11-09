import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StepComponent } from "..";
import { setFavoriteSongsList } from "../../../../../redux/slice/onboarding";
import { RootState } from "../../../../../redux/store";
import { FavSongType } from "../../../../../types/onboarding";
import FormsWrapper from "../../FormsWrapper";
import styles from "../styles";

const FavoriteSongsList: StepComponent = (props) => {
  const songsList = useSelector(
    (state: RootState) => state.onboarding.favoriteSongsList
  );

  const [song, setSong] = useState<string>("");
  const [favorites, setFavorites] = useState<FavSongType>([]);

  const dispatch = useDispatch();

  const handleAddSong = () => {
    if (song.trim() === "") return;
    setFavorites((prev) => [...prev, { song: song.trim(), id: Date.now() }]);
    setSong("");
  };

  const handleRemoveSong = (songToRemove: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== songToRemove));
  };

  const handleSubmit = () => {
    dispatch(setFavoriteSongsList(favorites));
    props.goNext();
  };

  useEffect(() => {
    setFavorites(songsList);
  }, [songsList]);

  return (
    <FormsWrapper
      goNext={handleSubmit}
      goBack={props.goBack}
      isNextDisable={!favorites.length}
    >
      <Box sx={styles.favSongWrapper}>
        <Typography variant="h6" gutterBottom>
          Add Your Favorite Songs
        </Typography>

        <TextField
          label="Enter song name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          fullWidth
          variant="outlined"
          sx={styles.mb2}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddSong}
          sx={styles.mb2}
          disabled={!song.trim()}
        >
          Add Song
        </Button>

        <Box component={"ol"}>
          {favorites.map((item) => (
            <Box key={item.id} component={"li"}>
              {item.song}
              <Box
                component="span"
                sx={styles.songItem}
                onClick={() => handleRemoveSong(item.id)}
              >
                ❌
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </FormsWrapper>
  );
};

export default FavoriteSongsList;
