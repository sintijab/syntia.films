import styles from "@/styles/Home.module.css";

export default function Home() {
  return  <div className={styles.action}>
  <a href="./home" className={styles.action_btn}>Watch Syntia&apos;s films</a>
    <iframe src="https://www.youtube.com/embed/embed/videoseries?si=PLH1CMiwwuKh1tNoxTm7cV-8fCbE8Y18bU&amp;list=PLH1CMiwwuKh1tNoxTm7cV-8fCbE8Y18bU&loop=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&hd=1&rel=0" allow="autoplay" allowFullScreen={true} title="YouTube video player"></iframe>
  </div>;
}
