import { Provider } from 'react-redux'
import Dashboard from './pages/Dashboard'
import store from './store'
import GlobalStyles from './styled/globalStyles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Dashboard />
    </Provider>
  )
}

export default App
