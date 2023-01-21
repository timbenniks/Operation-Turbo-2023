import { enhance } from "@uniformdev/canvas";
import { createPreviewHandler } from "@uniformdev/canvas-next";
import getConfig from "next/config";
import { enhancerBuilder } from "../../lib/uniform/enhancers"

const handler = createPreviewHandler({
  secret: () => getConfig().serverRuntimeConfig.previewSecret,
  resolveFullPath: ({ slug }) => slug,
  // This is a dummy enhancer, it converts "personalization" to "p13n" for the sake of the demo
  // feel free to remove it or replace it with your own enhancer
  enhance: (composition) =>
    enhance({
      composition,
      enhancers: enhancerBuilder,
      context: {
        preview: true,
      },
    }),
});

export default handler;