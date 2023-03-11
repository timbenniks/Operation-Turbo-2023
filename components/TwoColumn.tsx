import { ComponentProps, UniformSlot } from "@uniformdev/canvas-react";

type TwoColumnProps = ComponentProps<{
  layout: "fifty-fifty" | "third-twothirds" | "twothirds-third";
}>;

const TwoColumn: React.FC<TwoColumnProps> = ({ layout }: TwoColumnProps) => {
  let sideA = "md:w-2/4";
  let sideB = "md:w-2/4";

  switch (layout) {
    case "fifty-fifty":
      sideA = "md:w-2/4";
      sideB = "md:w-2/4";
      break;
    case "third-twothirds":
      sideA = "md:w-2/5";
      sideB = "md:w-3/5";
      break;
    case "twothirds-third":
      sideA = "md:w-3/5";
      sideB = "md:w-2/5";
      break;
  }

  return (
    <div className="row-component flex flex-col md:flex-row">
      <div className={`w-full md:pr-4 ${sideA}`}>
        <UniformSlot name="sideA" />
      </div>
      <div className={`w-full ${sideB}`}>
        <UniformSlot name="sideB" />
      </div>
    </div>
  );
};

export default TwoColumn;
