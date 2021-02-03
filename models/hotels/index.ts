import { createEffect } from 'effector-next';
import { getList } from '@api/fetch';

const getHotelsList = createEffect((query: string) => getList(query).then((res) => res.json()));
