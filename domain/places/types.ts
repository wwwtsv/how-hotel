import { PlaceGroup, PlaceType } from '@domain/places/groups';

export interface PlaceGroups {
  group: PlaceGroup;
  entities: Array<PlaceInfo>;
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
  suggestion: Array<PlaceGroups[]>;
}
