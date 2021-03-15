import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from '../styles/components/NavBarContainer.module.css';

export function NavBar() {
  const [pageSection, setPageSection] = useState(0);

  const handleScroll = () => {
    const pageSection = Math.floor(window.scrollY / (window.innerHeight - 36));
    setPageSection(pageSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.pageLinks}>
          <li>
            <ul className={pageSection === 0 ? `${styles.active}` : null}>
              <Link href='/#home' replace>
                Home
              </Link>
            </ul>
            <ul className={pageSection === 1 ? `${styles.active}` : null}>
              <Link href='/#autor' replace>
                Autor
              </Link>
            </ul>
            <ul className={pageSection === 2 ? `${styles.active}` : null}>
              <Link href='/#livros' replace>
                Livros
              </Link>
            </ul>
            <ul className={pageSection === 3 ? `${styles.active}` : null}>
              <Link href='/#depoimentos' replace>
                Depoimentos
              </Link>
            </ul>
            <ul className={pageSection > 3 ? `${styles.active}` : null}>
              <Link href='/#contato' replace>
                Contato
              </Link>
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
              <a
                target='_blank'
                href='https://api.whatsapp.com/send?1=pt_BR&phone=5524999616398
&text=Olá Wilson, tenho interesse no seu Livro. Vamos conversar?'
              >
                <FaWhatsapp />
              </a>
            </ul>
            <ul>
              <a href='mailto:wltlassa@bol.com.br'>
                <HiOutlineMail />
              </a>
            </ul>
          </li>
        </div>
      </nav>
    </header>
  );
}
