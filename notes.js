const chalk = require('chalk');
const fs = require('fs');

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) =>
  fs.writeFileSync('notes.json', JSON.stringify(notes));

const addNote = (title, body) => {
  const notes = loadNotes();
  !notes.find((note) => note.title === title) &&
    notes.push({
      title,
      body,
    });

  saveNotes(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  filteredNotes.length === notes.length
    ? console.log(chalk.bgRed('No notes removed.'))
    : console.log(chalk.bgGreen('Removal successful.'));
  saveNotes(filteredNotes);
};

const listNotes = () => {
  console.log(chalk.blue.bold('Your notes'));
  loadNotes().forEach((note, index) =>
    console.log(chalk.yellow(`${index + 1}) ${note.title}`))
  );
};

const readNote = (title) => {
  const note = loadNotes().find((note) => note.title === title);
  if (note) {
    console.log(chalk.blue(note.title));
    console.log(chalk.yellow(note.body));
  } else {
    console.log(chalk.bgRed('No note with the title found.'));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
