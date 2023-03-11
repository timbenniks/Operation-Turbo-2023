import { UniformSlot, ComponentProps } from "@uniformdev/canvas-react";

type ListProps = ComponentProps<{
  component: {
    variant?: string;
  };
}>;

const List: React.FC<ListProps> = ({ component: { variant } }: ListProps) => (
  <div className={`${variant !== "list" || !variant ? "row-component" : ""}`}>
    <div className="mb-4">
      <UniformSlot name="title" />
    </div>

    <UniformSlot name="description" />

    <div
      className={`mt-4 grid gap-4 ${
        variant === "grid" ? "grid-cols-3" : "grid-cols-1"
      }`}
    >
      <UniformSlot name="list" />
    </div>
  </div>
);

export default List;
