var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://root:root123@apicluster.i3n9h.mongodb.net/backendapi?retryWrites=true&w=majority");
//mongoose.connect("mongodb://localhost/backendapi");

mongoose.Promise = Promise;

module.exports.commonuser = require('./commonuser');
module.exports.workers = require('./workers');
module.exports.enterpriceuser = require('./enterpriceuser');
module.exports.rating = require('./rating');
module.exports.profileimg = require('./profileImg');
module.exports.jobposting = require('./jobposting');
module.exports.phoneno = require('./phoneno');