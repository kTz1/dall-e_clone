import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openapi';

dotenv.config();

const router = express.Router();