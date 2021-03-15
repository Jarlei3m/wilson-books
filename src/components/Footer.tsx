import React from 'react';
import styles from '../styles/components/Footer.module.css';

import { HiOutlineMail, HiPhone } from 'react-icons/hi';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>© 2021 Wilson Lassarote - Todos os direitos reservados </p>

      <div>
        <a href='tel: +5524999616398'>
          <HiPhone /> 24 999616398
        </a>
        <a href='mailto:wltlassa@bol.com.br'>
          <HiOutlineMail /> wltlassa@bol.com.br
        </a>
      </div>
    </footer>
  );
}
