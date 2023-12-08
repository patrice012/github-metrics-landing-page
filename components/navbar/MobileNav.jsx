import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { SiteLinks } from "./Links";
import Link from "next/link";

export const MobileNavbar = () => {
    return (
        <div className="dropdown mobile">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
            >
                <HiOutlineMenuAlt2 />
            </div>

            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {SiteLinks?.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
