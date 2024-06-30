import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
 // Make sure to include this for Tailwind CSS
import './index.css'



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-sm lg:contt md:contt sm:conttt" style={{ fontFamily: 'Roboto' }}>
      <div className="bg-white p-6 shadow-filled  w-full lg:max-w-lg md:max-w-md lg:max-h-max md:h-screen lg:rounded-[43px] md:rounded-[43px] sm:container" style={{ height: '57%' }}>
        <div className="flex justify-center mb-4">
          <img src={require('./cclogo.png')}  alt="CodeChef VIT Chennai Chapter" className="w-20 h-20" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4 text-blue-500">LOGIN</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="email" className="block text-left ml-[15px] text-sm font-bold text-black-700">Email ID</label>
            <input
              type="email"
              placeholder="some.mail@university.com"
              id="email"
              name="email"
              className="block mx-auto w-full p-2 pl-10 mt-1 border-2 border-black rounded-[8px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={require('./email.png')}  className="h-6 w-6 mt-[20px]" alt="Email" />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-left  ml-[15px] text-sm font-bold text-black-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="block mx-auto w-full p-2 pl-10 mt-1 border-2 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='********'
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={require('./lock.png')}  className="h-6 w-6 mt-[20px]" alt="Lock" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              <img src={showPassword ? require('./eye.png')  : require('./eye-off.png') } className="mt-[20px]  h-5 w-5" alt="Toggle visibility" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className=" inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500  "
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-sm  text-blue-500">Remember Me</span>
            </label>
            <a href="#" className="text-sm  text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="flex items-center justify-center mx-auto w-3/4 py-2 mt-4 text-white bg-blue-500 rounded-[43px] max-h-10 hover:bg-blue-600 font-bold text-2xl text-center" style={{ height: "30%" }}>Log in</button>
        </form>
        <div className="mt-4 text-center">
          <p className="">Don't have an account? <Link to="/signup" className="font-bold text-blue-500 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

const SignUpForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-sm lg:contt md:contt sm:conttt" style={{ fontFamily: 'Roboto' }}>
      <div className="bg-white p-6 shadow-filled  w-full lg:max-w-lg md:max-w-md lg:max-h-max md:h-screen lg:rounded-[43px] md:rounded-[43px] sm:cont" style={{ height: '57%' }}>
        <div className="flex justify-center mb-4">
          <img src={require('./cclogo.png')} alt="CodeChef VIT Chennai Chapter" className="w-1/4" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4 text-blue-500">SIGN UP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="block mx-auto w-full flex space-x-4">
            <div className="relative">
              <label htmlFor="name" className="block text-left ml-[15px] text-sm font-bold text-black-700">Name</label>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  className="w-1/2 p-2 mt-1 border-2 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  className="w-1/2 p-2 mt-1 border-2 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-left ml-[15px] text-sm font-bold text-black-700">Email ID</label>
            <input
              type="email"
              placeholder="some.mail@university.com"
              name="email"
              className="block mx-auto w-full p-2 pl-10 mt-1 border-2 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              value={form.email}
              onChange={handleChange}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={require('./email.png')}className="h-6 w-6  mt-[20px]" alt="Email" />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="phoneNumber" className="block text-left ml-[15px] text-sm font-bold text-black-700">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 ****** ****"
              name="phoneNumber"
              className="block mx-auto w-full p-2 pl-10 mt-1 border-2 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              value={form.phoneNumber}
              onChange={handleChange}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={require('./phonebook.png')} className="h-6 w-6  mt-[20px]" alt="Phone" />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-left ml-[15px] text-sm font-bold text-black-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="block mx-auto w-full p-2 pl-10 mt-1 border-2 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              value={form.password}
              onChange={handleChange}
              placeholder='********'
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={require('./lock.png')} className="h-6 w-6  mt-[20px]" alt="Lock" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              <img src={showPassword ? require('./eye.png')  : require('./eye-off.png') } className="mt-[20px]  h-5 w-5" alt="Toggle visibility" />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-left  ml-[15px] text-sm font-bold text-black-700">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className="block mx-auto w-full p-2 pl-15 mt-1 border-2 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder='********'
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={require('./lock.png')} className="h-6 w-6 mt-[20px]" alt="Lock" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              <img src={showPassword ? require('./eye.png')  : require('./eye-off.png') } className="mt-[20px] h-5 w-5" alt="Toggle visibility" />
            </div>
          </div>
          <button type="submit" className="flex items-center justify-center mx-auto w-3/4 py-2 mt-4 text-white bg-blue-500 rounded-[43px] max-h-10 hover:bg-blue-600 font-bold text-2xl text-center" style={{ height: "30%" }}>Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          <p className="">Already have an account? <Link to="/" className="font-bold text-blue-500 hover:underline">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
