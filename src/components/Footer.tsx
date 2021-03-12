import React from 'react';
import styles from '../styles/components/Footer.module.css';

import { HiOutlineMail, HiPhone } from 'react-icons/hi';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>© 2021 Wilson Lassarote - Todos os direitos reservados </p>

      <div>
        <span>
          <HiPhone /> 24 999616398
        </span>
        <span>
          <HiOutlineMail /> wltlassa@bol.com.br
        </span>
      </div>
    </footer>
  );
}
