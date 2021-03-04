import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';

import PATHS from '../paths';
import { PRODUCTION } from '../config';

export default function images() {
  return gulp
    .src([
      PATHS.src.images,
      `!${PATHS.src.imagesInline}/**.*`,
      `!${PATHS.src.sprites}`,
    ])
    .pipe(
      gulpif(
        PRODUCTION,
        imagemin(
          [
            pngquant(),
            imageminMozjpeg({
              quality: 80,
              progressive: true,
            }),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] }),
          ],
          {
            verbose: true,
          }
        )
      )
    )
    .pipe(gulp.dest(PATHS.build.images));
}
