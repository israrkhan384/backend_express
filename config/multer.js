const multer = require('multer');
const {CloudinaryStorage}= require('multer-storage-cloudinary');

const cloudinary = require('./cloudinary')

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'myfolder',
        allowedFormats: ['jpg', 'png','jpeg','svg'],
    }
})
const upload = multer({ storage: storage });
 module.exports = upload;