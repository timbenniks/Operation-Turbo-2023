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
      height={270}
      alt={title}
      loading="lazy"
      src={media}
      crop="fill"
      className="fancy-image"
      deliveryType="fetch"
      sizes={`${
        variant ? "400px" : `(min-width: ${theme.screens.md}) 33vw, 100vw`
      }`}
    />
  );

  const titleTag = (
    <h3 className="text-xl mb-2 line-clamp-1 font-black uppercase underline">
      {title}
    </h3>
  );
  const descriptionTag = <p className="line-clamp-2">{description}</p>;

  const dateTag = (
    <div className="date-field fancy-image bg-black">
      <div className="item-date">
        <div
          className="
        date-wrap
        py-2
        px-4
        text-white
        uppercase
        text-center
        font-black
      "
        >
          <span className="block leading-none text-4xl pb-1">
            {day ? day : "01"}
          </span>
          <span className="block leading-none text-lg pb-1 uppercase">
            {month ? month : "JAN"}
          </span>
          <span className="block leading-none text-lg pb-1">
            {year ? year : "2023"}
          </span>
        </div>
      </div>
    </div>
  );

  if (!type || type === "video") {
    return (
      <div
        className={` flex flex-col mb-4 ${
          variant ? "md:flex-row" : "flex-col"
        }`}
      >
        <div
          className={`relative w-full ${
            variant ? "md:mr-4 md:w-60" : "w-full"
          } ${!media ? "aspect-[16/9] mb-0" : "mb-4"}`}
        >
          <Link
            target="_blank"
            title={title}
            rel="noopener noreferrer"
            href={`https://youtube.com/watch?v=${identifier}`}
          >
            {media ? (
              img
            ) : (
              <div className="w-full h-full rounded-lg bg-white bg-opacity-10" />
            )}
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
            {title ? (
              titleTag
            ) : (
              <div className="w-full rounded-lg bg-white bg-opacity-10 mt-4 py-3"></div>
            )}
          </Link>
          {description && variant ? descriptionTag : null}
          {!description && variant ? (
            <div className="w-3/4 rounded-lg bg-white bg-opacity-10 py-3 mt-4"></div>
          ) : null}
        </div>
      </div>
    );
  }

  if (type === "blog") {
    return (
      <div
        className={` flex flex-col mb-4 ${
          variant ? "md:flex-row" : "flex-col"
        }`}
      >
        <div
          className={`relative w-full ${
            variant ? "md:mr-4 md:w-60" : "mb-4 w-full"
          }`}
        >
          <Link
            target="_blank"
            title={title}
            rel="noopener noreferrer"
            href={identifier ? identifier : ""}
          >
            {media ? (
              img
            ) : (
              <div className="w-full h-full rounded-lg bg-white bg-opacity-10" />
            )}
          </Link>
        </div>
        <div
          className={`w-full ${variant ? "md:w-[calc(100%-15rem)]" : "w-full"}`}
        >
          <Link
            target="_blank"
            title={title}
            rel="noopener noreferrer"
            href={identifier ? identifier : ""}
          >
            {title ? (
              titleTag
            ) : (
              <div className="w-full rounded-lg bg-white bg-opacity-10 p-3"></div>
            )}
          </Link>
          {description && variant ? descriptionTag : null}
          {!description && variant ? (
            <div className="w-3/4 rounded-lg bg-white bg-opacity-10 mt-4 p-3"></div>
          ) : null}
        </div>
      </div>
    );
  }

  if (type === "talk") {
    return (
      <div className="flex flex-row">
        <div className="w-20 mr-4">{dateTag}</div>
        <div
          className={`${variant ? "w-full md:w-[calc(100%-5rem)]" : "w-full"}`}
        >
          {upcoming ? (
            <p className="inline-block font-bold text-lg uppercase fancy-title">
              upcoming
            </p>
          ) : null}
          <Link
            target="_blank"
            title={title}
            rel="noopener noreferrer"
            href={identifier ? identifier : ""}
          >
            {title ? (
              titleTag
            ) : (
              <div className="w-full rounded-lg bg-white bg-opacity-10 p-3"></div>
            )}
          </Link>
          {description ? (
            descriptionTag
          ) : (
            <div className="w-3/4 rounded-lg bg-white bg-opacity-10 mt-4 p-3"></div>
          )}
        </div>
      </div>
    );
  }
};

export default Card;
