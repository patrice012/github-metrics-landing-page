import { LinkComponent } from "./_NavLink";
import { SiteLinks } from "./Links";
import { MobileNavbar } from "./MobileNav";
import style from "./_navBar.scss";

export const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="container">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl logo">
                            Github Metrics
                        </a>
                    </div>
                    <div className=" navbar-end lg:flex">
                        <nav>
                            <ul className="navbar--links">
                                {SiteLinks?.map((anchor, index) => {
                                    return (
                                        <LinkComponent
                                            {...anchor}
                                            key={index}
                                        />
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                   <MobileNavbar/>
                </div>
            </div>
        </>
    );
};
