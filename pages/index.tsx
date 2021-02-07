import Head from 'next/head';
import { debounce } from 'lodash';
import Searcher from '@components/searcher';
import { useEvent, useStore } from 'effector-react';
import { $store, getPointList } from '@models/points';

export default function Home() {
  const store = useStore($store);
  const inputEventHandler = debounce(useEvent(getPointList), 1000);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searcher onInput={(e) => inputEventHandler(e)} />
    </div>
  );
}
