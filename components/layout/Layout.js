import Nav from "./Nav";
import Footer from "./Footer";

// combine Nav and Footer in Layout component
function Layout(props) {
  return (
    <div>
      <Nav />
      <Footer />
      <main>{props.children}</main>
      
    </div>
  );
}

export default Layout;