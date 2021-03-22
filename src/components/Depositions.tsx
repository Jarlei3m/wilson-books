import React, { useContext } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CarousellContext } from '../context/CarousellContext';
import styles from '../styles/components/Depositions.module.css';

export function Depositions() {
  const { depositions, handleDeposPosition, deposPosition } = useContext(
    CarousellContext
  );

  return (
    <section id='depoimentos' className={styles.container}>
      <header>
        <h1>Depoimentos</h1>
        <div className={styles.underline}></div>
      </header>
      <article className={styles.depositions}>
        {depositions.map((depo, depoIndex) => {
          const { message, name, date, id } = depo;

          return (
            <div
              className={
                depoIndex === deposPosition
                  ? `${styles.deposition} ${styles.activeSlide}`
                  : depoIndex === deposPosition - 1 ||
                    (deposPosition === 0 &&
                      depoIndex === depositions.length - 1)
                  ? `${styles.deposition} ${styles.prevSlide}`
                  : `${styles.deposition} ${styles.nextSlide}`
              }
              key={id}
            >
              <p>{message}</p>
              <div className={styles.depoUnderline}></div>
              <div className={styles.reader}>
                <p>{name},</p>
                <span>{date}</span>
              </div>
            </div>
          );
        })}
      </article>

      <nav className={styles.carousellBtns}>
        <div
          className={deposPosition === 0 ? `${styles.btnActive}` : null}
          onClick={() => handleDeposPosition(0)}
        ></div>
        <div
          className={deposPosition === 1 ? `${styles.btnActive}` : null}
          onClick={() => handleDeposPosition(1)}
        ></div>
        <div
          className={deposPosition === 2 ? `${styles.btnActive}` : null}
          onClick={() => handleDeposPosition(2)}
        ></div>
      </nav>

      <div className={styles.arrowRight}>
        <RiArrowRightSLine
          onClick={() => handleDeposPosition(deposPosition + 1)}
        />
      </div>
      <div className={styles.arrowLeft}>
        <RiArrowLeftSLine
          onClick={() => handleDeposPosition(deposPosition - 1)}
        />
      </div>
    </section>
  );
}
