import { UniformSlot, ComponentProps } from "@uniformdev/canvas-react";

type ListProps = ComponentProps<{
  component: {
    variant?: string;
  };
}>;

const List: React.FC<ListProps> = ({ component: { variant } }: ListProps) => (
  <div
    className={`${variant !== "list" || !variant ? "row-component" : "list"}`}
  >
    <UniformSlot name="title" emptyPlaceholder={<div className="h-12" />} />

    <UniformSlot
      name="description"
      emptyPlaceholder={<div className="h-12" />}
    />
    <div
      className={`mt-4 grid gap-4 ${
        !variant || variant === "grid"
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-1"
      }`}
    >
      <UniformSlot name="list" emptyPlaceholder={<div className="h-12" />} />
    </div>
  </div>
);

export default List;
