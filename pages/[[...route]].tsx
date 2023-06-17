import { getNavigationItems } from "lib/uniform/canvasClient";
import {
  withUniformGetStaticProps,
  withUniformGetStaticPaths,
} from "@uniformdev/canvas-next/route";
import PageComposition from "@/components/PageComposition";
//import runEnhancers from "lib/uniform/enhancers";

export const getStaticProps = withUniformGetStaticProps({
  silent: process.env.NODE_ENV === "production",
  handleComposition: async (routeResponse, context) => {
    const { preview = false } = context || {};
    if (
      routeResponse.compositionApiResponse.errors?.some(
        (e) => e.type === "data"
      ) ||
      routeResponse.compositionApiResponse.warnings?.some(
        (e) => e.type === "binding"
      )
    ) {
      return {
        notFound: true,
      };
    }
    const nodes = await getNavigationItems();

    return {
      props: {
        nodes,
        preview,
        data: routeResponse.compositionApiResponse.composition,
      },
      revalidate: 86400,
    };
  },
});

export const getStaticPaths = withUniformGetStaticPaths();
export default PageComposition;
