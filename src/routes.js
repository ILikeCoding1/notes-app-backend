const { addNoteHandler, addAllNotesHandler, getNoteByIDHandler, editByID, deleteNoteByIdHandler } = require("./handler.js");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
            cors: {
              origin: ['*'],
            },
        },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: addAllNotesHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIDHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editByID
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
]

module.exports = routes;