import Header from "../Header";


const Layout = (props) => {
  return (
    <div >
      {/* <HeaderTop/> */}
      <Header />
 
      {/* <Header /> */}
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
