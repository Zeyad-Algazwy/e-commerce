import Footer from '../Footer/Footer';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
// import { Flex } from './../../../node_modules/lightningcss/node/ast.d';

export default function Layout() {
  return (
    <>
    <h1 ></h1>
       <Navbar />
       <Outlet />
       <Footer />
    </>
  );
}