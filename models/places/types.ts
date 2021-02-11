import { PlacesSuggestions } from '@domain/places';

export interface InitialState {
  places: PlacesSuggestions | null;
}
