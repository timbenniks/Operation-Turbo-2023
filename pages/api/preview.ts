import getConfig from "next/config";
import { createPreviewHandler } from "@uniformdev/canvas-next";
import runEnhancers from "lib/uniform/enhancers";

const handler = createPreviewHandler({
  secret: () => getConfig().serverRuntimeConfig.previewSecret,
  enhance: (composition) => runEnhancers(composition),
});

export default handler;