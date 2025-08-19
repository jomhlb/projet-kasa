import Banner from '../Banner/index';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <>
      <Banner />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
