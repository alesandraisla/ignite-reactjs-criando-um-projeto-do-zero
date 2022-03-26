/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Header from '../components/Header';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home() {
  return (
    <>
      <main className={commonStyles.container}>
        <Header />
        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <strong>Exemplo</strong>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
              <ul>
                <li>
                  <FiCalendar />
                  15 Mar 2021
                </li>
                <li>
                  <FiUser />
                  Alesandra Marinho
                </li>
              </ul>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.post}>
              <strong>Exemplo</strong>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
              <ul>
                <li>
                  <FiCalendar />
                  15 Mar 2021
                </li>
                <li>
                  <FiUser />
                  Alesandra Marinho
                </li>
              </ul>
            </a>
          </Link>
          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
