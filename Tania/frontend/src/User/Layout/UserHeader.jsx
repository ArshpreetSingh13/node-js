import { Link } from "react-router-dom";

function UserHeader() {
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
                                            <Link to="/" className="active">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="scroll-to-section">
                                            <Link to="/viewtrainers" className="active">
                                                View Trainers
                                            </Link>
                                        </li>
                                        <li className="scroll-to-section">
                                            <Link to="/features">About</Link>
                                        </li>
                                        <li className="scroll-to-section">
                                            <Link to="/ourclasses">Classes</Link>
                                        </li>
                                        <li className="scroll-to-section">
                                            <Link to="/testimonials">testimonials</Link>
                                        </li>
                                        <li className="scroll-to-section">
                                            <Link to="/contactUs">Contact</Link>
                                        </li>
                                        <li className="main-button">
                                            <Link to="/login">Sign Up</Link>
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

export default UserHeader;