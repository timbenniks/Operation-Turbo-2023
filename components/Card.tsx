import { ComponentProps } from "@uniformdev/canvas-react";
import { CldImage } from "next-cloudinary";
import theme from "tailwindcss/defaultTheme";

type CardProps = ComponentProps<{
  identifier: string;
  type: string;
  title: string;
  description: string;
  date: string;
  media: string;
  component: {
    variant?: string;
  };
}>;

const Card: React.FC<CardProps> = ({
  identifier,
  type,
  title,
  description,
  date,
  media,
  component: { variant },
}: CardProps) => {
  const img = (
    <CldImage
      width={480}
      height={320}
      alt={title}
      loading="lazy"
      src={media}
      className="block"
      deliveryType="fetch"
      sizes={`${
        variant
          ? "240px"
          : `(min-width: ${theme.screens.md}) 50vw, (min-width: ${theme.screens.lg}) 25vw, 100vw`
      }`}
    />
  );

  const titleTag = (
    <h3 className="text-xl font-bold uppercase flowing-title block line-clamp-1">
      {title}
    </h3>
  );
  const descriptionTag = <p className="line-clamp-4">{description}</p>;

  if (type === "video") {
    return (
      <div
        className={`flex flex-col mb-8 ${variant ? "md:flex-row" : "flex-col"}`}
      >
        <div
          className={`mb-4 w-full ${
            variant ? "md:mr-4 md:w-60" : "mb-4 w-full"
          }`}
        >
          {img ? img : null}
        </div>
        <div
          className={`w-full ${variant ? "md:w-[calc(100%-15rem)]" : "w-full"}`}
        >
          {title ? titleTag : null}
          {description ? descriptionTag : null}
        </div>
      </div>
    );
  }

  if (type === "blog") {
    return <h1>blog-{identifier}</h1>;
  }

  if (type === "talk") {
    return <h1>talk-{identifier}</h1>;
  }
};

export default Card;
