require('dotenv').config({ path: 'variables.env' });

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// ToDo: use express middleware to handle cookies & populate current user

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    res => {
        // eslint-disable-next-line no-console
        console.log(`Server running on http://localhost:${res.PORT}`);
    }
);
