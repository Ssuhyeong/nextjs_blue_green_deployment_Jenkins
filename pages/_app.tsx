import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: any) {https://github.com/jseo9732/NextJS-intro/pulls
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
