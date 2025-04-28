import { createClient } from "contentful";

export const fetchContentfulData = async (contentType, accessToken) => {
  try {
    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID, // Space ID remains the same
      accessToken: accessToken, // Dynamically pass the access token
    });

    const response = await client.getEntries({ content_type: contentType });
    return response.items;
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return [];
  }
};
