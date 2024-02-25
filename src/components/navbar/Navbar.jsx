import React from 'react';
import Link from "next/link";
import Links from "@/components/navbar/Links";

const Navbar = () => {
    return (
        <header>
            <Link href="/">Logo</Link>
            <nav>
                <Links />
            </nav>
        </header>
    );
};

export default Navbar;
