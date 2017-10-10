//react imports
import React from 'react';
import ReactDOM from 'react-dom';

//router imports
import {HashRouter, Switch, Route} from 'react-router-dom';

//redux imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

//import styles
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

//component imports
import App from './components/App';
import BaseLayout from './components/BaseLayout';

//BaseLayout imported...Here
import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';
import AccountDetail from './containers/AccountDetail';
import Transaction from './containers/Transaction';

//create store for redux and apply middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

//wrap provider around router
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <HashRouter>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/users/:id/:accountID" component={AccountDetail}/>
        <Route exact path="/users/:id" component={UserDetail}/>
        <Route exact path="/users" component={UserList}/>
      </Switch>
    </BaseLayout>
  </HashRouter>
</Provider>, document.getElementById('root'));
