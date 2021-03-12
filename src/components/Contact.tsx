import React from 'react';
import styles from '../styles/components/Contact.module.css';

export function Contact() {
  return (
    <section className={styles.contactContainer}>
      <h1>Gostaria de retirar pessoalmente?</h1>
      <div className={styles.underline}></div>
      <p>Como me encontrar</p>

      <div className={styles.info}>
        <article>
          <h4>Quando</h4>
          <p>
            Agendar horário através do direct no instagram{' '}
            <a target='_blank' href='https://www.instagram.com/tlassarote'>
              <img src='./instagram-logo.png' alt='instagram' />
            </a>
          </p>
        </article>

        <div className={styles.verticalLine}></div>

        <article>
          <h4>Onde</h4>
          <address>
            Cardiocentro, Edifício Cecisa I - Rua 14, 26 - 813 - Vila Santa
            Cecília, Volta Redonda - RJ, 27260-180
          </address>
        </article>
      </div>
    </section>
  );
}
