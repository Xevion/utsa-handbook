import { getCollection, getEntries, type CollectionEntry } from "astro:content";

export type Link = {
  text: string;
  link?: string;
  header?: boolean;
};

// The order of the headers (lower is closer to the top)
const headerOrder: Record<string, number> = {
  root: 0,
  learning: 1,
  living: 2,
  improving: 3,
  default: 9999, // If the header is not defined in here, it will be placed at the bottom
};

/**
 * Applies title case (first letter uppercase, the rest lowercase) to all words (a letter followed by any number of non-whitespace characters) in the input string
 * @param s The input string
 * @returns Every word title-cased
 */
function toTitleCase(s: string): string {
  return s.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Queries the content collection to build the sidebar dynamically
 * @returns {Link[]} - An array of links to be used in the sidebar
 */
const get = async (): Promise<Link[]> => {
  const entries = await getCollection("handbook");
  const entriesByHeader: Record<string, CollectionEntry<"handbook">[]> = {};

  // Group the entries by their header
  entries.forEach((entry) => {
    // Acquire the header using the first part of the slug (otherwise, use 'root' as the header)
    const header =
      entry.slug.indexOf("/") !== -1 ? entry.slug.split("/")[0] : "root";

    if (entriesByHeader[header]) entriesByHeader[header].push(entry);
    else entriesByHeader[header] = [entry];
  });

  // Begin building the links array (root level first, then the rest of the entries)
  const links: Link[] = entriesByHeader.root.map((entry) => ({
    text: entry.data.title,
    link: `/handbook/${entry.slug}`,
  }));

  // Remove the root level
  delete entriesByHeader.root;

  // Sort the headers by the order defined in headerOrder
  const sortedHeaders = Object.keys(entriesByHeader).sort((a, b) => {
    return (
      (headerOrder[a] || headerOrder.default) -
      (headerOrder[b] || headerOrder.default)
    );
  });

  // Add the rest of the entries to the links array
  sortedHeaders.forEach((header) => {
    links.push({ text: toTitleCase(header), header: true });
    entriesByHeader[header].forEach((entry) => {
      links.push({
        text: entry.data.title,
        link: `/handbook/${entry.slug}`,
      });
    });
  });

  return links;
};

export default get;
