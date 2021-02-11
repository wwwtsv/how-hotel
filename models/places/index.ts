import { createEffect, createStore } from 'effector-next';
import { PlacesSuggestions } from '@domain/places';
import { Query } from '@domain/fetch';
import { searchPlaces } from '@api/fetch';
import { create } from 'domain';
import { InitialState } from './types';

const getPlaceList = createEffect<Query, PlacesSuggestions>({
  name: 'GetPlaceList',
  handler: async (query) => {
    const getHotelList = await searchPlaces(query);
    return getHotelList.json();
  },
});

const getPlaceDetails = createEffect();

const initialState: InitialState = {
  places: null,
};

const $store = createStore(initialState).on(getPlaceList.doneData, (state, places) => ({
  ...state,
  places,
}));

export { $store, getPlaceList };
