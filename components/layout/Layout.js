import Nav from "./Nav";

// combine Nav in main Layout component
function Layout(props) {
  return (
    <div>
      <Nav />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;