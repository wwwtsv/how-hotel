import Head from 'next/head';
import { debounce } from 'lodash';
import Searcher from '@components/searcher';
import { useEvent, useStore } from 'effector-react';
import { $store, getPlaceList } from '@models/places';
import PlaceList from '@components/place-list';

export default function Home() {
  const store = useStore($store);
  const loading = useStore(getPlaceList.pending);
  const inputEventHandler = debounce(useEvent(getPlaceList), 1000);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searcher onInput={(e) => inputEventHandler({ query: { query: e.currentTarget.value } })} />
      <PlaceList loading={loading} places={store.suggestions?.suggestions} />
    </div>
  );
}
