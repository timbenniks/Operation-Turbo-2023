import Head from "next/head";
import { RootComponentInstance } from "@uniformdev/canvas";
import {
  UniformComposition,
  UniformSlot,
  createUniformApiEnhancer,
} from "@uniformdev/canvas-react";

import "./canvasComponents";
import Header from "./Header";
import Footer from "./Footer";
import { CldOgImage } from "next-cloudinary";
import { useRouter } from "next/router";

type NavLink = {
  name: string;
  path: string;
};

type PageCompositionProps = {
  preview: boolean;
  data: RootComponentInstance;
  nodes: Array<NavLink>;
};

export default function PageComposition({
  preview,
  data: composition,
  nodes,
}: PageCompositionProps) {
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: "/api/preview",
  });

  const { title, description, image } = composition?.parameters || {};
  const variant = composition?.variant || false;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title?.value as string} | Tim Benniks</title>
        <meta property="og:title" content={title?.value as string} />
        <meta name="description" content={description?.value as string} />
        <meta
          property="og:description"
          content={description?.value as string}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "http://schema.org",
                "@type": "WebSite",
                url: "https://timbenniks.dev",
                name: "Tim Benniks: developer relations, video creator, speaker",
                alternateName: "Tim Benniks",
              },
            ]),
          }}
        />

        <meta
          property="og:url"
          content={`https://timbenniks.dev${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://timbenniks.dev${router.asPath}`}
        ></link>

        <meta
          name="google-site-verification"
          content="hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20"
        />
        <meta property="og:site_name" content="Tim Benniks" />
        <meta property="og:type" content="website" />

        <meta name="application-name" content="Tim Benniks" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tim Benniks" />
        <meta
          name="description"
          content="Tim Benniks: developer relations, video creator, speaker"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0F223E" />

        <link rel="apple-touch-icon" href="/android-chrome-512x512.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {image ? (
        <CldOgImage
          src={image?.value[0].publicId as string}
          alt={title?.value as string}
          width={1920}
          height={1080}
          gravity="face"
          twitterTitle={title?.value as string}
        />
      ) : null}

      <Header nodes={nodes} />
      <main className={`${variant ? "mt-32" : ""}`}>
        <UniformComposition
          data={composition}
          contextualEditingEnhancer={contextualEditingEnhancer}
          behaviorTracking="onLoad"
        >
          <UniformSlot name="components" />
        </UniformComposition>
      </main>
      <Footer nodes={nodes} />
    </>
  );
}
