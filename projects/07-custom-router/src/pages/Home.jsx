import { Link } from "../components/Link.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      {/* <a href="/about">Ir a Sobre nosotros</a> */}
      <Link to="/about">Ir a Sobre nosotros</Link>
    </>
  );
}
