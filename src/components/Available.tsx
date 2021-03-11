import React, { useState } from 'react';
import styles from '../styles/components/Available.module.css';
import books from '../../books.json';
import { AiOutlineClose } from 'react-icons/ai';

export function Available() {
  const [modal, setModal] = useState();

  function handleModal(bookId) {
    console.log(bookId);
    setModal(bookId);
  }

  return (
    <section className={styles.availableContainer}>
      <article>
        <h1>Livros disponíveis para compra imediata</h1>
        <div className={styles.underline}></div>

        <div className={styles.bookContainer}>
          {books.map((book) => {
            const {
              id,
              smallTitle,
              smallImage,
              image,
              link,
              price,
              postface,
            } = book;
            return (
              <div key={id} className={styles.book}>
                <a>
                  <img
                    src={smallImage}
                    alt={smallTitle}
                    onClick={() => handleModal(id)}
                  />
                </a>
                <div>
                  <h3>{smallTitle}</h3>
                  <span>R$ {price},00</span>
                  <a target='_blank' href={link}>
                    <button>Comprar agora</button>
                  </a>
                </div>

                <div
                  className={
                    modal === id
                      ? `${styles.modal} ${styles.active}`
                      : `${styles.modal}`
                  }
                >
                  <article className={styles.postface}>
                    <img src={image} alt={smallTitle} />
                    <p>
                      {postface.split('<br />').map((item, index) => {
                        return (
                          <p key={index}>
                            {item}
                            <br />
                            <br />
                          </p>
                        );
                      })}
                    </p>
                    <AiOutlineClose onClick={() => handleModal(null)} />
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
