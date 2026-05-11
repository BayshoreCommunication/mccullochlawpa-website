export default async function GetAllPostData() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const bloData = await fetch(
      "https://backend-mccullochlawpa.vercel.app/site/blog",
      {
        next: { revalidate: 200 },
        signal: controller.signal,
      }
    );

    if (!bloData.ok) {
      return { data: [] };
    }

    return bloData.json();
  } catch {
    return { data: [] };
  } finally {
    clearTimeout(timeout);
  }
}
