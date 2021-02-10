import React, { FC } from 'react';
import { TitleH1 } from '@base-components/title';
import GridBlock from '@base-components/grid-block';
import BaseBlock from '@base-components/base-block';
import PlaceListEntity from '@components/place-list/place-list-entity';
import { PlaceGroup } from '@domain/places';
import { groupIdentifier } from '@domain/places/groups';

interface Props {
  placeGroup: PlaceGroup;
}

const PlaceListGroup: FC<Props> = ({ placeGroup }) => {
  return (
    <BaseBlock>
      <TitleH1>{groupIdentifier(placeGroup.group)}</TitleH1>
      <GridBlock>
        {placeGroup.entities.map((entity) => {
          return <PlaceListEntity key={entity.geoId} entity={entity} />;
        })}
      </GridBlock>
    </BaseBlock>
  );
};

export default PlaceListGroup;
