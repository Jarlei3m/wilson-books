import React from 'react';
import styles from '../styles/components/AuthorContainer.module.css';
import { AuthorPhoto } from './AuthorPhoto';
import { AuthorAbout } from './AuthorAbout';

export function Author() {
  return (
    <section id='autor' className={styles.AuthorContainer}>
      <AuthorPhoto />
      <AuthorAbout />
    </section>
  );
}
