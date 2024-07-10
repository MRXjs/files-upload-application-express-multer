const express = require('express');
const { pluginUploadRespHandler } = require('../controllers/fileUploadController');
const multer = require('multer');
const path = require('path')

const fileUploadRouter = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/plugin');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

fileUploadRouter.post('/plugin-upload', upload.single('zipfile'), pluginUploadRespHandler);


module.exports = fileUploadRouter;