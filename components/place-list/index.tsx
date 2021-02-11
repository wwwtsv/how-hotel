import { FC } from 'react';
import Loading from '@base-components/loading';
import { PlaceGroup } from '@domain/places';
import PlaceListGroup from '@components/place-list/place-list-group';

interface Props {
  loading: boolean;
  places?: Array<PlaceGroup>;
}

const PlaceList: FC<Props> = ({ loading, places }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {places?.map((placeGroup, i) => (
        <PlaceListGroup key={i} placeGroup={placeGroup} />
      ))}
    </div>
  );
};

export default PlaceList;
