import Link from "next/link";
import Head from "next/head"
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <>
        <Head>
            <title>TNF radar</title>
        </Head>
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>TNF radar</h1>
                </a>
            </Link>
        </header>
        </>
    );
}