import React from 'react';
import Link from "next/link";
import Links from "@/components/navbar/Links";
import "./navbar.scss"

const Navbar = () => {
    return (
        <header className="mainHeader">
            <Link href="/" className="logo">Logo</Link>
            <nav className="mainNav">
                <Links />
            </nav>
        </header>
    );
};

export default Navbar;
