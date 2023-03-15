import { ComponentProps } from "@uniformdev/canvas-react";
import Link from "next/link";

type CtaProps = ComponentProps<{
  text: string;
  link: any;
  externalLink: string;
}>;

const Cta: React.FC<CtaProps> = ({ text, link, externalLink }: CtaProps) => (
  <Link
    title={text}
    className="cta cta-default"
    href={link ? link : externalLink}
    target={externalLink ? "_blank" : "_self"}
    rel="noopener noreferrer"
  >
    {text}
  </Link>
);

export default Cta;
