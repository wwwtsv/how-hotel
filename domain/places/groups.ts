export type PlaceGroup = keyof typeof PlaceGroups;
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
