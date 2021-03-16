import React, { useEffect, useState } from 'react';
import data from '../../books.json';
import styles from '../styles/components/BooksContainer.module.css';

export function Books() {
  const [books, setBooks] = useState([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setBooks(data);
  }, []);

  useEffect(() => {
    const lastPosition = books.length;
    if (position < 0) {
      setPosition(lastPosition);
    }
    if (position === lastPosition) {
      setPosition(0);
    }
  }, [position, books]);

  useEffect(() => {
    let carousell = setInterval(() => {
      setPosition(position + 1);
    }, 6000);

    return () => clearInterval(carousell);
  }, [position]);

  return (
    <section id='home' className={styles.container}>
      <div className={styles.booksContainer}>
        {books.map((book, bookIndex) => {
          const { image, title, author, description, link } = book;
          return (
            <div
              key={bookIndex}
              className={
                bookIndex === position
                  ? `${styles.book} ${styles.activeSlide}`
                  : bookIndex === position - 1 ||
                    (position === 0 && bookIndex === books.length - 1)
                  ? `${styles.book} ${styles.prevSlide}`
                  : `${styles.book} ${styles.nextSlide}`
              }
            >
              <img src={image} alt='' />
              <article className={styles.descriptionContainer}>
                <div>
                  <h1>{title}</h1>
                  <small>por {author}</small>
                </div>
                <div>
                  <p>{description}</p>
                  <a target='_blank' href={link}>
                    <button>Comprar agora</button>
                  </a>
                </div>
              </article>
            </div>
          );
        })}
        <nav className={styles.carousellBtns}>
          <div
            className={position === 0 ? `${styles.btnActive}` : null}
            onClick={() => setPosition(0)}
          ></div>
          <div
            className={position === 1 ? `${styles.btnActive}` : null}
            onClick={() => setPosition(1)}
          ></div>
          <div
            className={position === 2 ? `${styles.btnActive}` : null}
            onClick={() => setPosition(2)}
          ></div>
        </nav>
      </div>
    </section>
  );
}
