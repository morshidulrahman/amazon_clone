import "../styles/globals.css";

import { store } from "../app/redux/Store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
function MyApp({ Component, pageProps, session }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider position="top-right" zIndex={2077}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
