import PageHeader from "../User/Layout/PageHeader";

function OurClasses() {
    return ( 
        <>
            <>
            <PageHeader child={"Our Classes"}/>
                {/* ***** Our Classes Start ***** */}
                <section className="section" id="our-classes">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-heading mt-5">
                                    <h2>
                                        Our <em>Classes</em>
                                    </h2>
                                    <img src="assets/images/line-dec.png" alt="" />
                                    <p>
                                        Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
                                        viverra ipsum dolor, ultricies fermentum massa consequat eu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="tabs">
                            <div className="col-lg-4">
                                <ul>
                                    <li>
                                        <a href="#tabs-1">
                                            <img src="assets/images/tabs-first-icon.png" alt="" />
                                            First Training Class
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tabs-2">
                                            <img src="assets/images/tabs-first-icon.png" alt="" />
                                            Second Training Class
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tabs-3">
                                            <img src="assets/images/tabs-first-icon.png" alt="" />
                                            Third Training Class
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tabs-4">
                                            <img src="assets/images/tabs-first-icon.png" alt="" />
                                            Fourth Training Class
                                        </a>
                                    </li>
                                    <div className="main-rounded-button">
                                        <a href="#">View All Schedules</a>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-lg-8">
                                <section className="tabs-content">
                                    <article id="tabs-1">
                                        <img
                                            src="assets/images/training-image-01.jpg"
                                            alt="First Class"
                                        />
                                        <h4>First Training Class</h4>
                                        <p>
                                            Phasellus convallis mauris sed elementum vulputate. Donec
                                            posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit
                                            erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                                            tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                                            imperdiet, molestie nunc ut, accumsan diam.
                                        </p>
                                        <div className="main-button">
                                            <a href="#">View Schedule</a>
                                        </div>
                                    </article>
                                    <article id="tabs-2">
                                        <img
                                            src="assets/images/training-image-02.jpg"
                                            alt="Second Training"
                                        />
                                        <h4>Second Training Class</h4>
                                        <p>
                                            Integer dapibus, est vel dapibus mattis, sem mauris luctus leo,
                                            ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in
                                            ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper
                                            at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci
                                            varius natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus.
                                        </p>
                                        <div className="main-button">
                                            <a href="#">View Schedule</a>
                                        </div>
                                    </article>
                                    <article id="tabs-3">
                                        <img
                                            src="assets/images/training-image-03.jpg"
                                            alt="Third Class"
                                        />
                                        <h4>Third Training Class</h4>
                                        <p>
                                            Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id
                                            auctor neque posuere sit amet. Aliquam pharetra, augue vel
                                            cursus porta, nisi tortor vulputate sapien, id scelerisque felis
                                            magna id felis. Proin neque metus, pellentesque pharetra semper
                                            vel, accumsan a neque.
                                        </p>
                                        <div className="main-button">
                                            <a href="#">View Schedule</a>
                                        </div>
                                    </article>
                                    <article id="tabs-4">
                                        <img
                                            src="assets/images/training-image-04.jpg"
                                            alt="Fourth Training"
                                        />
                                        <h4>Fourth Training Class</h4>
                                        <p>
                                            Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Aenean ultrices elementum
                                            odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum
                                            commodo et.
                                        </p>
                                        <div className="main-button">
                                            <a href="#">View Schedule</a>
                                        </div>
                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Our Classes End ***** */}
                <section className="section" id="schedule">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-heading dark-bg">
                                    <h2>
                                        Classes <em>Schedule</em>
                                    </h2>
                                    <img src="assets/images/line-dec.png" alt="" />
                                    <p>
                                        Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
                                        viverra ipsum dolor, ultricies fermentum massa consequat eu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="filters">
                                    <ul className="schedule-filter">
                                        <li className="active" data-tsfilter="monday">
                                            Monday
                                        </li>
                                        <li data-tsfilter="tuesday">Tuesday</li>
                                        <li data-tsfilter="wednesday">Wednesday</li>
                                        <li data-tsfilter="thursday">Thursday</li>
                                        <li data-tsfilter="friday">Friday</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1">
                                <div className="schedule-table filtering">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="day-time">Fitness Class</td>
                                                <td className="monday ts-item show" data-tsmeta="monday">
                                                    10:00AM - 11:30AM
                                                </td>
                                                <td className="tuesday ts-item" data-tsmeta="tuesday">
                                                    2:00PM - 3:30PM
                                                </td>
                                                <td>William G. Stewart</td>
                                            </tr>
                                            <tr>
                                                <td className="day-time">Muscle Training</td>
                                                <td className="friday ts-item" data-tsmeta="friday">
                                                    10:00AM - 11:30AM
                                                </td>
                                                <td
                                                    className="thursday friday ts-item"
                                                    data-tsmeta="thursday"
                                                >
                                                    2:00PM - 3:30PM
                                                </td>
                                                <td>Paul D. Newman</td>
                                            </tr>
                                            <tr>
                                                <td className="day-time">Body Building</td>
                                                <td className="tuesday ts-item" data-tsmeta="tuesday">
                                                    10:00AM - 11:30AM
                                                </td>
                                                <td className="monday ts-item show" data-tsmeta="monday">
                                                    2:00PM - 3:30PM
                                                </td>
                                                <td>Boyd C. Harris</td>
                                            </tr>
                                            <tr>
                                                <td className="day-time">Yoga Training Class</td>
                                                <td className="wednesday ts-item" data-tsmeta="wednesday">
                                                    10:00AM - 11:30AM
                                                </td>
                                                <td className="friday ts-item" data-tsmeta="friday">
                                                    2:00PM - 3:30PM
                                                </td>
                                                <td>Hector T. Daigle</td>
                                            </tr>
                                            <tr>
                                                <td className="day-time">Advanced Training</td>
                                                <td className="thursday ts-item" data-tsmeta="thursday">
                                                    10:00AM - 11:30AM
                                                </td>
                                                <td className="wednesday ts-item" data-tsmeta="wednesday">
                                                    2:00PM - 3:30PM
                                                </td>
                                                <td>Bret D. Bowers</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
     );
}

export default OurClasses;