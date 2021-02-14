import { useEffect } from 'react';
import { useEvent } from 'effector-react';
import { getPlaceDetails } from '@models/places';

export default function PlaceDetails() {
  const getDetails = useEvent(getPlaceDetails);
  useEffect(() => {
    getDetails({ id: '424023' });
  });

  return <div>Hello world</div>;
}

export async function getServerSideProps() {
  return {
    props: {
      place: 1,
    },
  };
}
