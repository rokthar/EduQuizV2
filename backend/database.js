const mongoose = require('mongoose');

const _url='mongodb://localhost:27017/eduquiz';
mongoose.connect(_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is conected'))
    .catch(err => console.log(err));
module.exports = mongoose;