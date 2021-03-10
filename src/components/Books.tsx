import React from 'react';
import styles from '../styles/components/BooksContainer.module.css';

export function Books() {
  return (
    <section className={styles.container}>
      <div className={styles.booksContainer}>
        <div className={styles.book}>
          <img
            src='https://static.wixstatic.com/media/a5415c_95fc58e060b14f10acd52ca2f370a942~mv2.jpeg/v1/fill/w_395,h_593,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202020-12-07%20at%2010_57_50_jp.webp'
            alt=''
          />
          <article className={styles.descriptionContainer}>
            <div>
              <h1>
                O mais recente lançamento <br />- A Nova Ordem Do Mal
              </h1>
              <small>por Wilson Lassarote</small>
            </div>
            <div>
              <p>Já disponível para venda!</p>
              <a href=''>
                <button>Comprar agora</button>
              </a>
            </div>
          </article>
        </div>
        <nav className={styles.carousellBtns}>
          <div></div>
          <div></div>
          <div></div>
        </nav>
      </div>
    </section>
  );
}
