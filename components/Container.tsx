import { UniformSlot, ComponentProps } from "@uniformdev/canvas-react";

type ContainerProps = ComponentProps<{
  label: string;
  background: string;
  component: {
    variant?: string;
  };
}>;

const Container: React.FC<ContainerProps> = ({
  label,
  background,
  component: { variant },
}: ContainerProps) => (
  <div
    style={{ background: background ? background : "#0F223E" }}
    className={`${variant ? "w-full py-12 mb-12" : "max-w-[1400px] mx-auto"}`}
    title={label}
  >
    <div className="max-w-[1400px] mx-auto">
      <UniformSlot name="content" />
    </div>
  </div>
);

export default Container;
