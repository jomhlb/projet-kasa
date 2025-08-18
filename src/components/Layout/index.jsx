import Navbar from '../Navbar/index'
import Footer from '../Footer';

function Layout({ children }) {
    return(
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
