import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = ({handleThemeSwitch}) => {
  const { user, logout } = useContext(AuthContext)
  const navlinks = <>
    <li className='text-lg font- text-sky-900'><NavLink to='/'>Home</NavLink></li>
    <li className='text-lg font- text-sky-900'><NavLink to='/addBooks'>Add Books</NavLink></li>
    <li className='text-lg font- text-sky-900'><NavLink to='/allBooks'>All Books</NavLink></li>
    <li className='text-lg font- text-sky-900'><NavLink to='/borrowedBooks'>Borrowed Books</NavLink></li>
    <li className='text-lg font- text-sky-900'><NavLink to='/contact'>Contact</NavLink></li>
  </>
  const handleSignOut = () => {
    logout()
      .then(() => {

      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <div className=''>
      <div className="navbar bg-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3   shadow  rounded-box w-52 bg-green-500 text-black p-5 z-30">
              {navlinks}
              <button className='ml-0 md:ml-2 p-1  md:p-2 border-2  md:block text-gray-400 z-20 text-xl md:text-2xl' onClick={handleThemeSwitch}><span className='bg-gray-300 text-black'>Theme</span></button>
            </ul>
          </div>
          <div className='flex items-center'>

            <img className='md:w-1/6' src="https://i.ibb.co/4pw5HxH/library-logo-vector-8933635-removebg-preview.png" alt="" />
            <a className="font-poppins normal-case md:text-2xl hidden md:block text-black">BookKeepers Hub</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
           
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
              <>
              <div className='flex items-center bg-slate-700  md:rounded-3xl p-2 md:p=0 md:px-1'>

                <span className='text-xs md:text-base text-white '>{user.displayName ? user.displayName : 'Rocky'}</span>
                <span><img className='hidden md:block w-[3px] md:w-[35px] rounded-full m-0 md:m-2' src={user.photoURL ? user.photoURL : "https://i.ibb.co/yBYsTYG/avatar-removebg-preview.png"} alt="" /></span>
              </div>
                <button onClick={handleSignOut} className="ml-2 btn text-xs md:text-base bg-gray-300 text-black hover:bg-gray-300 ">LogOut</button>
              </>
              :
              <Link to='/login'>
                <button className="btn text-base ">Login</button>
              </Link>
          }
          <button className='ml-0 md:ml-2   text-gray-400 z-20 text-xl md:text-2xl hidden md:block' onClick={handleThemeSwitch}><span className='bg-gray-300 text-black'>Theme</span></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;