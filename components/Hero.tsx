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
  <div className="hero relative md:aspect-[1255/537] overflow-hidden mt-20 md:mt-auto">
    {image && image[0]?.publicId ? (
      <CldImage
        width={image[0]?.width}
        height={image[0]?.height}
        src={image[0]?.publicId}
        alt={image[0]?.alt || ""}
        rawTransformations={[image[0]?.transformation]}
        loading="eager"
        sizes="100vw"
        className="static md:absolute left-0 top-0 object-cover"
      />
    ) : (
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full rounded-lg bg-white bg-opacity-10" />
      </div>
    )}
    <article
      className={`static m-4 md:m-0 md:absolute ${
        textAlignment === "right" ? "md:text-right" : ""
      } ${textAlignment === "left" ? "md:text-left" : ""} ${
        textAlignment === "center" ? "md:text-center" : ""
      } ${copyLocation === "right" ? "right-12" : "left-12"} 
      ${verticalAlignment === "top" ? "top-12" : ""} ${
        verticalAlignment === "bottom" ? "bottom-12" : ""
      } ${verticalAlignment === "middle" ? "top-2/4 md:-translate-y-2/4" : ""}`}
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
