import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';

import PATHS from '../paths';
import {PRODUCTION} from '../config';

export default function icons() {
  return gulp
      .src([
        PATHS.src.icons
      ])
      .pipe(
          gulpif(
              PRODUCTION,
              imagemin(
                  [
                    imagemin.svgo({plugins: [{removeViewBox: false}]}),
                  ],
                  {
                    verbose: true,
                  }
              )
          )
      )
      .pipe(gulp.dest(PATHS.build.icons));
}
