import { PlaceGroups, PlaceType } from '@domain/places/groups';

export interface PlaceGroup {
  group: PlaceGroups;
  entities: PlaceInfo[];
}

export interface PlaceInfo {
  geoId: string;
  destinationId: string;
  landmarkCityDestinationId: null;
  type: PlaceType;
  caption: string;
  redirectPage: string;
  latitude: number;
  longitude: number;
  name: string;
}

type SearchTerm = string;

export interface PlacesSuggestions {
  term: SearchTerm;
  moresuggestions: number;
  autoSuggestInstance: null;
  trackingID: string;
  misspellingfallback: false;
  suggestions: PlaceGroup[];
}

type PlaceDetailsStatus = string;

export interface PlaceDetails {
  status: PlaceDetailsStatus;
}
