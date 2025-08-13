import PageHeader from "../../User/Layout/PageHeader";
import { useState } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddTrainer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [experience, setExperience] = useState("");
    const [profile, setProfile] = useState(null); // file instead of string
    const [contact, setContact] = useState("");
    const [load, setLoad] = useState(false);
    const nav = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setLoad(true);

        if (!name || !email || !password || !address || !experience || !profile || !contact) {
            toast.error("All fields are required");
            setLoad(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("address", address);
            formData.append("experience", experience);
            formData.append("profile", profile); // image file
            formData.append("contact", contact);

            const res = await axios.post(
                "http://localhost:5001/api/trainer/add",
                formData
                // { headers: { "Content-Type": "multipart/form-data" } }
            )
            console.log(res);
            

            toast.success(res.data.message || "Trainer added successfully");
            setTimeout(() => {
                setLoad(false);
                // nav("/admin/trainers");
            }, 2000);
        } catch (err) {
            toast.error("Failed to add trainer");
            console.error(err);
            setLoad(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <PageHeader child={"Add Trainer"} />

            {load ? (
                <PropagateLoader
                    color="#616283"
                    cssOverride={{ height: "200px", marginTop: "20%", marginLeft: "50%" }}
                    loading={load}
                />
            ) : (
                <section
                    className="section d-flex align-items-center justify-content-center"
                    style={{ minHeight: "80vh", background: "#f8f9fa" }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-9 mt-5">
                                <div className="card shadow border-0 p-4">
                                    <h2 className="text-center mb-4">Add Trainer</h2>
                                    <form onSubmit={handleForm} encType="multipart/form-data">
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Experience</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter experience (e.g. 5 years)"
                                                value={experience}
                                                onChange={(e) => setExperience(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Profile Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={(e) => setProfile(e.target.files[0])}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Contact</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter contact number"
                                                minLength={10}
                                                maxLength={10}
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <button
                                            style={{ backgroundColor: "#ed563b" }}
                                            type="submit"
                                            className="btn text-white w-100"
                                        >
                                            Add Trainer
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default AddTrainer;
