import { GetServerSidePropsContext } from "next";
import PageComposition from "@/components/PageComposition";
import { getCompositionBySlug } from "lib/uniform/canvasClient";

const CanvasPage = (props) => PageComposition(props);

export default CanvasPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context?.params || {};
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  const { preview } = context;
  const slashedSlug = !slugString
    ? "/"
    : slugString.startsWith("/")
    ? slugString
    : `/${slugString}`;

  const composition = await getCompositionBySlug(slashedSlug, preview);

  return {
    props: {
      composition,
      preview: preview ?? false,
    },
  };
}
