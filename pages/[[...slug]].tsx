import { getNavigationItems } from "lib/uniform/canvasClient";
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/slug";
import PageComposition from "@/components/PageComposition";
import runEnhancers from "lib/uniform/enhancers";

export const getServerSideProps = withUniformGetServerSideProps({
  param: "slug",
  preview: process.env.NODE_ENV === "development",
  requestOptions: {
    // @ts-ignore
    unstable_resolveData: true,
  },
  callback: async (context, composition) => {
    if (composition) {
      await runEnhancers(composition);
    } else {
      return {
        notFound: true,
      };
    }
    const { preview = false } = context || {};
    const nodes = await getNavigationItems();
    return {
      props: { nodes, preview },
    };
  },
});

export default PageComposition;
