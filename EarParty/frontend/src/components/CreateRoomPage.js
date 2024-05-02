import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";

function CreateRoomPage() {
  defaultVotes = 2;

  return (
    <div>
      <Grid container spacing={1} >
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Create a Room
          </Typography>
        </Grid>
        <Grid item xs={12}  align="center" >
          <FormControl component={'fieldset'}>
            <FormHelperText component={"div"}>
              <div align="center">
                Guest control of Playback State
              </div>
            </FormHelperText>
            <RadioGroup row defaultValue="true">
              <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom"/>
              <FormControlLabel value="false" control={<Radio color="secondary" />} label="No Control" labelPlacement="bottom" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}  align="center">
          <FormControl>
            <TextField required={true} type="number" defaultValue={this.defaultVotes} inputProps={{min: 1, style:{textAlign: "center"},}}/>
            <FormHelperText>
            <div align="center">
                Votes Required to Skip Song
              </div>
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateRoomPage;
