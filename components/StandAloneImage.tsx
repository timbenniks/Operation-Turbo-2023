import { ComponentProps } from "@uniformdev/canvas-react";
import { CldImage } from "next-cloudinary";
import type { Image } from "../lib/types";

type StandAloneImageProps = ComponentProps<{
  image: Image[];
  title: string;
  spaceBelow: string;
}>;

const StandAloneImage: React.FC<StandAloneImageProps> = ({
  image,
  title,
  spaceBelow,
}: StandAloneImageProps) => (
  <>
    {image && image[0]?.publicId ? (
      <CldImage
        width={image[0]?.width}
        height={image[0]?.height}
        src={image[0]?.publicId}
        alt={image[0]?.alt || title}
        rawTransformations={[image[0]?.transformation]}
        loading="eager"
        sizes="100vw"
        className={`object-cover fancy-image ${spaceBelow ? "mb-8" : ""}`}
      />
    ) : null}
  </>
);

export default StandAloneImage;
