import { AirtableBase, AirtableForm } from "@lacymorrow/mdx-embed/dist/components/airtable";
import { Buzzsprout } from "@lacymorrow/mdx-embed/dist/components/buzzsprout";
import { Cinnamon } from "@lacymorrow/mdx-embed/dist/components/cinnamon";
import { CodePen } from "@lacymorrow/mdx-embed/dist/components/codepen";
import { CodeSandbox } from "@lacymorrow/mdx-embed/dist/components/codesandbox";
import { EggheadLesson } from "@lacymorrow/mdx-embed/dist/components/egghead";
import { Figma } from "@lacymorrow/mdx-embed/dist/components/figma";
import { Flickr } from "@lacymorrow/mdx-embed/dist/components/flickr";
import { Gist } from "@lacymorrow/mdx-embed/dist/components/gist";
import { Instagram } from "@lacymorrow/mdx-embed/dist/components/instagram";
import { Lbry } from "@lacymorrow/mdx-embed/dist/components/lbry";
import { LinkedInBadge } from "@lacymorrow/mdx-embed/dist/components/linkedin";
import { Pin, PinterestBoard, PinterestFollowButton } from "@lacymorrow/mdx-embed/dist/components/pinterest";
import { Replit } from "@lacymorrow/mdx-embed/dist/components/replit";
import { SimplecastEpisode } from "@lacymorrow/mdx-embed/dist/components/simplecast";
import { Snack } from "@lacymorrow/mdx-embed/dist/components/snack";
import { SoundCloud } from "@lacymorrow/mdx-embed/dist/components/soundcloud";
import { Spotify } from "@lacymorrow/mdx-embed/dist/components/spotify";
import { TikTok } from "@lacymorrow/mdx-embed/dist/components/tiktok";
import { Twitch } from "@lacymorrow/mdx-embed/dist/components/twitch";
import { Tweet, TwitterFollowButton, TwitterHashtagButton, TwitterList, TwitterMentionButton, TwitterTimeline } from "@lacymorrow/mdx-embed/dist/components/twitter";
import { Vimeo } from "@lacymorrow/mdx-embed/dist/components/vimeo";
import { Whimsical } from "@lacymorrow/mdx-embed/dist/components/whimsical";
import { Wikipedia } from "@lacymorrow/mdx-embed/dist/components/wikipedia";
import { Wistia } from "@lacymorrow/mdx-embed/dist/components/wistia";
import { YouTube } from "@lacymorrow/mdx-embed/dist/components/youtube";

import Counter from './example-counter';
import {
	Accordion,
	Blockquote,
	Code,
	CustomImage,
	CustomLink,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Hr,
	Ol,
	P,
	Tab,
	Table,
	Tabs,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Ul
} from './mdx-components';

export const componentMap = {
	// Example Counter Component
	Counter,

	// NextBook Components
	Accordion,
	Tab,
	Tabs,
	table: Table,
	thead: Thead,
	tbody: Tbody,
	tr: Tr,
	td: Td,
	th: Th,
	a: CustomLink,
	img: CustomImage,
	blockquote: Blockquote,
	code: Code,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	ol: Ol,
	ul: Ul,
	hr: Hr,
	p: P,

	// @lacymorrow/mdx-embed
	AirtableBase,
	AirtableForm,
	Buzzsprout,
	Cinnamon,
	CodePen,
	CodeSandbox,
	EggheadLesson,
	Figma,
	Flickr,
	Gist,
	Instagram,
	Lbry,
	LinkedInBadge,
	Pin,
	PinterestBoard,
	PinterestFollowButton,
	Replit,
	SimplecastEpisode,
	Snack,
	SoundCloud,
	Spotify,
	TikTok,
	Twitch,
	Tweet,
	TwitterFollowButton,
	TwitterHashtagButton,
	TwitterList,
	TwitterMentionButton,
	TwitterTimeline,
	Vimeo,
	Whimsical,
	Wikipedia,
	Wistia,
	YouTube,
}
