import { UniformContext } from "@uniformdev/context-react";
import { UniformAppProps } from "@uniformdev/context-next";
import createUniformContext from "lib/uniform/uniformContext";

import "../styles/globals.css";
import { Lato } from "@next/font/google";
import PlausibleProvider from "next-plausible";

const dmsans = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const clientContext = createUniformContext();

function MyApp({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext
      context={serverUniformContext ?? clientContext}
      outputType={"standard"}
    >
      <PlausibleProvider domain="timbenniks.dev">
        <div className={`${dmsans.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </PlausibleProvider>
    </UniformContext>
  );
}

export default MyApp;
