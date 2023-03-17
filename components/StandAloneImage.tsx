import { ComponentProps } from "@uniformdev/canvas-react";
import { CldImage } from "next-cloudinary";
import type { Image } from "../lib/types";

type StandAloneImageProps = ComponentProps<{
  image: Image[];
  title: any;
}>;

const StandAloneImage: React.FC<StandAloneImageProps> = ({
  image,
  title,
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
        className="object-cover fancy-image"
      />
    ) : null}
  </>
);

export default StandAloneImage;
