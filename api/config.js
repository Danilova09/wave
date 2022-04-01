const path = require('path');
const rootPath = __dirname;

module.exports = {
    rootPath,
    artistsUploadPath: path.join(rootPath, 'public/uploads/images/artists'),
    albumsUploadPath: path.join(rootPath, 'public/uploads/images/albums'),
    avatarsUploadPath: path.join(rootPath, 'public/uploads/images/avatars'),
    mongo: {
        db: 'mongodb://localhost/wavefm',
        options: {useNewUrlParser: true},
    },
    facebook: {
        appId: '705997010842508',
        appSecret: '0f12bc24b220de5ebec43fe7d4572cd4',
    }
}