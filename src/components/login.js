import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [warning, setWarning] = useState('‎ ‎ ‎ ');
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.status === 201) {
          navigate(`home/${data.usuario}`)
        } else {
          setWarning('Error, username or password was incorrect');
        }
      };

    return(
        <div className='flex flex-col justify-center items-center w-screen h-screen 
        bg-gradient-to-br from-emerald-700 to-emerald-200'>
        <h1 className="text-emerald-200 text-5xl pb-4 ">LOGIN</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center nm-flat-white-xs w-96 h-96 rounded-lg">
            <label className="mt-10 text-3xl text-emerald-800" >Usuario:</label>
            <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder='Username' 
            className="px-7 py-2 text-lg rounded-lg nm-inset-emerald-100 text-center" />
            <label className="mt-10 text-3xl text-emerald-800" >Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password'
            className="px-7 py-2 text-lg rounded-lg nm-inset-emerald-100 text-center" />
            <p className='text-red-600 text-lg'>{warning}</p>
            <button type="submit" className="text-lg nm-flat-emerald-700-xs text-emerald-300 mt-5 px-4 rounded-md 
            transition ease-in-out delay-300ms hover:scale-110 active:scale-100">
                Sign In
            </button>
            <Link to={`create-account/`}>
                <p className="no-underline text-emerald-800 mt-6 hover:text-emerald-600">
                    Are you new? Create your account
                </p>
            </Link>
        </form>
        </div>
    );
}

export default Login;