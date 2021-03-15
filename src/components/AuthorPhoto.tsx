import React from 'react';
import styles from '../styles/components/AuthorPhoto.module.css';

export function AuthorPhoto() {
  return (
    <div className={styles.photoContainer}>
      {/* <img
        src='https://static.wixstatic.com/media/a5415c_4ebc884959c24e4c8fed1ad01c8b3dea~mv2.jpg/v1/fill/w_832,h_777,al_c,q_85,usm_0.66_1.00_0.01/a5415c_4ebc884959c24e4c8fed1ad01c8b3dea~mv2.webp'
        alt='Willson Lassarote'
      /> */}
      <img src='./wilson.jpg' alt='wilson' />
    </div>
  );
}
