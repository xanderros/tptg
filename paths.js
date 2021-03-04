export default {
  build: {
    html: 'build/templates',
    scripts: 'build/_js/',
    styles: 'build/_css/',
    images: 'build/_img/solutions/',
    icons: 'build/_img/solutions/',
    fonts: 'build/_fonts/',
  },
  src: {
    templates: './src',
    nunj: 'src/templates/pages/**/*.nunj',
    scripts: 'src/js/index.js',
    styles: 'src/sass/solutions-styles.scss',
    images: 'src/img/**/*.*',
    icons: 'src/svg/**/*.*',
    imagesInline: 'src/img/inline/',
    fonts: 'src/fonts/**/*.*',
  },
  watch: {
    nunj: ['src/**/*.nunj'],
    scripts: 'src/js/**/*.js',
    styles: 'src/**/*.{sass,scss}',
    images: 'src/img/**/*.*',
    icons: 'src/svg/**/*.*',
    fonts: 'src/fonts/**/*.*',
  },
  clean: 'build/',
};
