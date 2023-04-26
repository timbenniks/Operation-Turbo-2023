import { UniformContext } from "@uniformdev/context-react";
import { UniformAppProps } from "@uniformdev/context-next";
import createUniformContext from "lib/uniform/uniformContext";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { Lato } from "@next/font/google";

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
      //outputType={typeof window === "undefined" ? "edge" : "standard"}
      outputType={"standard"}
    >
      <div className={`${dmsans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>

      <Analytics />
    </UniformContext>
  );
}

export default MyApp;
