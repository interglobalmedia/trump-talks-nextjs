import Head from 'next/head'
import { useRouter } from 'next/router'

export default function HomePage({ random }) {
  const router = useRouter()

  const pageReloadHandler = () => {
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>Trump Talks</title>
        <meta name="description" content="Trump Talks Trash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <section className="container">
        <article className="quotes">
            <ul key={random.message} className="quote-data" >
              <h1 className="main-heading">Trump Talks</h1>
              <li>{random.message}</li>
          </ul>
          <button className="button" onClick={pageReloadHandler}>Next Quote</button>
        </article>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://api.whatdoestrumpthink.com/api/v1/quotes/random`);

  const random = await res.json();
  console.log(random)

  return {
    props: {
      random,
    },
  }
}
