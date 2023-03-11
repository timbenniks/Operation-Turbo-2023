import { ComponentProps, UniformSlot } from "@uniformdev/canvas-react";
import { CldImage } from "next-cloudinary";
import type { Image } from "../lib/types";

type HeroProps = ComponentProps<{
  image: Image[];
  copyLocation: "left" | "right";
  verticalAlignment: "top" | "middle" | "bottom";
  textAlignment: "left" | "center" | "right";
}>;

const Hero: React.FC<HeroProps> = ({
  image,
  copyLocation,
  verticalAlignment,
  textAlignment,
}: HeroProps) => (
  <div className="relative aspect-[1255/537] overflow-hidden">
    {image && image[0]?.publicId ? (
      <CldImage
        width={image[0]?.width}
        height={image[0]?.height}
        src={image[0]?.publicId}
        alt={image[0]?.alt || ""}
        rawTransformations={[image[0]?.transformation]}
        loading="eager"
        sizes="100vw"
        className="absolute left-0 top-0 object-cover"
      />
    ) : (
      <img
        srcSet="https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_640:573,c_fill/w_700/Screenshot_2023-01-25_at_14.19.56_zhe8a9.png"
        alt="No image added"
        width="640"
        height="573"
        className="block"
        loading="eager"
      />
    )}
    <article
      className={`absolute ${textAlignment === "right" && "text-right"} ${
        textAlignment === "left" && "text-left"
      } ${textAlignment === "center" && "text-center"} ${
        copyLocation === "right" ? "right-12" : "left-12"
      } 
      ${verticalAlignment === "top" && "top-12"} ${
        verticalAlignment === "bottom" && "bottom-12"
      } ${verticalAlignment === "middle" && "top-2/4 -translate-y-2/4"}`}
    >
      <UniformSlot
        name="title"
        emptyPlaceholder={<div className="h-12"></div>}
      />
      <UniformSlot
        name="description"
        emptyPlaceholder={<div className="h-12"></div>}
      />
      <UniformSlot name="cta" emptyPlaceholder={<div className="h-12"></div>} />
    </article>
  </div>
);

export default Hero;
