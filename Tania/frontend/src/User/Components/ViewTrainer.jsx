import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import axios from "axios";
import PageHeader from "../../User/Layout/PageHeader";

function ViewTrainer() {
    const [trainers, setTrainers] = useState([]);
    const [load, setLoad] = useState(true);

    const fetchTrainers = async () => {
        try {
            const res = await axios.post("http://localhost:5001/api/trainer/all");
            setTrainers(res.data.data || []);
        } catch (err) {
            toast.error("Failed to load trainers");
            console.error(err);
        } finally {
            setLoad(false);
        }
    };

    useEffect(() => {
        fetchTrainers();
    }, []);

    return (
        <>
            <ToastContainer />
            <PageHeader child={"Our Trainers"} />

            <div className="container mt-4">
                {load ? (
                    <PropagateLoader
                        color="#616283"
                        cssOverride={{ height: "200px", marginTop: "20%", marginLeft: "50%" }}
                        loading={load}
                    />
                ) : (
                    <div className="row">
                        {trainers.length > 0 ? (
                            trainers.map((t) => (
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div
                                        className="card shadow-sm border-0 h-100 
               transition 
               hover-shadow-lg 
               rounded-4 
               overflow-hidden"
                                        style={{ transition: "all 0.3s ease-in-out" }}
                                    >
                                        <img
                                            src={t.profile}

                                            className="card-img-top img-fluid"
                                            alt="Trainer"
                                            style={{ transition: "transform 0.3s ease-in-out" , height:"300px"}}
                                            onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                                            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{t.name}</h5>
                                            <p className="card-text">{t.experience}</p>
                                            <button className="btn btn-primary w-100">View Profile</button>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No trainers found</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default ViewTrainer;
