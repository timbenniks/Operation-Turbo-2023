import { getNavigationItems } from "lib/uniform/canvasClient";
import {
  withUniformGetStaticProps,
  withUniformGetStaticPaths,
} from "@uniformdev/canvas-next/project-map";
import PageComposition from "@/components/PageComposition";
import runEnhancers from "lib/uniform/enhancers";

export const getStaticProps = withUniformGetStaticProps({
  param: "slug",
  preview: process.env.NODE_ENV === "development",
  callback: async (context, composition) => {
    if (composition) {
      await runEnhancers(composition);
    }

    const { preview = false } = context || {};
    const nodes = await getNavigationItems();
    return {
      props: { nodes, preview },
      revalidate: 86400,
    };
  },
});

export const getStaticPaths = withUniformGetStaticPaths({
  requestOptions: {
    depth: 5,
    withCompositionData: true,
  },
});

export default PageComposition;
