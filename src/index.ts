//require('dotenv').config();

import dotenv from 'dotenv';
import envUtil from './util/env.util';

dotenv.config();

const {PORT} = envUtil;

console.log(typeof PORT);