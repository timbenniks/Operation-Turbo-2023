import { UniformSlot, ComponentProps } from "@uniformdev/canvas-react";

type ListProps = ComponentProps<{
  component: {
    variant?: string;
  };
  moreSpace: boolean;
  twoItems: boolean;
}>;

const List: React.FC<ListProps> = ({
  moreSpace,
  twoItems,
  component: { variant },
}: ListProps) => (
  <div
    className={`${variant !== "list" || !variant ? "row-component" : "list"}`}
  >
    <UniformSlot name="title" emptyPlaceholder={<div className="h-12" />} />

    <UniformSlot
      name="description"
      emptyPlaceholder={<div className="h-12" />}
    />
    <div
      className={`mt-4 grid ${moreSpace ? "gap-12" : "gap-4"} 
      ${
        !variant || variant === "grid"
          ? `grid-cols-1 ${twoItems ? "md:grid-cols-2" : "md:grid-cols-3"}`
          : "grid-cols-1"
      }`}
    >
      <UniformSlot name="list" emptyPlaceholder={<div className="h-12" />} />
    </div>
  </div>
);

export default List;
