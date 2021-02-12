import { PlaceGroups, PlaceType, SearchTerm } from '@domain/places/index';

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

export interface PlacesSuggestions {
  term: SearchTerm;
  moresuggestions: number;
  autoSuggestInstance: null;
  trackingID: string;
  misspellingfallback: false;
  suggestions: PlaceGroup[];
}
