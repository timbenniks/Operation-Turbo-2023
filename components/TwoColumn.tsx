import { ComponentProps, UniformSlot } from "@uniformdev/canvas-react";

type TwoColumnProps = ComponentProps<{
  layout: "1-1" | "1-2" | "2-1";
}>;

const TwoColumn: React.FC<TwoColumnProps> = ({ layout }: TwoColumnProps) => {
  let sideA = "";
  let sideB = "";

  switch (layout) {
    case "1-1":
      sideA = "md:w-2/4";
      sideB = "md:w-2/4";
      break;
    case "1-2":
      sideA = "md:w-2/5";
      sideB = "md:w-3/5";
      break;
    case "2-1":
      sideA = "md:w-3/5";
      sideB = "md:w-2/5";
      break;
  }

  return (
    <div className="row-component flex flex-col md:flex-row">
      <div className={`w-full mb-8 md:mb-0 md:pr-4 ${sideA}`}>
        <UniformSlot name="sideA" />
      </div>
      <div className={`w-full ${sideB}`}>
        <UniformSlot name="sideB" />
      </div>
    </div>
  );
};

export default TwoColumn;
