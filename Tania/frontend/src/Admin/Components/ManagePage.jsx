import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import axios from "axios";
import PageHeader from "../../User/Layout/PageHeader";
import { Link } from "react-router-dom";

function ManageTrainers() {
    const [trainers, setTrainers] = useState([]);
    const [load, setLoad] = useState(true);

    const fetchTrainers = async () => {
        try {
            const res = await axios.post("http://localhost:5001/api/trainer/all");
            console.log(res);
            
            setTrainers(res.data.data || []);
        } catch (err) {
            toast.error("Failed to load trainers");
            console.error(err);
        } finally {
            setLoad(false);
        }
    };

    const deleteTrainer = async (id) => {
        const data={ _id: id }
        try {
            await axios.post("http://localhost:5001/api/trainer/deleteOne",data)
            toast.success("Trainer deleted");
            setTrainers(trainers.filter(t => t._id !== id));
        } catch (err) {
            toast.error("Failed to delete trainer");
            console.error(err);
        }
    };

    const toggleStatus = async (id, currentStatus) => {
        const data = { _id: id }

        try {
            await axios.post("http://localhost:5001/api/trainer/deleteOne", data)

            toast.success("Status updated");
            setTrainers(trainers.map(t => t._id === id ? { ...t, status: !currentStatus } : t));
        } catch (err) {
            toast.error("Failed to update status");
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTrainers();
    }, []);

    return (
        <>
            <ToastContainer />
            <PageHeader child={"Manage Trainers"} />
            <div className="container mt-4">
                {load ? (
                    <PropagateLoader
                        color="#616283"
                        cssOverride={{ height: "200px", marginTop: "20%", marginLeft: "50%" }}
                        loading={load}
                    />
                ) : (
                    <div className="card shadow border-0 p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="mb-0">All Trainers</h4>
                            <Link to="/admin/add-trainer" className="btn btn-primary">
                                + Add Trainer
                            </Link>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead style={{ background: "#f1f1f1" }}>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Experience</th>
                                        <th>Profile</th>
                                        <th>Contact</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trainers.length > 0 ? (
                                        trainers.map((t, i) => (
                                            <tr key={t._id}>
                                                <td>{i + 1}</td>
                                                <td>{t.name}</td>
                                                <td>{t.email}</td>
                                                <td>{t.address}</td>
                                                <td>{t.experience}</td>
                                                <td><img src={t.profile} alt={t.profile} className="img-fluid" /></td>
                                                <td>{t.contact}</td>
                                                <td>
                                                    <button
                                                        className={`btn btn-sm ${t.status ? "btn-success" : "btn-secondary"}`}
                                                        onClick={() => toggleStatus(t._id, t.status)}
                                                    >
                                                        {t.status ? "Active" : "Inactive"}
                                                    </button>
                                                </td>
                                                <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <Link
                                                            to={`/admin/edit-trainer/${t._id}`}
                                                            className="btn btn-warning btn-sm"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => deleteTrainer(t._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="10" className="text-center">
                                                No trainers found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ManageTrainers;
