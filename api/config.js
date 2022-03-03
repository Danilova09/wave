const path = require('path');
const rootPath = __dirname;

module.exports = {
    rootPath,
    artistsUploadPath: path.join(rootPath, 'public/uploads/images/artists'),
    albumsUploadPath: path.join(rootPath, 'public/uploads/images/albums'),
    mongo: {
        db: 'mongodb://localhost/wavefm',
        options: {useNewUrlParser: true},
    }
}