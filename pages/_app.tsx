import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const bootstrap = require("bootstrap/dist/js/bootstrap");

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== "undefined" ? bootstrap : undefined;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
