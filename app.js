const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');

yargs.command({
  command: 'add',
  describe: 'Add a new note.',
  builder: {
    title: {
      describe: 'Title of a note.',
      type: 'string',
      demandOption: true,
    },
    body: {
      describe: 'Body of the note.',
      type: 'string',
      demandOption: true,
    },
  },
  handler: (args) => {
    addNote(args.title, args.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note.',
  builder: {
    title: {
      describe: 'Title of the note that needs to be removed.',
      type: 'string',
      demandOption: true,
    },
  },
  handler: (args) => {
    removeNote(args.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes.',
  handler: listNotes,
});

yargs.command({
  command: 'read',
  describe: 'Read a note.',
  builder: {
    title: {
      describe: 'Title of the note that needs to be removed.',
      type: 'string',
      demandOption: true,
    },
  },
  handler: (args) => {
    readNote(args.title);
  },
});

yargs.parse();
