import Head from 'next/head';
import Searcher from '@components/searcher';
import { useStore } from 'effector-react';
import { $store } from '@models/points';

export default function Home() {
  const store = useStore($store);
  const handleClick = () => {};
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searcher />
    </div>
  );
}
