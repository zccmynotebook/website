//const imagemin = require('imagemin');
//const imageminPngquant = require('imagemin-pngquant');
// (async () => {
//   await imagemin(['./assets/img/*.jpg'], 'build/', {
//       plugins: [
//           imageminPngquant({ quality: '65-80' })
//       ]
//   });

//   console.log('Images optimized');
// })();


const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
    await imagemin(['./assets/img/*.jpg'], 'build/images', {
        use: [
            imageminMozjpeg({ quality: 65, progressive: true })
        ]
    });

    console.log('Images optimized');
})();