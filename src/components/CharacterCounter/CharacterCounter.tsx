import type { CharacterCounterProps } from "../../types";
import { Grid } from "@mui/material";

// Create a CharacterCounter component
// that combines the above components and manages the state.

export const CharacterCounter: React.FC<CharacterCounterProps> = (
  props: CharacterCounterProps
) => {
  return (
    <Grid container columns={{ xs: 4, sm: 12 }}>
      <Grid size={1.5}>{props.minWords && <p>Min: {props.minWords}</p>}</Grid>
      <Grid size={1.5}>{props.maxWords && <p>Max: {props.maxWords}</p>}</Grid>
      <Grid size={1.5}>
        {props.targetReadingTime && (
          <p>Target: {props.targetReadingTime}</p>
        )}
      </Grid>
    </Grid>
  );
};
