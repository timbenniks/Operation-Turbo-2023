import { ComponentProps } from "@uniformdev/canvas-react";

type DetailProps = ComponentProps<{
  key: string;
  val: string;
}>;

const Detail: React.FC<DetailProps> = ({ key, val }: DetailProps) => (
  <li>
    <dl>
      <dt className="bg-[#091A32] text-2xl font-bold text-white inline-block py-1 px-2 mb-2">
        {key}
      </dt>
      <dd className="text-xl">{val}</dd>
    </dl>
  </li>
);

export default Detail;
