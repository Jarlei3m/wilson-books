import { Books } from '../components/Books';
import { Author } from '../components/Author';
import { Available } from '../components/Available';
import { Depositions } from '../components/Depositions';

export default function Home() {
  return (
    <>
      <Books />
      <Author />
      <Available />
      <Depositions />
    </>
  );
}
