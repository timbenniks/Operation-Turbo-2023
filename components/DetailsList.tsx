import { UniformSlot, ComponentProps } from "@uniformdev/canvas-react";

type DetailsListProps = ComponentProps<{
  label: string;
}>;

const DetailsList: React.FC<DetailsListProps> = ({
  label,
}: DetailsListProps) => (
  <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 p-8 xl:px-0">
    <UniformSlot name="details" />
  </ul>
);

export default DetailsList;
