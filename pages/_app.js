import '../styles/globals.css'

import { store } from '../app/redux/Store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps, session }) {
  return (

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
