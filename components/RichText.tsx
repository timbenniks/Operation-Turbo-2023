import { ComponentProps } from "@uniformdev/canvas-react";

type RichTextProps = ComponentProps<{
  content: {
    rteValue: string;
  };
  component: {
    variant?: string;
  };
}>;

const RichText: React.FC<RichTextProps> = ({
  content,
  component: { variant },
}: RichTextProps) => (
  <>
    {content && (
      <article
        className={`rich-text text-xl ${variant ? "p-8" : "p-0"}`}
        dangerouslySetInnerHTML={{ __html: content?.rteValue }}
      />
    )}
  </>
);

export default RichText;
