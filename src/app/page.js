import styles from "./page.module.scss";
import Header from "@/components/landing/header/header";
import Download from "@/components/landing/download/download";
import Team from "@/components/landing/team/team";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <Download />
        <Team />
    </main>
  );
}
