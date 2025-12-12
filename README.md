### Repo: https://github.com/a-zeb/character-counter.git

### Site: https://a-zeb-character-counter.netlify.app/

# Reflection

## How did you handle state updates when the text changed?

- I added a state variable for the count and updated it onChange in the textarea.

## What considerations did you make when calculating reading time?

- I decided to divide the total word count by 200 (WPM) to calculate the average reader's time.

## How did you ensure the UI remained responsive during rapid text input?

- I implemented onChange and used state variables.

## What challenges did you face when implementing the statistics calculations?

- Finding out exactly what constitutes each item. For example, is " a " by itself a word or a character? How fast does a person read? Should spaces count as characters?

## How to use the components

- From the main page, you can type in the text area to automatically see your characters, word count, and reading time update as you type.
