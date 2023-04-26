import { ComponentProps, UniformSlot } from "@uniformdev/canvas-react";
import { CldImage } from "next-cloudinary";
import type { Image } from "../lib/types";

type HeroProps = ComponentProps<{
  image: Image[];
  copyLocation: "left" | "right";
  verticalAlignment: "top" | "middle" | "bottom";
  textAlignment: "left" | "center" | "right";
  spaceBelow: boolean;
}>;

const Hero: React.FC<HeroProps> = ({
  image,
  copyLocation,
  verticalAlignment,
  textAlignment,
  spaceBelow,
}: HeroProps) => (
  <div
    className={`hero relative md:aspect-[1400/600] overflow-hidden mt-20 md:mt-auto ${
      spaceBelow ? "mb-16" : ""
    } `}
  >
    {image && image[0]?.publicId ? (
      <div className="aspect-[1400/600] md:aspect-auto">
        <CldImage
          width={image[0]?.width}
          height={image[0]?.height}
          src={image[0]?.publicId}
          alt={image[0]?.alt || "Tim Benniks"}
          rawTransformations={[image[0]?.transformation]}
          loading="eager"
          sizes="100vw"
          className="static md:absolute left-0 top-0 object-cover aspect-[1400/600]"
        />
      </div>
    ) : (
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full rounded-lg bg-white bg-opacity-10" />
      </div>
    )}
    <article
      className={`static m-4 md:m-0 md:absolute ${
        textAlignment === "right" ? "md:text-right" : ""
      } ${!textAlignment || textAlignment === "left" ? "md:text-left" : ""} ${
        textAlignment === "center" ? "md:text-center" : ""
      } ${copyLocation === "right" ? "right-12" : "left-12"} 
      ${verticalAlignment === "top" ? "top-12" : ""} ${
        verticalAlignment === "bottom" ? "bottom-12" : ""
      } ${
        !verticalAlignment || verticalAlignment === "middle"
          ? "top-2/4 md:-translate-y-2/4"
          : ""
      }`}
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
