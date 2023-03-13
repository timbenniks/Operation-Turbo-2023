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
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title?.value as string}</title>
        <meta property="og:title" content={title?.value as string} />
        <meta name="description" content={description?.value as string} />
        <meta
          property="og:description"
          content={description?.value as string}
        />
        <meta
          property="og:url"
          content={`https://timbenniks.dev${router.pathname}`}
        />
        <link
          rel="canonical"
          href={`https://timbenniks.dev${router.pathname}`}
        ></link>

        <meta
          name="google-site-verification"
          content="hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20"
        />
        <meta property="og:site_name" content="Tim Benniks" />
        <meta property="og:type" content="website" />
      </Head>

      <CldOgImage
        src={image?.value[0].url as string}
        alt={title?.value as string}
        width={1920}
        height={1080}
        twitterTitle={title?.value as string}
      />

      <Header nodes={nodes} />
      <main>
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
