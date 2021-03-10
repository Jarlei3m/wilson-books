import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/NavBarContainer.module.css';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function NavBar() {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.pageLinks}>
          <li>
            <ul>
              <Link href='/'>Home</Link>
            </ul>
            <ul>
              <Link href='/autor'>Autor</Link>
            </ul>
            <ul>
              <Link href='/livros'>Livros</Link>
            </ul>
            <ul>
              <Link href='/depoimentos'>Depoimentos</Link>
            </ul>
            <ul>
              <Link href='/contato'>Contato</Link>
            </ul>
          </li>
        </div>
        <div className={styles.socialLinks}>
          <li>
            <ul>
              <a
                target='_blank'
                href='https://www.facebook.com/profile.php?id=100011729761575'
              >
                <FaFacebook />
              </a>
            </ul>
            <ul>
              <a target='_blank' href='https://www.instagram.com/tlassarote'>
                <FaInstagram />
              </a>
            </ul>
            <ul>
              <a target='_blank' href='/contato'>
                <FaWhatsapp />
              </a>
            </ul>
          </li>
        </div>
      </nav>
    </header>
  );
}
