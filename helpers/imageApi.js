var path = require('path');
var bodyParser = require('body-parser');
const crypto = require('crypto');
const mongoose = require("mongoose");
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');


const mongoURI = 'mongodb+srv://root:root123@apicluster.i3n9h.mongodb.net/backendapi?retryWrites=true&w=majority';
//const mongoURI = "mongodb://localhost/backendapi";
const conn = mongoose.createConnection(mongoURI,{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let gfs;

conn.once('open', () => {
	// Init Stream
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection('uploads');
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});


exports.upload = multer({ storage });