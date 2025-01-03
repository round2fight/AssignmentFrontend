// pages/_app.js
import "../styles/globals.css";
import RootLayout from '../components/RootLayout';
function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;