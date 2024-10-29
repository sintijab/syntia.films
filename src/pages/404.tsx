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
        Page not found
      </main>
    </>
  );
}
