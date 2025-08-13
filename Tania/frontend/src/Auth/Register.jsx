import { useState } from "react";
import PageHeader from "../User/Layout/PageHeader";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [profile, setProfile] = useState(null);
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);
    const nav = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setLoad(true);

        if (!name || !email || !address || !gender || !profile || !contact || !password) {
            toast.error("All fields are required");
            setLoad(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("address", address);
            formData.append("gender", gender);
            formData.append("profile", profile); // image file
            formData.append("contact", contact);
            formData.append("password", password);

            const res = await axios.post("http://localhost:5001/api/customer/add", formData);
            // {
            //     headers: { "Content-Type": "multipart/form-data" }
            // }

            console.log(res);
            
            toast.success(res.data.message || "Registration successful");
            setTimeout(() => {
                setLoad(false);
                nav("/login");
            }, 2000);
        } catch (err) {
            console.error("Registration failed:", err);
            toast.error("Failed to register");
            setLoad(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <PageHeader child={"Register"} />

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
                            <div className="col-md-6 col-lg-5">
                                <div className="card shadow border-0 p-4">
                                    <h2 className="text-center mb-4">Register</h2>
                                    <form onSubmit={handleForm} encType="multipart/form-data">
                                        <div className="mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter full name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
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
                                            <label className="form-label">Gender</label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="Male"
                                                    checked={gender === "Male"}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    required
                                                />{" "}
                                                Male
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="Female"
                                                    checked={gender === "Female"}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    className="ms-3"
                                                    required
                                                />{" "}
                                                Female
                                            </div>
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
                                            <label className="form-label">Contact Number</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter contact number"
                                                value={contact}
                                                minLength={10}
                                                maxLength={10}
                                                onChange={(e) => setContact(e.target.value)}
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
                                        <button
                                            style={{ backgroundColor: "#ed563b" }}
                                            type="submit"
                                            className="btn text-white w-100"
                                        >
                                            Register
                                        </button>
                                    </form>
                                    <div className="text-center mt-3">
                                        Already have an account?{" "}
                                        <a href="/login" className="small">
                                            Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Register;
