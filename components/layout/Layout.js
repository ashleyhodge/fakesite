import Nav from "./Nav";
import Footer from './Footer'
// combine Nav in main Layout component
function Layout(props) {
  return (
    <div>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;