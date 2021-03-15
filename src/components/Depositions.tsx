import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Depositions.module.css';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import data from '../../depositions.json';

export function Depositions() {
  const [depositions, setDepositions] = useState(data);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const lastPosition = depositions.length;
    if (position < 0) {
      setPosition(lastPosition);
    }
    if (position === lastPosition) {
      setPosition(0);
    }
  }, [position, depositions]);

  useEffect(() => {
    let carousell = setInterval(() => {
      setPosition(position + 1);
    }, 8000);

    return () => clearInterval(carousell);
  }, [position]);

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
                depoIndex === position
                  ? `${styles.deposition} ${styles.activeSlide}`
                  : depoIndex === position - 1 ||
                    (position === 0 && depoIndex === depositions.length - 1)
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

      <div className={styles.arrowRight}>
        <RiArrowRightSLine onClick={() => setPosition(position + 1)} />
      </div>
      <div className={styles.arrowLeft}>
        <RiArrowLeftSLine onClick={() => setPosition(position - 1)} />
      </div>
    </section>
  );
}
