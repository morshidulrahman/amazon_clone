import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { store } from '../app/redux/Store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
