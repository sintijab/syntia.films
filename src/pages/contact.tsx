import Head from "next/head";
import styles from "@/styles/About.module.css";

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
        <img src="./contact.avif" height='552px' className={styles.img} alt="B12 festival at EDEN studios in Berlin, Germany" />
        <div className={styles.description_narrow}>
          <h2 className={styles.h2}>Love above all</h2>
          <p className={`${styles.quote} ${styles.quote__small}`}>Love affects more than our thinking and our behavior toward those we love. It transforms our entire life. <span className={styles.line_break}> Genuine love is a personal revolution. Love takes your ideas, your desires, and your actions and welds them together in one experience and one living reality which is a new you.</span></p>
          <p>Excerpt from my writings &quot;<a href="https://syntia.org/en/weekender/the-power-of-love/">The Power of Love</a>&quot;.</p>
          <p>All I do is for the love of my life and for the love of the others.</p>
        </div>
      </main>
    </>
  );
}
