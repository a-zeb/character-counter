import type { StatsDisplayProps } from "../../types";
import { Grid } from "@mui/material";
// Create a StatsDisplay component
// that shows various statistics about the text.

export const StatsDisplay: React.FC<StatsDisplayProps> = (props) => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
      <Grid size={4}>
        <p>Character Count: {props.stats.characterCount}</p>
      </Grid>
      <Grid size={4}>
        <p style={{ color: props.stats.wordCount > 100 ? "red" : "black" }}>
          Word Count: {props.stats.wordCount}
        </p>
      </Grid>
      {props.showReadingTime && (
        <Grid size={4}>
          <p>Reading time: {props.stats.readingTime}</p>
        </Grid>
      )}
    </Grid>
  );
};
