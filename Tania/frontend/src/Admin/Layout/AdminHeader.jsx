import { Link } from "react-router-dom";

function AdminHeader() {
    return (
        <>
            <>
                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    {/* ***** Logo Start ***** */}
                                    <Link to="index.html" className="logo">
                                        Training<em> Studio</em>
                                    </Link>
                                    {/* ***** Logo End ***** */}
                                    {/* ***** Menu Start ***** */}
                                    <ul className="nav">
                                        <li className="scroll-to-section">
                                            <Link to="#top" className="">
                                                Home
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item dropdown ">
                                            <a
                                                className="nav-link dropdown-toggle p-0"
                                                href="#"
                                                id="adminDropdown"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Trainer
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="adminDropdown">
                                                <Link className="dropdown-item" to="/admin/addTrainer">Add Trainer</Link>
                                                <Link className="dropdown-item" to="/admin/manageTrainer">Manage Trainer</Link>
                                               
                                            </div>
                                        </li>

                                        <li className="scroll-to-section">
                                            <Link to="/login" className="">
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link className="menu-trigger">
                                        <span>Menu</span>
                                    </Link>
                                    {/* ***** Menu End ***** */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ***** Header Area End ***** */}

            </>

        </>
    );
}

export default AdminHeader;