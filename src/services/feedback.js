const root = "/api";

const feedback = async (data, version) => {
  const body = {
    data,
    version,
  };

  // post data to server
  const response = await fetch(`${root}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error status side: ${response.status}`);
  }

  return response.json();
};

export default feedback;
