import { ComponentProps, UniformRichText } from "@uniformdev/canvas-react";

type RichTextProps = ComponentProps<{
  text: string;
  component: {
    variant?: string;
  };
}>;

const RichText: React.FC<RichTextProps> = ({
  text,
  component: { variant },
}: RichTextProps) => (
  <>
    {text && (
      <UniformRichText
        className={`rich-text text-xl mb-4 ${variant ? "p-8" : "p-0"}`}
        parameterId="text"
      />
    )}
  </>
);

export default RichText;
