import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "../src/theme/emotions";
import theme from "../src/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

/**
 * Components
 */

import UiMainLayout from "../src/containers/mainLayout";
//import UiNotificationVersionOne from "../src/components/notifications/notificationVersionOne";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(theme);
const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <UiMainLayout>
          <Component {...pageProps} />
        </UiMainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
