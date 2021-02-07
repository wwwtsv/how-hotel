import React, { FC } from 'react';
import { PlaceInfo } from '@domain/places';

interface Props {
  entity: PlaceInfo;
}

const PlaceListEntity: FC<Props> = ({ entity }) => {
  return (
    <div>
      <div>{entity.geoId}</div>
      <div>{entity.caption}</div>
      <div>{entity.destinationId}</div>
      <div>{entity.name}</div>
      <div>{entity.type}</div>
      <div>{entity.latitude}</div>
      <div>{entity.longitude}</div>
    </div>
  );
};

export default PlaceListEntity;
