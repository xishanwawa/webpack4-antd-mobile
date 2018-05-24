import { Provider } from 'react-redux'
import { store } from 'store'
import Routes from 'routes'

ReactDOM.render(
	<Provider store={store}>
        <Routes />
    </Provider>,
	document.getElementById('root')
);