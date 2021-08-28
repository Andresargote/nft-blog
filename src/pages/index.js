import Header from '../components/Header'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'

import { getAllFilesMetadata } from '../../lib/mdx'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.articles}>
        <article>
          {
            posts.map(({title, slug, date, img}) => <Post title={title} slug={slug} date={date} img={img} key={slug}/>)
          }
        </article>
      </main>
    </div>
  )
};


export async function getStaticProps() {

  const posts = await getAllFilesMetadata();

  return {
    props: {posts}
  }
}