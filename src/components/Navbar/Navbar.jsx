// /* eslint-disable react/no-unknown-property */
// // import { NavLink } from 'react-router-dom';
// // import freshlogo from "../../assets/images/freshcart-logo.svg"
// // // import { isPlainArray } from './../../../node_modules/@tanstack/query-core/src/utils';
// // export default function Navbar() {
// //   return <nav className=' bg-gray-500 flex p-4-auto container items-center justify-between'>
    
//     <div className="flex items-center gap-4">

//     {}
//     <img src={freshlogo} alt="Fresh cart" />
//     {}
    // <ul className='flex items-center space-x-4'>
    //   <li>
    //     <NavLink to='/products'>products </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to='/'>catgorise </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to='/'>cart </NavLink>
    //   </li>
    // </ul>
//     </div> 

// <div className='flex items-center gap-4' >
// <ul className="flex items-center gap-4">
//   <li>
//     <i className='fa-brands cursor-pointer fa-facebook-f'></i>
//   </li>
//   <li>
//     <i className='fa-brands cursor-pointer fa-twitter'></i>
//   </li>
//   <li>
//     <i className='fa-brands cursor-pointer fa-linkedin'></i>
//   </li>
//   <li>
//     <i className='fa-brands cursor-pointer fa-youtube'></i>
//   </li>

// </ul>
// <ul className='flex items-center gap-4 '>
//   <li className=''>
//     <NavLink to={'/Register'}> Register </NavLink>
//   </li>
//   <li>
//     <NavLink to={'/Login'}> Login </NavLink>
//   </li>
//   <li>
//     <span> Logout </span>
//   </li>
// </ul>

// </div>
//   </nav>
    
  
// }










import { Link, NavLink } from 'react-router-dom';
import freshlogo from "../../assets/images/freshcart-logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-gray-300 flex p-4 container items-center justify-between">
      <div className="flex items-center gap-x-5">
        <img src={freshlogo} alt="Fresh Cart" />
        <ul className="flex items-center space-x-5">
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/categories">Categories</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </div>
      
      <div className="flex items-center gap-4">
        <ul className="flex items-center justify-between gap-4">
          <li><i className="fa-brands cursor-pointer fa-facebook-f" /></li>
          <li><i className="fa-brands cursor-pointer fa-twitter" /></li>
          <li><i className="fa-brands cursor-pointer fa-linkedin" /></li>
          <li><i className="fa-brands cursor-pointer fa-youtube" /></li>
        </ul>
      </div>

      <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li><Link to="/home" className="block py-2 px-3 text-gray-900 hover:text-blue-700">Home</Link></li>
          <li><Link to="/layout" className="block py-2 px-3 text-gray-900 hover:text-blue-700">Layout</Link></li>
          <li><Link to="/login" className="block py-2 px-3 text-gray-900 hover:text-blue-700">Login</Link></li>
          <li><Link to="/register" className="block py-2 px-3 text-gray-900 hover:text-blue-700">Register</Link></li>
          <li><Link to="/contact" className="block py-2 px-3 text-gray-900 hover:text-blue-700">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}



    



    
    
    
    



  


{/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}