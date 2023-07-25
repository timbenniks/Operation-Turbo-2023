import { registerUniformComponent } from "@uniformdev/canvas-react";

import Hero from "./Hero";
import Cta from "./Cta";
import Title from "./Title";
import RichText from "./RichText";
import TwoColumn from "./TwoColumn";
import List from "./List"
import Card from "./Card"
import Container from "./Container"
import StandAloneImage from "./StandAloneImage"
import DetailsList from "./DetailsList"
import Detail from "./Detail"

registerUniformComponent({ type: "hero", component: Hero });
registerUniformComponent({ type: "twoColumn", component: TwoColumn });
registerUniformComponent({ type: "cta", component: Cta });
registerUniformComponent({ type: "standAloneImage", component: StandAloneImage });

registerUniformComponent({ type: "container", component: Container })
registerUniformComponent({ type: "container", variantId: "fullWidth", component: Container })

registerUniformComponent({ type: "list", component: List });
registerUniformComponent({ type: "list", variantId: "grid", component: List });
registerUniformComponent({ type: "list", variantId: "list", component: List });

registerUniformComponent({ type: "card", component: Card });
registerUniformComponent({ type: "card", variantId: "small", component: Card });

registerUniformComponent({ type: "title", component: Title });
registerUniformComponent({ type: "title", variantId: "small", component: Title });
registerUniformComponent({ type: "title", variantId: "medium", component: Title });
registerUniformComponent({ type: "title", variantId: "large", component: Title });

registerUniformComponent({ type: "richText", component: RichText });
registerUniformComponent({ type: "richText", variantId: "addedSpace", component: RichText });

registerUniformComponent({ type: "detailsList", component: DetailsList });
registerUniformComponent({ type: "detail", component: Detail });