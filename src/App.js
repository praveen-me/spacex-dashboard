import { Provider } from 'react-redux'
import Header from './components/Header'
import DashboardPage from './pages/Dashboard'
import store from './store'
import GlobalStyles from './styled/globalStyles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <DashboardPage />
    </Provider>
  )
}

export default App
