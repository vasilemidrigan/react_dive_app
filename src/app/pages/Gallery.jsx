import Profile from "./Profile";

export default function Gallery(props) {
  return (
    <section>
      <h1>Amazing {props.term}</h1>

      <Profile />
    </section>
  );
}
