import { getCollection, getEntries } from 'astro:content';


export type Link = {
  text: string;
  link?: string;
  header?: boolean;
};

/**
 * Queries the content collection to build the sidebar dynamically
 * @returns {Link[]} - An array of links to be used in the sidebar
 */
const get = async (): Link[] => {
  const entries = await getCollection('handbook');
  return entries.map((entry) => {
    return {
      text: entry.data.title,
      link: `/handbook/${entry.slug}`,
      header: entry.slug.endsWith('index.md') || entry.data.header,
    };
  });

  // Fake data
  return [
    { text: "Core", header: true },
    { text: "Introduction", link: "/core/introduction" },
    { text: "Colors", link: "/core/colors" },
    { text: "Typography", link: "/core/typography" },
    { text: "Shadows", link: "/core/shadows" },

    { text: "Components", header: true },
    { text: "Buttons", link: "/components/buttons" },
    { text: "Input", link: "/components/input" },
    { text: "Status pills", link: "/components/status-pill" },
    { text: "Table", link: "/components/table" },

    { text: "Patterns", header: true },
    { text: "Introduction", link: "/patterns/introduction" },
  ];
};

export default get;
