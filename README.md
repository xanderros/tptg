# Street Marketing Website

## Getting started

#### 1. Install dependencies:

With `yarn` (quicker)

```
yarn install
```

or with `npm` (slower):

```
npm install
```

#### 2. Run the project for development:

```
yarn start
```

or

```
npm start
```

#### 3. Open development URL - [`http://localhost:9000/`](http://localhost:9000/).

## Scripts

#### Running the project for development:

```
yarn start
```

#### Build the project for production:

```
yarn build
```

#### Creating a production-ready zip-archive `build.zip`:

```
yarn zip
```

## Project Structure

It's not mandatory but considered effective for many reasons to decompose the UI into separate, less coupled components.

Create components at least for the parts of the UI that appear in multiple places of your project. It can be buttons, common page sections, widgets, sliders and so on.

It is recommended that you will keep your components inside the `src/components/` folder. This starter kit allows you to keep your markup, styles, and JavaScript code for a component in one folder and then to use them in multiple places. Please, see the `src/components/` folder for examples. Notice how different types of components are arranged. Also, It is not absolutely mandatory to include Nunjucks or JS code for a component if you feel that it doesn't make too much sense. For example, when the markup is quite simple or when a component doesn't have JS logic.



## Nunjucks HTML template engine

[Nunjucks](https://mozilla.github.io/nunjucks/) is a powerful HTML template engine with a syntax very similar to jinja2. Nunjucks alleviates writing highly-maintainable HTML code.

Nunjucks templates seat in `src/templates/` folder.



The page templates that should be compiled to HTML files (and which will be inside the `build/` directory) have to be kept inside the `src/templates/pages/` directory.


To use Nunjucks more effectively, please, read its [documentation](https://mozilla.github.io/nunjucks/templating.html).

Also, don't forget to add syntax highlighting for you code editor. If your editor doesn't support Nunjucks syntax, you can use syntax highlighting for Twig template engine instead. Just set up opening .nunj files with Twig syntax highlighting for that.