import { createEffect } from 'effector-next';
import { PlacesSuggestions } from '@domain/places';
import { Query } from '@domain/fetch';
import { searchPoints } from '@api/fetch';

const getHotelsList = createEffect(
  async (query: Query): Promise<PlacesSuggestions> => {
    const hotelsList = await searchPoints(query);
    return hotelsList;
  },
);
