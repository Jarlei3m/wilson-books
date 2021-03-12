import React from 'react';
import styles from '../styles/components/AuthorAbout.module.css';

export function AuthorAbout() {
  return (
    <article className={styles.aboutContainer}>
      <h1>Sobre mim</h1>
      <div className={styles.underline}></div>
      <div>
        <p>
          Wilson L.T. Lassarote nasci em 1966 numa pequena cidade do interior do
          Rio de Janeiro chamada Valença. Sou médico cardiologista e escritor.
          Atualmente com 3 livros publicados. ​<br />
          <br />
          Como autor, acredito que um livro deve deixar marcas e ser agente de
          transformação e reflexão: "Se você terminou a leitura de um livro da
          mesma forma que entrou, você perdeu seu tempo ou no máximo teve um
          passatempo nas mãos".
        </p>
      </div>
    </article>
  );
}
