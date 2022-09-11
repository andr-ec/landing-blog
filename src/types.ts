import type { MarkdownHeading, MDXInstance, Page } from "astro";

type Theme = "light" | "dark";

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}

type SiteMeta = {
	title: string;
	description?: string;
	image?: string;
};

type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

interface Post {
	title: string;
	description: string;
	publishDate?: Date;
	tags?: string[];
}

export type {
	MDXInstance,
	Page,
	Theme,
	IElement,
	SiteMeta,
	PaginationLink,
	Post,
};


export interface GhostPost {
	id: string;
	uuid: string;
	title: string;
	slug: string;
	html: string;
	comment_id: string;
	feature_image: string;
	featured: boolean;
	visibility: string;
	created_at: Date;
	updated_at: Date;
	published_at: Date;
	custom_excerpt: null;
	codeinjection_head: null;
	codeinjection_foot: null;
	custom_template: null;
	canonical_url: null;
	tags: Tag[];
	authors: Author[];
	primary_author: Author;
	primary_tag: Tag | null;
	url: string;
	excerpt: string;
	reading_time: number;
	access: boolean;
	comments: boolean;
	og_image: null;
	og_title: null;
	og_description: null;
	twitter_image: null;
	twitter_title: null;
	twitter_description: null;
	meta_title: null;
	meta_description: null;
	email_subject: null;
	frontmatter: null;
	feature_image_alt: null;
	feature_image_caption: null;
}

export interface Author {
	id: string;
	name: string;
	slug: string;
	profile_image: string;
	cover_image: null;
	bio: null;
	website: null;
	location: null;
	facebook: null;
	twitter: null;
	meta_title: null;
	meta_description: null;
	url: string;
}

export interface Tag {
	id: string;
	name: string;
	slug: string;
	description: null;
	feature_image: null;
	visibility: string;
	meta_title: null;
	meta_description: null;
	og_image: null;
	og_title: null;
	og_description: null;
	twitter_image: null;
	twitter_title: null;
	twitter_description: null;
	codeinjection_head: null;
	codeinjection_foot: null;
	canonical_url: null;
	accent_color: null;
	url: string;
}

export interface SimplePost {
	title: string
	description: string
	url: string
	publishDate: Date
	slug?: string | undefined
	tags?: string[];
	headings?: MarkdownHeading[]
}