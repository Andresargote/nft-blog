import Link from "next/link"
import styles from "../styles/Post.module.css";

export default function Post({title, slug, date, img}) {
    return (
        <>
            <Link href={slug}>
                <div className={styles.post}>
                    <div className={styles.postImg}>
                        <img src={img} alt="nft-img"/>
                    </div>
                    <div className={styles.postInfo}>
                        <h3>{title}</h3>
                        <div>
                            <time dateTime={date}>{date}</time>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}