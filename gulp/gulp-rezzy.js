const through = require('through2');
const sharp = require('sharp');
const Vinyl = require('vinyl');

module.exports = (versions = []) => {
    return through.obj(function(chunk, enc, done) {
        versions.forEach(version => {
            sharp(chunk.contents)
                .resize(version.width, version.height)
                .toBuffer()
                .then(buffer => {
                    const file = new Vinyl({
                        cwd: chunk.cwd,
                        base: chunk.base,
                        path: chunk.path.replace(chunk.extname, '') + version.suffix + chunk.extname,
                        contents: buffer
                    });

                    this.push(file);

                    console.log(`gulp-rezzy: ${chunk.relative} => ${file.relative} ✔️`);
                })
                .catch(err => {
                    console.log(err);
                });
        });
        done();
    });
};
