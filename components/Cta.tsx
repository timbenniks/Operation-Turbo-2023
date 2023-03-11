import { ComponentProps } from "@uniformdev/canvas-react";

type CtaProps = ComponentProps<{
  text: string;
  link: any;
  component: {
    variant?: string;
  };
}>;

const Cta: React.FC<CtaProps> = ({
  text,
  link,
  component: { variant },
}: CtaProps) => (
  <a
    title={text}
    className={`cta cta-${variant ? variant : "default"}`}
    href={link}
  >
    {variant ? (
      <>
        <span>{text}</span>
        <svg
          width="23"
          height="25"
          viewBox="0 0 23 25"
          fill="none"
          className="arrow"
        >
          <path d="M0 12.756L20.4878 12.756" stroke="#7BB3FF" strokeWidth="3" />
          <path
            d="M10.8818 23L20.8805 12.4956L10.8818 2"
            stroke="#7BB3FF"
            strokeWidth="3"
          />
        </svg>
      </>
    ) : (
      <>{text}</>
    )}
  </a>
);

export default Cta;
