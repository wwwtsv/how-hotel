export type PlaceGroupsChild = keyof typeof PlaceGroups;
export enum PlaceGroups {
  CityGroup = 'CITY_GROUP',
  LandmarkGroup = 'LANDMARK_GROUP',
  TransportGroup = 'TRANSPORT_GROUP',
  HotelGroup = 'HOTEL_GROUP',
}

export type PlaceType = keyof typeof PlaceTypes;
export enum PlaceTypes {
  Hotel = 'HOTEL',
  AirPort = 'AIRPORT',
  LandMark = 'LANDMARK',
  Neighborhood = 'NEIGHBORHOOD',
  Region = 'REGION',
  City = 'CITY',
}

export const groupIdentifier = (group: PlaceGroups): string => {
  switch (group) {
    case PlaceGroups.CityGroup: {
      return 'Cities';
    }
    case PlaceGroups.HotelGroup: {
      return 'Hotels';
    }
    case PlaceGroups.LandmarkGroup: {
      return 'Landmarks';
    }
    case PlaceGroups.TransportGroup: {
      return 'Transport';
    }
    default: {
      return '';
    }
  }
};
