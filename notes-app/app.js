const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')



// customize yargs version
yargs.version('18.0.0')

// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})
// create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// create remove all command
yargs.command({
    command: 'remove-all',
    describe: 'Remove all notes',
    handler(){
        notes.removeAlllNotes()
    }
})

//create edit command
yargs.command ({
    command: 'edit',
    describe: 'Edit a note',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        },
        body: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.editNote(argv.title, argv.body)
    }
})

yargs.parse()
