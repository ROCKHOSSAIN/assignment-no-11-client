import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navlinks = <>
    <li className='text-lg font-poppins'><NavLink to='/'>Home</NavLink></li>
    <li className='text-lg font-poppins'><NavLink to='/addBooks'>Add Books</NavLink></li>
    <li className='text-lg font-poppins'><NavLink to='/allBooks'>All Books</NavLink></li>
    <li className='text-lg font-poppins'><NavLink to='/borrowedBooks'>Borrowed Books</NavLink></li>
    <li className='text-lg font-poppins'><NavLink to='/contact'>Contact</NavLink></li>
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow  rounded-box w-52 bg-green-500 p-5">
              {navlinks}
            </ul>
          </div>
          <div className='flex items-center'>

            <img className='md:w-1/6' src="https://i.ibb.co/4pw5HxH/library-logo-vector-8933635-removebg-preview.png" alt="" />
            <a className="font-poppins normal-case md:text-2xl hidden md:block">BookKeepers Hub</a>
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
              <div className='flex items-center bg-slate-700  md:rounded-3xl px-1'>

                <span className='text-xs md:text-base text-white'>{user.displayName ? user.displayName : 'Rocky'}</span>
                <span><img className='hidden md:block w-[30px] md:w-[35px] rounded-full m-0 md:m-2' src={user.photoURL ? user.photoURL : "https://i.ibb.co/yBYsTYG/avatar-removebg-preview.png"} alt="" /></span>
              </div>
                <button onClick={handleSignOut} className="ml-2 btn text-xs md:text-base ">LogOut</button>
              </>
              :
              <Link to='/login'>
                <button className="btn text-base ">Login</button>
              </Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;