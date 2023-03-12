import Head from "next/head";
import { RootComponentInstance } from "@uniformdev/canvas";
import {
  UniformComposition,
  UniformSlot,
  createUniformApiEnhancer,
} from "@uniformdev/canvas-react";

import "./canvasComponents";
import Header from "./Header";

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
        <meta property="og:image" content={image?.value[0].url as string} />
      </Head>

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
    </>
  );
}
