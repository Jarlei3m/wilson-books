import React from 'react';
import styles from '../styles/components/Map.module.css';

export function Map() {
  return (
    <section className={styles.mapContainer}>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6549690272823!2d-44.10869668449026!3d-22.517124929744657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e986d75b8edb5%3A0xf88d0d04b6ca215e!2sCardiocentro!5e0!3m2!1spt-BR!2sbr!4v1615558473853!5m2!1spt-BR!2sbr'></iframe>
    </section>
  );
}
