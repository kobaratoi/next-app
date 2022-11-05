import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'フードデリバリー' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav className='navbar navbar-dark bg-dark '>
        <ul className='nav text-white justify-start'>
          <li className='nav-item'>
            <Link className='nav-link text-white' href='/'>
              ホーム
            </Link>
          </li>
        </ul>
        <ul className='nav text-white justify-end'>
          <li className='nav-item'>
            <Link className='nav-link text-white' href='/login'>
              サインイン
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' href='/register'>
              サインアップ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className='container'>{children}</div>

    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
