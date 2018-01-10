__ CHEATSHEET __

const mapStateToProps = state => ({
    categoryList:state
});

const mapDispatchToProps = (dispatch, getState) => ({
   categoryAdd: category => dispatch(categoryAdd(category))
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);

________________

npm i -S webpack webpack-dev-server html-webpack-plugin node-sass sass-loader resolve-url-loader css-loader extract-text-webpack-plugin babel-core babel-loader babel-preset-react babel-preset-env babel-plugin-transform-object-rest-spread react react-dom

Dependencies

react               - Front End Magic (actually the only thing that’ll end up in the browser (aside from assets)
rect-dom            - Turns react into a browser rendering engine
                    - There's others ... react-native for devices, react-ncurses for terminal apps

node-sass           - SCSS Compiler

webpack             - The Bundler
webpack-dev-server  - Sorta like nodemon — will reload the browser
html-webpack-plugin - Will generate the right (dynamic and different) script and css tags for the index.html file

sass-loader         - Turns SASS into CSS
resolve-url-loader  - Allows relative paths in the SASS code
css-loader          - Turns CSS code into a JS object that webpack can understand

babel-core          - Transforms ES6 code into ES5
babel-loader        - Hooks babel up to webpack
babel-preset-react  -
babel-preset-env    - Transpiles down the proper ES version
babel-plugin-transform-object-rest-spread   - (gives us the … for objects)

extract-text-webpack-plugin                 - Takes CSS code and turns it into a separate css bundle

