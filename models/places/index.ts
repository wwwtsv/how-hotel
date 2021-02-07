import { createEffect, createStore } from 'effector-next';
import { PlacesSuggestions } from '@domain/places';
import { Query } from '@domain/fetch';
import { searchPlaces } from '@api/fetch';
import { InitialState } from './types';

const getPlaceList = createEffect<{ query: Query }, PlacesSuggestions>({
  name: 'GetPlaceList',
  handler: async ({ query }) => {
    const getHotelList = await searchPlaces(query);
    return getHotelList.json();
  },
});

const initialState: InitialState = {
  suggestions: null,
};

const $store = createStore(initialState).on(getPlaceList.doneData, (state, suggestions) => ({
  ...state,
  suggestions,
}));

export { $store, getPlaceList };
