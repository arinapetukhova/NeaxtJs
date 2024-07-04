import Table from './components/Table'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Main page</title>
        <meta name="description"
            content="This is the main page of my portfolio website" />
      </Head>
      <Table
        heading="Petuhova Arina Kirillovna"
        inside="This website is my assignment for the Front-end Web Development course for the summer 2024 semester at Innopolis University."
      />
    </div>
  )
}
