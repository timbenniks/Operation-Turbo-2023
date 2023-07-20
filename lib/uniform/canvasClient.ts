import {
  CanvasClient,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from "@uniformdev/canvas";
import runEnhancers from "./enhancers";
import getConfig from "next/config";
import { ProjectMapClient } from '@uniformdev/project-map';

const {
  serverRuntimeConfig: { apiKey, apiHost, projectId },
} = getConfig();

export const canvasClient = new CanvasClient({
  apiKey,
  apiHost,
  projectId,
});

export const projectMapClient = new ProjectMapClient({
  apiKey,
  apiHost,
  projectId,
});

export async function getNavigationItems() {
  const { serverRuntimeConfig } = getConfig();
  const { projectMapId } = serverRuntimeConfig

  const { nodes } = await projectMapClient.getNodes({
    projectMapId
  });

  const mappedNodes = nodes.map(node => {
    return {
      name: node.name,
      path: node.path
    }
  })

  const filteredNodes = mappedNodes.filter(n => {
    if (n.path !== '/uniform-videos') {
      return true
    }
  })

  console.log(filteredNodes)

  return filteredNodes
}

export async function getCompositionBySlug(slug: string, preview: boolean) {
  const { serverRuntimeConfig } = getConfig();
  const { projectMapId } = serverRuntimeConfig

  const { composition } = await canvasClient
    .getCompositionByNodePath({
      projectMapId,
      projectMapNodePath: slug,
      state:
        process.env.NODE_ENV === 'development' || preview
          ? CANVAS_DRAFT_STATE
          : CANVAS_PUBLISHED_STATE
    })

  await runEnhancers(composition);
  return composition;
}