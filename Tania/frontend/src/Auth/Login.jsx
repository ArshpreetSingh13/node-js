import { useState } from "react";
import PageHeader from "../User/Layout/PageHeader";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify/unstyled";

function Login() {

    const [Email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [load, setload] = useState(false)
    const nav=useNavigate()

    const handleForm = async(e) => {
        e.preventDefault();
        setload(true)
        console.log(Email, password);

        await axios.post("http://localhost:5001/api/login", {
            email: Email,
            password: password  }).then((res)=>{
                console.log(res.data.data);
                sessionStorage.setItem("userId", res.data.data.id)
                sessionStorage.setItem("email", res.data.data.email)
                sessionStorage.setItem("userType", res.data.data.userType)

                toast.success(res.data.message)
                setTimeout(() => {
                        setload(false)
                    if (res.data.data.userType==1){
                        nav("/admin")
                    }
                    else if (res.data.data.userType==3){
                        nav("/")
                    }
                }, 2000);

                
            }).catch((err)=>{
                console.error("Login failed:", err);
            });


        
    }
    return (
        <>  
        <ToastContainer/>
            <PageHeader  child={"Login"} />

            {
                load?
                    <PropagateLoader color="#616283" cssOverride={{height:"200px" ,marginTop:"20%" ,marginLeft:"50%"}} loading={load} />
                    :
                    <section className="section d-flex align-items-center justify-content-center" style={{ minHeight: '70vh', background: '#f8f9fa' }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col col-sm- col-md-6 col-lg-4">
                                    <div  className="card shadow border-0 p-4">
                                        <h2 className="text-center mb-4">Login</h2>
                                        <form onSubmit={handleForm}>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"

                                                    placeholder="Enter email"
                                                    required
                                                    value={Email}
                                                    onChange={(e) => setemail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setpassword(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button style={{ backgroundColor:"#ed563b"}} type="submit" className=" btn text-white  w-100">Login</button>
                                        </form>
                                        <div className="text-center mt-3">
                                            Don't have any account?
                                            <Link to="/register" className="small">Register</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
          
        </>
    );
}

export default Login;