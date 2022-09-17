import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import { Header } from '../components/Header';

import { Container } from '../styles/pages/app';

import { PurchaseProvider } from '../providers/Purchase';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PurchaseProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </PurchaseProvider>
  );
}
