import { PlacesSuggestions } from '@domain/places';

export interface InitialState {
  suggestions: PlacesSuggestions | null;
}
