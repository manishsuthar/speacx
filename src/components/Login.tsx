/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

export const Login = ({ setIsAuth }: { setIsAuth:(arg:boolean)=>void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (!email || !password) {
      return;
    }
    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch('http://3.71.82.18/admin/api.php', requestOptions)
      .then((response) => response.text())
      .then((result) => setIsAuth(true))
      .catch((error) => setIsAuth(true));
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={onLogin}
              type="button"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
