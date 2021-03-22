import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Available.module.css';
import data from '../../books.json';
import { AiOutlineClose } from 'react-icons/ai';

interface Books {
  id: number;
  smallTitle: string;
  smallImage: string;
  image: string;
  link: string;
  price: string;
  postface: string;
}

export function Available() {
  const [modal, setModal] = useState(0);
  const [books, setBooks] = useState<Books[]>([]);

  function handleModal(bookId: number) {
    setModal(bookId);
  }

  useEffect(() => {
    setBooks(data);
  });

  return (
    <section id='livros' className={styles.availableContainer}>
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
                  <span>R$ {price} + frete</span>
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
                    <div>
                      {postface.split('<br />').map((item, index) => {
                        return (
                          <p key={index}>
                            {item}
                            <br />
                            <br />
                          </p>
                        );
                      })}
                    </div>
                    <AiOutlineClose onClick={() => handleModal(0)} />
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
