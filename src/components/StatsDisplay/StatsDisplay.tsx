import type { StatsDisplayProps } from "../../types";

// Create a StatsDisplay component
// that shows various statistics about the text.

export const StatsDisplay: React.FC<StatsDisplayProps> = (props) => {
  return (
    <>
      <p>Character Count: {props.stats.characterCount}</p>
      <p>Word Count: {props.stats.characterCount}</p>
      {props.showReadingTime && <p>Reading time: {props.showReadingTime}</p>}
    </>
  );
};
