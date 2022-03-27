import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}: PostProps) {
  return (
    <>
      <Header />
      <img src="/Banner.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo de exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 Marc 2022
              </li>
              <li>
                <FiUser />
                Alesandra Marinho
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>
          <article>
            <h2>Título sessão</h2>
            <p>
              Lorem ipsum dolor sit amet <strong>consectetur adipisicing</strong> elit.
              Ipsum quaerat nisi officia, dolor eaque porro veritatis odit nihil,
              tenetur <a href="#">exercitationem</a> voluptatibus maxime molestias alias quidem,
              doloribus aliquam odio nulla totam.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
