import Head from "next/head";
import styles from "@/styles/Blog.module.css";

export default function Films() {
  return (
    <>
      <Head>
        <title>Syntia films</title>
        <meta name="description" content="Syntia's film portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page}>
        <a href="https://vimeo.com/1021601497" target="_blank" rel="noopener noreferrer" className={styles.preview}>
          <img src="/gruess_gott.avif" alt="gruess gott film trailer" />
          <div className={styles.film_title}>Grüß Gott</div>
          <small className={styles.film_title}>documentary / 8min / Germany</small>
        </a>
        <a href="https://youtu.be/EWFiCvjYKio" target="_blank" rel="noopener noreferrer" className={styles.preview}>
          <img src="/teaser.avif" alt="CO-FUN service platform teaser" />
          <div className={styles.film_title}>Intro Teaser</div>
          <small className={styles.film_title}>commercials / 1min / Germany</small>
        </a>
        <a href="./featured" target="_blank" rel="noopener noreferrer" className={styles.preview}>
          <img src="/threshold.avif" alt="ON THE THRESHOLD film reference" />
          <div className={styles.film_title}>ON THE THRESHOLD</div>
          <small className={styles.film_title}>dance film / 4min / Germany</small>
        </a>
        <a href="https://youtu.be/_yXPWAAxLlM" target="_blank" rel="noopener noreferrer" className={styles.preview}>
          <img src="/reverse.avif" alt="REVERSING AGING film trailer" />
          <div className={styles.film_title}>REVERSING AGING</div>
          <small className={styles.film_title}>dance film / 6min / Germany</small>
        </a>
        <a href="https://youtu.be/EZEOSj25xMY?feature=shared" target="_blank" rel="noopener noreferrer" className={styles.preview}>
          <img src="/interview_cover.avif" alt="Independence of Mind, interview with Sintija Birgele" />
          <div className={styles.film_title}>Independence of Mind</div>
          <small className={styles.film_title}>interview / 4min / Germany</small>
        </a>
        <a href="https://youtu.be/5HRvhBgtm38?feature=shared" target="_blank" rel="noopener noreferrer" className={styles.preview}>
          <img src="/landmark_cover.avif" alt="Landmark of the body film trailer" />
          <div className={styles.film_title}>Landmark of the Body</div>
          <small className={styles.film_title}>dance film / 4min / Germany</small>
        </a>
      </main>
    </>
  );
}
