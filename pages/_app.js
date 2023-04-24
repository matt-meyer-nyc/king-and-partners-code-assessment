import { Chivo, Asul } from 'next/font/google';
import { Nav } from '@component/components/root-nav';
import { Footer } from '@component/components/root-footer';

const chivo = Chivo({
  subsets: ['latin'],
  // variable: '--font-body'
});
const asul = Asul({
  subsets: ['latin'],
  weight: ['400', '700'],
  // variable: '--font-heading',
});

import '@component/styles/globals.css';
{
  /* < className={[chivo.className, asul.className].join('')}> */
}
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${chivo.style.fontFamily};
        }
				h1,h2,h3,h4 {
					font-family: ${asul.style.fontFamily};
				}
      `}</style>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
