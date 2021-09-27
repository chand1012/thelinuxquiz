const root = "/api";

const fetcher = async (url) => {
  const res = await fetch(`${root}${url}`, { method: "GET" });

  if (!res.ok) {
    throw new Error(`Error status code: ${res.status}`);
  }
  return res.json();
};

export default fetcher;
