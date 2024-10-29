export default async function breakingNewsCatNewsApi() {
  const route = `https://backoffice.ajkal.us/breaking-news`;

  // Add error handling for fetch
  // let bannerList = [];
  try {
    let data = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }
    let breakingNewsData = await data.json();
    return breakingNewsData?.data; // Safely extract the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
