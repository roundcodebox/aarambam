import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : undefined;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
