import React, {useState} from "react";

export const Register = () => {
 
    const [reg, setReg]   = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(reg); 
     }
        return(
            <>
            <form onSubmit={handleSubmit}>
                <label for="reg">Reg/ID</label>
                <input value={reg} placeholder="Reg/ID" id ="regID" name="reg"/>
                <label for="password">Password</label>
                <input value={pass} placeholder="*********" id="password" name="password"></input>
                <button type="submit">Log In</button>
            </form>
            <button>Don't have an account? Register</button>
            </>
        )
    }