import Head from 'next/head';
import { debounce } from 'lodash';
import Searcher from '@components/searcher';
import { useEvent, useStore } from 'effector-react';
import { $store, getPlaceList } from '@models/places';
import { $theme } from '@models/theme';
import PlaceList from '@components/place-list';
import Layout from '@components/layout';
import { InitialState } from '@models/places/types';
import { ThemeProvider } from 'styled-components';

export default function Home({ initData }: { initData: InitialState }) {
  const store = useStore($store);
  const theme = useStore($theme);

  const loading = useStore(getPlaceList.pending);
  const inputEventHandler = debounce(useEvent(getPlaceList), 1000);

  return (
    <div>
      <Head>
        <title>Next app with styled-components and typescript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Searcher onInput={(e) => inputEventHandler({ query: e.currentTarget.value })} />
          <PlaceList
            loading={loading}
            places={store.places?.suggestions || initData.places?.suggestions}
          />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export async function getStaticProps() {
  await getPlaceList({ query: 'new york' });
  const initData = $store.getState();

  return {
    props: {
      initData,
    },
    revalidate: 2,
  };
}
