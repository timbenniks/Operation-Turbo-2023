import { enhance, EnhancerBuilder } from "@uniformdev/canvas";

import {
  createCloudinaryEnhancer,
  CLOUDINARY_PARAMETER_TYPES,
} from '@uniformdev/canvas-cloudinary';

export const enhancerBuilder = new EnhancerBuilder()
  .parameterType(
    CLOUDINARY_PARAMETER_TYPES,
    createCloudinaryEnhancer(),
  );

export default async function runEnhancers(composition) {
  // await enhance({
  //   composition,
  //   enhancers: enhancerBuilder,
  //   context: { preview: true },
  // })
  return composition
}
