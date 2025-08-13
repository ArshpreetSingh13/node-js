function PageHeader({child}) {
    return (
        <>
            <>

                {/* ***** Header Area End ***** */}
                {/* ***** Main Banner Area Start ***** */}
                {/* <div
                    className="main-banner"
                    id="top"
                    style={{
                        height: "40vh",
                        backgroundImage: "url('assets/images/fruits.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >

                    <div className="video-overlay header-text">
                        <div className="caption">

                            <h3 className="text-white">Home/Pages/{child}</h3>

                        </div>
                    </div>
                </div> */}

                <section className="section" id="call-to-action">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cta-content">
                                    <h2 className="mt-5" style={{height:"100px"}}>
                                        Home/ <em>{child}</em>
                                    </h2>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    );
}

export default PageHeader;