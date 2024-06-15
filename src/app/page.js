import Image from "next/image";
import styles from "./page.module.css";
import QRCodeComponent from "./components/qrasync";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <QRCodeComponent url="https://ivanthedev.guru/" />
      </div>
    </main>
  );
}
