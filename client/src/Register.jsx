import React from "react";
import './style/Register.css'

function Register(){
    return(
        <div className="register-grandparent">
            <form className="register-parent">
                <div className="user-parent">
                    <label className="user-child" id="user-child-1">UserID</label>
                    <input className="user-child"  id="user-child-2" type="text"/>
                </div>

                <div className="password-parent">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button className="submission">Submit</button>
            </form>
        </div>
    )   
};

export default Register;