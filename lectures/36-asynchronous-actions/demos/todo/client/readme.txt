Main - componentWillMount -- calls (dispatch) todoInitialize (is an action, that was given through props)

thunk wakes up ... object ?  do your thing .... function ... runs

    function: todoInitialize

        call superagent to fetch it all

        dispatch to private method called "initAction"

            fires the "INIT" reducer with the result of superagent

            Sets the state with whatever it got

            Refreshes the page























Update webpack config to use the ENV

Create and import the thunk middleware

Create new public thunked actions
Rename/Unpublish all of the original actions
Export only the functional ones

Add an "INITIALIZE" reducer

Change "CREATE" action to not do the ID and Dates

Call the new fetchAll in componentWillMount for the container

Use the new import as syntax



Webpack
    const {DefinePlugin, EnvironmentPlugin} = require('webpack');
    const production = process.env.NODE_ENV === 'production';

    let plugins = [
      new EnvironmentPlugin(['NODE_ENV']),
      new ExtractPlugin('bundle.[hash].css'),
      new HTMLPlugin({template: `${__dirname}/src/index.html`}),
      new DefinePlugin({
        __DEBUG__: JSON.stringify(!production),
        __API_URL__: JSON.stringify(process.env.API_URL),
      }),
    ];

Create new public thunked actions like this:

    export const todoCreate = todo => dispatch => {

        let url = API + '/todo';
        return superagent.post(url)
          .send(todo)
          .then(res => {
            dispatch(todoDispatchCreate(res.body));
            return res;
        })
        .catch(console.error);

    };

Create and import the thunk middleware:

    let thunk = store => next => action => {

        return typeof action === "function"
                ? action(store.dispatch, store.getState)
                : next(action);

    }

    export default thunk;