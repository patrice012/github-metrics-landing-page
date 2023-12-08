"use client";

/*
NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.
*/

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, exact, children, ...props }) => {
    const pathname = usePathname();
    const active = " active";
    console.log(pathname);
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += active;
    }
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export const LinkComponent = ({ path, name, variants = {} }) => {
    return (
        <li>
            <NavLink href={path} exact={true} className="btn">
                {name}
            </NavLink>
        </li>
    );
};
