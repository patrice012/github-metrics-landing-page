export const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="container">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Github Metrics</a>
                    </div>
                    <div className="flex-none">
                        <button  className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}