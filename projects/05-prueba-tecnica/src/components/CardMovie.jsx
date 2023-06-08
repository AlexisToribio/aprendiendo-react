export function CardMovie({ title, type, year, poster }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{type}</p>
      <p>{year}</p>
      <img src={poster} alt={title} />
    </li>
  );
}
