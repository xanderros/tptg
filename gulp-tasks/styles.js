import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notifier from 'node-notifier';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import assets from 'postcss-assets';
import sass from 'gulp-sass';
import cssmin from 'gulp-clean-css';
import gulpif from 'gulp-if';
import log from 'fancy-log';
import colors from 'ansi-colors';

import PATHS from '../paths';
import { PRODUCTION } from '../config';

const PROCESSORS = [
  autoprefixer({
    cascade: true,
  }),
  assets({
    loadPaths: [PATHS.src.imagesInline],
    cache: true,
  }),
];

export default function styles() {
  return (
    gulp
      .src(PATHS.src.styles)
      .pipe(
        plumber({
          errorHandler: function (err) {
            log.error(colors.red(err.message));
            notifier.notify({
              title: 'SASS compilation error',
              message: err.message,
            });
          },
        })
      )
      .pipe(
        sass({
          outputStyle: 'compact',
          errLogToConsole: true,
          indentedSyntax: true,
          includePaths: ['./node_modules/'],
        })
      )
      .pipe(postcss(PROCESSORS))
      .pipe(
          gulpif(
              PRODUCTION,
              cssmin({ processImport: false })
          )
      )
      .pipe(gulp.dest(PATHS.build.styles))
  );
}