import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

const routes = {
  path: '/',
  childRoutes: [
    { 
      path: 'home', 
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('components/home'))
        })
      }
    },
    { 
      path: 'list', 
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('components/list'))
        })
      }
    }
  ],
  component: require('components'),
  indexRoute: { component: require('components/home') }
}

export default class Routes extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
          <Router routes={routes} history={browserHistory} />
        )
    }
}