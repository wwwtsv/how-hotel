import { createEffect, createStore } from 'effector-next';
import { PlacesSuggestions } from '@domain/places';
import { Query } from '@domain/fetch';
import { searchPoints } from '@api/fetch';
import { InitialState } from './types';

const getPointList = createEffect<{ query: Query }, PlacesSuggestions>({
  name: 'GetPointList',
  handler: async ({ query }) => {
    const getHotelList = await searchPoints(query);
    return getHotelList.json();
  },
});

const initialState: InitialState = {
  suggestions: null,
};

const $store = createStore(initialState).on(getPointList.doneData, (state, suggestions) => ({
  ...state,
  suggestions,
}));

export { $store, getPointList };
