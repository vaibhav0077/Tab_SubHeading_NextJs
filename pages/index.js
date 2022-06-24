import Head from "next/head";
import Image from "next/image";
import Tabs_sunheading from "../component/tabs_sunheading";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tabs_sunheading />
    </div>
  );
}
