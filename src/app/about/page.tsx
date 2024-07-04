import Head from 'next/head'
import Table from '../components/Table'
export default function AboutMePage() {
  return (
    <div>
      <Head>
        <title>About me page</title>
        <meta name="description"
            content="This is the about me page of my portfolio website" />
      </Head>
      <Table
        heading="About me"
        inside="Hello! My name is Arina. I live in Russia. I'm a bachelor data science and artificial intelligence student at Innopolis University.
                  I love learning new things!"
      />
    </div>
  )
}
