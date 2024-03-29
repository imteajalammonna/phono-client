import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo.webp";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 1000
        });
    }, []);
    return (
        <header className="bg-white z-10 text-black p-3 md:py-4 ">
            <nav className="md:container mx-auto flex items-center justify-between">
                <div className="flex items-center mx-5 justify-between space-x-32">
                    <div className=""> <Link to="/" className=""><img src={logo} alt="" /></Link></div>
                    <div onClick={toggleMenu} className="md:hidden text-black cursor-pointer  ">
                        {menuOpen ?
                            <RxCross1 className="ml-20 font-bold text-2xl"></RxCross1>
                            :
                            <AiOutlineMenu className="ml-20 font-bold text-2xl" />}
                    </div>
                </div>

                <div className="hidden md:flex md:items-center  md:w-auto space-x-8">
                    <NavLink to="/" className="text-lg font-bold hover:text-[#EB0028] duration-500">Home</NavLink>
                    <NavLink to="/shop" className="text-lg font-bold hover:text-[#EB0028] duration-500">Shop</NavLink>
                    <NavLink to="/apple" className="text-lg font-bold hover:text-[#EB0028] duration-500">Apple</NavLink>
                    <NavLink to="/android" className="text-lg font-bold hover:text-[#EB0028] duration-500">Android</NavLink>
                    <NavLink to="/about" className="text-lg font-bold hover:text-[#EB0028] duration-500">About</NavLink>
                    <NavLink to="/contact" className="text-lg font-bold hover:text-[#EB0028] duration-500">Contact</NavLink>
                </div>

                <div className="md:flex hidden items-center space-x-4">
                    <AiOutlineBell className="text-black cursor-pointer text-2xl" />
                    <AiOutlineUser className="text-black cursor-pointer text-2xl" />
                    <AiOutlineSearch className="text-black cursor-pointer text-2xl" />
                </div>

                {menuOpen && (
                    <div data-aos='fade-right' className="md:hidden duration-1000 absolute z-50 top-12 left-0 right-0 bg-white p-4">
                        <ul className="space-y-3 flex flex-col items-center justify-center">
                            <li><NavLink to="/" className="block text-black text-lg font-bold">Home</NavLink></li>
                            <li><NavLink to="/shop" className="block text-black text-lg font-bold">Shop</NavLink></li>
                            <li><NavLink to="/apple" className="block text-black text-lg font-bold">Apple</NavLink></li>
                            <li><NavLink to="/android" className="block text-black text-lg font-bold">Android</NavLink></li>
                            <li><NavLink to="/contact" className="block text-black text-lg font-bold">Contact</NavLink></li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
