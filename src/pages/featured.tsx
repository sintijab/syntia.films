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
        <img src="./eden.avif" height='552px' className={styles.img} alt="B12 festival at EDEN studios in Berlin, Germany" />
        <div className={styles.description_narrow}>
          <h2 className={styles.h2}>Summer residency at eden</h2>
          <p className={styles.quote}>Creative process in filmmaking is dynamic and orchestrated by talent in the team. I learned so much from the creative synergy just in one month.</p>
          <p>b12 summer intensive workshops enriched my dance technique and film direction. I developed skills in storytelling, scriptwriting and cinematography for dance filmmaking.</p>
          <p>Throughout the workshops I worked with professional dancers in collaboration with b12 - festival for contemporary dance and performance art.</p>
          <p>The workshop &quot;Framing Motion&quot; was held in supervision of filmmaker and educator Chrysanthi Badeka. By the end of the workshops a short film 4min was produced in format of video dance for b12 festival.</p>
        </div>
      </main>
    </>
  );
}
