export const getCatImage = async ({ fact }) => {
  const threeFirstWords = fact.split(" ", 3).join(" ");

  const res = await fetch(
    `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
  );
  const response = await res.json();
  const { url } = response;
  return url;
};
