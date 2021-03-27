// Components
import { Books } from '../components/Books';
import { Author } from '../components/Author';
import { Available } from '../components/Available';
import { Depositions } from '../components/Depositions';
import { Contact } from '../components/Contact';
import { Map } from '../components/Map';
import { Footer } from '../components/Footer';
// Context
import { CarousellProvider } from '../context/CarousellContext';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>wlassalivros</title>
      </Head>
      <CarousellProvider>
        <Books />
        <Author />
        <Available />
        <Depositions />
        <Contact />
        <Map />
        <Footer />
      </CarousellProvider>
    </>
  );
}
