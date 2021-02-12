export type SearchTerm = string;

export type PlaceDetailsStatus = string;

export type PlaceFeature = string;

export interface PlaceCoordinates {
  latitude: number;
  longitude: number;
}

export interface PlaceLocation {
  coordinates: PlaceCoordinates;
  resolvedLocation: string;
  locationName: string;
}
