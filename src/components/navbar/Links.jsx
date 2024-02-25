"use client";
import React from 'react';
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

    const pathName = usePathname();
    return (
        <ul>
            {links.map(link=> (
                <li key={link.index}>
                    <Link
                        href={link.path}
                        className={`${pathName === link.path && 'active'}`}
                    >{link.title}</Link>
                </li>
            ))}
            {session ? (
                <>
                    {isAdmin && <Link href="/admin">Admin</Link>}
                    <button className="log-out">Logout</button>
                </>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </ul>
    );
};

export default Links;
