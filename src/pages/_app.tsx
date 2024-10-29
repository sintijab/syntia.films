import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isIndex = router.pathname === '/';
  return <>
    <div className={styles.header_col}>
      <div className={styles.header}>
        <h1 className={styles.header_main}>Syntia</h1>
        <h2 className={styles.subheader}>Films</h2>
      </div>
    </div>
    {!isIndex && <nav className={styles.nav}>
      <Link href="/home">home</Link>
      <Link href="/about">about</Link>
      <Link href="/films">films</Link>
      <Link href="/featured">featured</Link>
      <Link href="/contact">contact</Link>
    </nav>}
    <Component {...pageProps} />
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="https://vimeo.com/syntia" target="_blank" rel="noopener noreferrer"><Image width={30} height={30} src="/vimeo_2.avif" alt="vimeo" /></a>
        <a href="https://www.instagram.com/syntia.films" target="_blank" rel="noopener noreferrer"><Image width={30} height={30} src="/ig.avif" alt="instagram" /></a>
        <a href="mailto:syntia.birgele@gmail.com" target="_blank" rel="noopener noreferrer"><Image width={45} height={45} src="/email.avif" alt="email" /></a>
      </div>
      <div className={styles.inline}><Image alt="globe icon" height={16} width={16} src="./globe.svg" /> Available worldwide | Based in Germany</div>
      <small>&copy; Copyright 2024 Sintija Birgele. All Rights Reserved</small>
    </footer>
  </>;
}
