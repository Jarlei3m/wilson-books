import React, { useContext } from 'react';
import { CarousellContext } from '../context/CarousellContext';
import styles from '../styles/components/BooksContainer.module.css';

export function Books() {
  const { books, handleBookPosition, bookPosition } = useContext(
    CarousellContext
  );

  return (
    <section id='home' className={styles.container}>
      <div className={styles.booksContainer}>
        {books.map((book, bookIndex) => {
          const { image, title, author, description, link } = book;
          return (
            <div
              key={bookIndex}
              className={
                bookIndex === bookPosition
                  ? `${styles.book} ${styles.activeSlide}`
                  : bookIndex === bookPosition - 1 ||
                    (bookPosition === 0 && bookIndex === books.length - 1)
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
            className={bookPosition === 0 ? `${styles.btnActive}` : null}
            onClick={() => handleBookPosition(0)}
          ></div>
          <div
            className={bookPosition === 1 ? `${styles.btnActive}` : null}
            onClick={() => handleBookPosition(1)}
          ></div>
          <div
            className={bookPosition === 2 ? `${styles.btnActive}` : null}
            onClick={() => handleBookPosition(2)}
          ></div>
        </nav>
      </div>
      <div className={styles.backgroundHalf}></div>
    </section>
  );
}
