import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className={`${styles.footer} align-middle items-center justify-center justify-items-center`}
    >
      <a
        href='https://hayatadestek.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{" "}
        <Image
          src='/img/hayatadestek-logo-yatay-60p.svg'
          className='justify-self-center'
          width={120}
          height={29.5}
        />
      </a>
    </footer>
  );
}

export default Footer;
