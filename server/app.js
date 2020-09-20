import express from 'express';

import {getInitialData} from "./server"



const app = express();

app.use(express.static("dist/public"));

app.get("/*", (req, res) => {
    getInitialData(req, res);
});


export default app;