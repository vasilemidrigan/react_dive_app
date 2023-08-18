import Profile from "./Profile";

export default function Gallery(props) {
  return (
    <div className="wrapper">
      <section>
        <h1>Amazing {props.term}</h1>

        <Profile />
      </section>
    </div>
  );
}
