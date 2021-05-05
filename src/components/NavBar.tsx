import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from '../styles/components/NavBarContainer.module.css';

export function NavBar() {
  const [pageSection, setPageSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasNavMenu, setHasNavMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const handleScroll = () => {
    const pageSection = Math.floor(window.scrollY / (window.innerHeight - 36));
    setPageSection(pageSection);
    if (window.scrollY > 15) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const handleResize = () => {
    const newSize = window.innerWidth;
    if (newSize < 426) {
      setHasNavMenu(true);
    } else {
      setHasNavMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('load', handleResize);
  });

  return (
    <>
      {hasNavMenu ? (
        <header
          className={
            isScrolling
              ? `${styles.navMenuContainer} ${styles.showMenuBG}`
              : `${styles.navMenuContainer}`
          }
        >
          <div className={styles.socialLinks}>
            <ul>
              <li>
                <a
                  target='_blank'
                  href='https://www.facebook.com/profile.php?id=100011729761575'
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a target='_blank' href='https://www.instagram.com/tlassarote'>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://api.whatsapp.com/send?1=pt_BR&phone=5524999616398
    &text=Olá Wilson, tenho interesse no seu Livro. Vamos conversar?'
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href='mailto:wltlassa@bol.com.br'>
                  <HiOutlineMail />
                </a>
              </li>
            </ul>
          </div>
          <nav
            className={
              isModalOpen
                ? `${styles.navMenu} ${styles.close}`
                : `${styles.navMenu}`
            }
            onClick={() => handleModal()}
          >
            <div className={styles.btnLine}></div>
            <div className={styles.btnLine}></div>
            <div className={styles.btnLine}></div>
          </nav>
          <div
            className={
              isModalOpen
                ? `${styles.menuModal} ${styles.open}`
                : `${styles.menuModal}`
            }
          >
            <div className={styles.pageLinks}>
              <ul>
                <li className={pageSection === 0 ? `${styles.active}` : null}>
                  <Link href='/#home' replace>
                    Home
                  </Link>
                </li>
                <li className={pageSection === 1 ? `${styles.active}` : null}>
                  <Link href='/#autor' replace>
                    Autor
                  </Link>
                </li>
                <li className={pageSection === 2 ? `${styles.active}` : null}>
                  <Link href='/#livros' replace>
                    Livros
                  </Link>
                </li>
                <li className={pageSection === 3 ? `${styles.active}` : null}>
                  <Link href='/#depoimentos' replace>
                    Depoimentos
                  </Link>
                </li>
                <li className={pageSection > 3 ? `${styles.active}` : null}>
                  <Link href='/#contato' replace>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      ) : (
        <header className={styles.navbarContainer}>
          <nav className={styles.navbar}>
            <div className={styles.pageLinks}>
              <ul>
                <li className={pageSection === 0 ? `${styles.active}` : null}>
                  <Link href='/#home' replace>
                    Home
                  </Link>
                </li>
                <li className={pageSection === 1 ? `${styles.active}` : null}>
                  <Link href='/#autor' replace>
                    Autor
                  </Link>
                </li>
                <li className={pageSection === 2 ? `${styles.active}` : null}>
                  <Link href='/#livros' replace>
                    Livros
                  </Link>
                </li>
                <li className={pageSection === 3 ? `${styles.active}` : null}>
                  <Link href='/#depoimentos' replace>
                    Depoimentos
                  </Link>
                </li>
                <li className={pageSection > 3 ? `${styles.active}` : null}>
                  <Link href='/#contato' replace>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.socialLinks}>
              <ul>
                <li>
                  <a
                    target='_blank'
                    href='https://www.facebook.com/profile.php?id=100011729761575'
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.instagram.com/tlassarote'
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://api.whatsapp.com/send?1=pt_BR&phone=5524999616398
    &text=Olá Wilson, tenho interesse no seu Livro. Vamos conversar?'
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href='mailto:wltlassa@bol.com.br'>
                    <HiOutlineMail />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      )}
    </>
  );
}
