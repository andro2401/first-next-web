"use client";
import React, {useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const session = true;
const isAdmin = true;
const Links = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    const toggleMenu = () =>{
        setOpen(prev => !prev);
    }
    return (
        <div className="container">
            <ul>
                {links.map(link => (
                    <li key={link.title}>
                        <Link
                            href={link.path}
                            className={`${pathName === link.path && 'active'}`}
                        >{link.title}</Link>
                    </li>
                ))}
                {session ? (
                    <>
                        {isAdmin && <li key="admin"><Link href="/admin">Admin</Link></li>}
                        <button className="log-out">Logout</button>
                    </>
                ) : (
                    <li key="login">
                        <Link href="/login">Login</Link>
                    </li>
                )}
            </ul>
            <button onClick={toggleMenu} className={`hamburger ${open && 'active'}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {open && <div className={`mobileMenu ${open && 'opened'}`}>
                <ul>
                    {links.map(link => (
                        <li key={link.title}>
                            <Link
                                href={link.path}
                                className={`${pathName === link.path && 'active'}`}
                            >{link.title}</Link>
                        </li>
                    ))}
                    {session ? (
                        <>
                            {isAdmin && <li key="adminMobile">
                                <Link href="/admin">Admin</Link>
                            </li>}
                            <button className="log-out">Logout</button>
                        </>
                    ) : (
                        <li key="login">
                            <Link href="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>}
        </div>
    );
};

export default Links;
