import { MongoDB } from './src/databases/mongodb.js';
import express from 'express';
import 'dotenv/config.js';

const PORT = process.env.PORT || 3000;
 const server = express();
 server.use(express.json());
 server.use(express.urlencoded({ extended: false }));

MongoDB.init()
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));