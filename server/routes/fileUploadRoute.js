const express = require('express');
const { pluginUploadRespHandler } = require('../controllers/fileUploadController');

const fileUploadRouter = express.Router();

fileUploadRouter.post('/plugin-upload', pluginUploadRespHandler);

module.exports = fileUploadRouter;