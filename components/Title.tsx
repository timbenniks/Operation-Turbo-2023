import { ComponentProps } from "@uniformdev/canvas-react";
import React from "react";

type TitleProps = ComponentProps<{
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bottomMargin: boolean;
  component: {
    variant?: string;
  };
}>;

const Title: React.FC<TitleProps> = ({
  text,
  type,
  bottomMargin,
  component: { variant },
}: TitleProps) => {
  const TitleTag = ({ tagName, children, ...props }) =>
    React.createElement(tagName, props, children);

  let size = "text-3xl md:text-7xl";
  switch (variant) {
    case "large":
      size = "text-3xl md:text-6xl";
      break;
    case "medium":
      size = "text-3xl md:text-5xl";
      break;
    case "small":
      size = "text-3xl";
      break;

    default:
      size = "text-3xl md:text-6xl";
      break;
  }

  return (
    <div>
      <TitleTag
        tagName={type || "h1"}
        className={`${
          bottomMargin ? "mb-6" : "mb-auto"
        } ${size} title flowing-title`}
      >
        {text}
      </TitleTag>
    </div>
  );
};

export default Title;
