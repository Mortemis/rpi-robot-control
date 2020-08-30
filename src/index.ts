import express = require('express');
import parser = require('body-parser');
import { Request, Response } from 'express';

import router = require('./routes/control');

const app = express();

app.use(parser.json());

app.use(router);

app.use(express.static('public'));

app.listen(80);