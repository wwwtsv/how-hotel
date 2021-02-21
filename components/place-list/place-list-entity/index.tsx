import { FC } from 'react';
import { PlaceInfo } from '@domain/places';
import Typography from '@base-components/typography';

interface Props {
  entity: PlaceInfo;
}

const PlaceListEntity: FC<Props> = ({ entity }) => {
  return (
    <div>
      <Typography type="Paragraph" fontSize="14px">
        {entity.geoId}
      </Typography>
      <Typography type="Paragraph" fontSize="14px">
        {entity.caption}
      </Typography>
      <Typography type="Paragraph" fontSize="14px">
        {entity.destinationId}
      </Typography>
      <Typography type="Paragraph" fontSize="14px">
        {entity.name}
      </Typography>
      <Typography type="Paragraph" fontSize="14px">
        {entity.type}
      </Typography>
      <Typography type="Paragraph" fontSize="14px">
        {entity.latitude}
      </Typography>
      <Typography type="Paragraph" fontSize="14px">
        {entity.longitude}
      </Typography>
    </div>
  );
};

export default PlaceListEntity;
