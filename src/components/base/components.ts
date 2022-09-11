import Paragraph from "./Paragraph.astro";
import Title from "./Title.astro";
import Span from "./Span.astro";
import A from "./A.astro";
import Div from "./Div.astro";
import Img from "./Img.astro";

export const sanitize = {
  dropElements: ["head"],
  blockElements: ["html", "body"],
  // dropAttributes: { href: ["a"] },
};

export const components = { h1: Title, p: Paragraph, span: Span, a: A, div: Div, img: Img };
