import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

// Initialize Notion Client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Initialize NotionToMarkdown
const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  authorLink?: string;
  date: string;
  topic?: string;
  team?: string;
  readTime?: string;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return [];

  const response = await notion.dataSources.query({
    data_source_id: databaseId,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map((page: any) => {
    // Extract properties safely
    const title = page.properties.Title?.title?.[0]?.plain_text || "Untitled";
    const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || page.id;
    
    // Author can be a rich_text or a person relation, assuming rich_text or select for simplicity
    let author = "Anonymous";
    if (page.properties.Author?.rich_text?.[0]?.plain_text) {
      author = page.properties.Author.rich_text[0].plain_text;
    } else if (page.properties.Author?.people?.[0]?.name) {
      author = page.properties.Author.people[0].name;
    }

    let authorLink = undefined;
    if (page.properties.AuthorLink?.url) {
      authorLink = page.properties.AuthorLink.url;
    }

    let topic = undefined;
    if (page.properties.Topic?.select?.name) {
      topic = page.properties.Topic.select.name;
    } else if (page.properties.Topic?.multi_select?.[0]?.name) {
      topic = page.properties.Topic.multi_select[0].name;
    } else if (page.properties.Topic?.rich_text?.[0]?.plain_text) {
      topic = page.properties.Topic.rich_text[0].plain_text;
    }

    let team = undefined;
    if (page.properties.Team?.select?.name) {
      team = page.properties.Team.select.name;
    } else if (page.properties.Team?.multi_select?.[0]?.name) {
      team = page.properties.Team.multi_select[0].name;
    } else if (page.properties.Team?.rich_text?.[0]?.plain_text) {
      team = page.properties.Team.rich_text[0].plain_text;
    }

    let readTime = undefined;
    if (page.properties.ReadTime?.rich_text?.[0]?.plain_text) {
      readTime = page.properties.ReadTime.rich_text[0].plain_text;
    } else if (page.properties.ReadTime?.number) {
      readTime = `${page.properties.ReadTime.number} min read`;
    }

    const date = page.properties.Date?.date?.start || page.created_time;

    return {
      id: page.id,
      title,
      slug,
      author,
      authorLink,
      date,
      topic,
      team,
      readTime,
    };
  });
}

export async function getPostMarkdown(pageId: string, slug: string): Promise<string> {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent || "";
}
