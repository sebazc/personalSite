import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
// import 'bootstrap';
// import { Dropdown } from 'bootstrap';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
