import React, { FC } from 'react';
import { TitleH1 } from '@base-components/title';
import PlaceListEntity from '@components/place-list/place-list-entity';
import { PlaceGroup } from '@domain/places';
import { groupIdentifier } from '@domain/places/groups';

interface Props {
  placeGroup: PlaceGroup;
}

const PlaceListGroup: FC<Props> = ({ placeGroup }) => {
  return (
    <div>
      <TitleH1>{groupIdentifier(placeGroup.group)}</TitleH1>
      {placeGroup.entities.map((entity) => {
        return <PlaceListEntity entity={entity} />;
      })}
    </div>
  );
};

export default PlaceListGroup;
