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
        <img src="./profile.avif" height='652px' className={styles.img} alt="Portrait of Sintija Birgele" />
        <div className={styles.description}>
          <h2 className={styles.h2}>Living a Dream</h2>
          <p className={styles.quote}>I have always had a camera on a side as I am lead to extraordinary people and places in my life to document those unique encounters.</p>
          <p>I have built a successful career as a software engineer while investing my skills in video editing, movement direction and filmmaking. Now I am starting my business aiming for more collaborations in film production.</p>
          <p></p>
        </div>
      </main>
    </>
  );
}
