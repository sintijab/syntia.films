import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Syntia films</title>
        <meta name="description" content="Syntia's film portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_layout}>
          <div className={styles.main_layout__col}>
            <article className={styles.article}>
              <a href="./featured" className={styles.article_link}>
                <figure className={styles.article_img}>
                  <img src="./eden.avif" height='252px' />
                  <div className={styles.article_category}>
                    <span>featured</span>
                  </div>
                </figure>
                <h2 className={`${styles.article_title} ${styles.article_title__medium} ${styles.article_link}`}>
                  On the Threshold
                </h2>
                <div className={styles.article_excerpt}>
                  <p>In July 2024 I worked in film direction under supervision of Chrysanthi Badeka in practice during B12 festival summer month.</p>
                </div>
              </a>
            </article>
            <article className={styles.article}>
              <a href="https://youtu.be/_yXPWAAxLlM" target="_blank" rel="noopener noreferrer">
                <figure className={styles.article_img}>
                  <img src="./longevity.avif" height='152px' />
                  <div className={styles.article_category}>
                    <span>films</span>
                  </div>
                </figure>
                <h2 className={`${styles.article_title} ${styles.article_title__medium} ${styles.article_link}`}>
                  Key to Longevity
                </h2>
              </a>
            </article>
          </div>
          <div className={styles.main_layout__col}>
            <a href="./about"><article className={styles.article}>
              <figure className={styles.article_img}>
                <img src="./profile.avif" height='652px' />
                <div className={styles.article_text}>
                  <h2 className={`${styles.article_title} ${styles.article_title__medium} ${styles.article_link}`}>
                    Living a Dream
                  </h2>
                  <div className={styles.article_excerpt}>
                    <p>I have always had a camera on a side as I am lead to extraordinary people and places in my life to document those unique encounters...</p>
                  </div>
                </div>
                <div className={styles.article_category}>
                  <span>about</span>
                </div>
              </figure>
            </article></a>
          </div>
          <div className={styles.main_layout__col}>
            <article className={styles.article}>
              <a href="https://youtu.be/5HRvhBgtm38" target="_blank" rel="noopener noreferrer">
                <h2 className={`${styles.article_title} ${styles.article_title__small} ${styles.article_link}`}>
                  Landmark of Body
                </h2>
                <div className={styles.article_excerpt}>
                  <p>I become happier only when I live in a present. Holding on the past or the future for a longevity is attachment to control. But the only way to growth and happiness is to accept and let go of that stability...</p>
                </div>
              </a>
            </article>
            <article className={styles.article}>
              <a href="https://youtu.be/EZEOSj25xMY?feature=shared" target="_blank" rel="noopener noreferrer">
                <figure className={styles.article_img}>
                  <img src="./interview.avif" height='452px' />
                  <div className={styles.article_text}>
                    <h2 className={`${styles.article_title} ${styles.article_title__medium} ${styles.article_link}`}>
                      Independent Mind
                    </h2>
                  </div>
                  <div className={styles.article_category}>
                    <span>interview</span>
                  </div>
                </figure>
              </a>
            </article>
          </div>
          <div className={styles.main_layout__col}>
            <article className={styles.article}>
              <a href="https://vimeo.com/1021601497" target="_blank" rel="noopener noreferrer" >
                <figure className={styles.article_img}>
                  <img src="./view_depth.avif" height='252px' />
                  <div className={styles.article_category}>
                    <span>films</span>
                  </div>
                </figure>
                <h2 className={`${styles.article_title} ${styles.article_title__medium} ${styles.article_link}`}>
                  Grüß Gott
                </h2>
                <div className={styles.article_excerpt}>
                  <p>Grüß Gott (tr. &quot;may God bless you&quot;) is a form of greeting in southern Germany. What does it actually mean? After all, you don&apos;t just meet God on the street in Bavaria — unless you are in Brauneck...</p>
                </div>
              </a>
            </article>
            <article className={styles.article}>
              <a href="./contact">
                <h2 className={`${styles.article_title} ${styles.article_title__medium} ${styles.article_link}`}>
                  Collaborations
                </h2>
                <div className={styles.article_excerpt}>
                  <p>I work in film direction and editing, movement direction and choreography, cinematography, studio recordings, sound design and film post production.</p>
                </div>
              </a>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
