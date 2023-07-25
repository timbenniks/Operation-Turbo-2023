import { ComponentProps } from "@uniformdev/canvas-react";

type DetailProps = ComponentProps<{
  title: string;
  content: string;
}>;

const Detail: React.FC<DetailProps> = ({ title, content }: DetailProps) => (
  <li>
    <dl>
      <dt className="inline-block title flowing-title leading-mobiletitle md:leading-title ">
        {title}
      </dt>
      <dd className="text-2xl mt-2 block">{content}</dd>
    </dl>
  </li>
);

export default Detail;
