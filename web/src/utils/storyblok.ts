import { fetch } from 'cross-undici-fetch'
import parser from "react-html-parser";
import StoryBlokClient, { Richtext } from "storyblok-js-client";
const token = "4Sl5OG2kesCX0K97UTd0Wwtt";

export const richText = (data: Richtext) => {
  const story = new StoryBlokClient({
    accessToken: token,
  });
  return parser(story.richTextResolver.render(data));
};

export const convert = (data: string) => {
  return parser(data);
};