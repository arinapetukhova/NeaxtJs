import Comic from '../components/Comic'
import Head from 'next/head';

export default function ComicPage() {
  return (
    <div>
      <Head>
        <title>Comic page</title>
        <meta name="description"
            content="This is the comic page of my portfolio website" />
      </Head>
      <Comic />
    </div>
);
}
