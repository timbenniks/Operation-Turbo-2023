import { ComponentProps } from "@uniformdev/canvas-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import theme from "tailwindcss/defaultTheme";

type CardProps = ComponentProps<{
  identifier: string;
  type: string;
  title: string;
  description: string;
  date: string;
  media: string;
  day: string;
  month: string;
  year: string;
  upcoming: boolean;
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
  day,
  month,
  year,
  upcoming,
  component: { variant },
}: CardProps) => {
  const img = (
    <CldImage
      width={480}
      height={320}
      alt={title}
      loading="lazy"
      src={media}
      className="fancy-image"
      deliveryType="fetch"
      sizes={`${
        variant
          ? "240px"
          : `(min-width: ${theme.screens.md}) 50vw, (min-width: ${theme.screens.lg}) 25vw, 100vw`
      }`}
    />
  );

  const titleTag = (
    <h3 className="text-2xl mb-4 line-clamp-1 font-black underline">{title}</h3>
  );
  const descriptionTag = <p className="line-clamp-2">{description}</p>;

  const dateTag = (
    <div className="date-field fancy-image bg-black">
      <div className="mr-4 item-date">
        <div
          className="
        date-wrap
        bg-blue-dark
        py-2
        px-4
        text-white
        uppercase
        text-center
        font-black
      "
        >
          <span className="block leading-none text-4xl pb-1">{day}</span>
          <span className="block leading-none text-lg pb-1 uppercase">
            {month}
          </span>
          <span className="block leading-none text-lg pb-1">{year}</span>
        </div>
      </div>
    </div>
  );

  if (type === "video") {
    return (
      <div
        className={` flex flex-col mb-4 ${
          variant ? "md:flex-row" : "flex-col"
        }`}
      >
        <div
          className={`relative mb-4 w-full ${
            variant ? "md:mr-4 md:w-60" : "mb-4 w-full"
          }`}
        >
          <Link
            target="_blank"
            title={title}
            rel="noopener noreferrer"
            href={`https://youtube.com/watch?v=${identifier}`}
          >
            {img ? img : null}
            <span className="play"></span>
          </Link>
        </div>
        <div
          className={`w-full ${variant ? "md:w-[calc(100%-15rem)]" : "w-full"}`}
        >
          <Link
            target="_blank"
            title={title}
            rel="noopener noreferrer"
            href={`https://youtube.com/watch?v=${identifier}`}
          >
            {title ? titleTag : null}
            {description && variant ? descriptionTag : null}
          </Link>
        </div>
      </div>
    );
  }

  if (type === "blog") {
    return <h1>blog-{identifier}</h1>;
  }

  if (type === "talk") {
    return dateTag;
  }
};

export default Card;
