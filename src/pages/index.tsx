import { Books } from '../components/Books';
import { Author } from '../components/Author';
import { Available } from '../components/Available';
import { Depositions } from '../components/Depositions';
import { Contact } from '../components/Contact';
import { Map } from '../components/Map';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Books />
      <Author />
      <Available />
      <Depositions />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}
