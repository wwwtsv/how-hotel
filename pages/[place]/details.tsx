export default function PlaceDetails() {
  return <div>Hello world</div>;
}

export async function getServerSideProps() {
  return {
    props: {
      place: 1,
    },
  };
}
