// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<div>hello webpack</div>, document.getElementById("root"))


import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store'
import Routes from 'routes'

ReactDOM.render(
	<Provider store={store}>
        <Routes />
    </Provider>,
	document.getElementById('root')
);