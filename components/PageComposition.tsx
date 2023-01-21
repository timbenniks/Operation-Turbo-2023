import Head from "next/head";
import { RootComponentInstance } from "@uniformdev/canvas";
import {
  Composition,
  Slot,
  useContextualEditing,
  createApiEnhancer,
} from "@uniformdev/canvas-react";

import "./canvasComponents";

export default function PageComposition({
  composition: initialCompositionValue,
}: {
  composition: RootComponentInstance;
}) {
  const { composition } = useContextualEditing({
    initialCompositionValue,
    enhance: createApiEnhancer({
      apiUrl: "/api/preview",
    }),
  });

  const { title } = composition?.parameters || {};
  return (
    <>
      <Head>
        <title>{title?.value as string}</title>
      </Head>
      <>
        <Composition data={composition}>
          <Slot name="components" />
        </Composition>
      </>
    </>
  );
}
