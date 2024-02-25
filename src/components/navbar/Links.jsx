import React from 'react';
import Link from "next/link";

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
const Links = () => {
    return (
        <ul>
            {links.map(link=> (
                <li key={link.index}>
                    <Link href={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Links;
