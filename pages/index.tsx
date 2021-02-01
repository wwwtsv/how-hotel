import Head from 'next/head';
import Searcher from '@components/searcher';

export default function Home() {
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
