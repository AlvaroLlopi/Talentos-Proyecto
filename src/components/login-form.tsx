'use client';

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login!",
  description: "Bienvenido a la pagina de Futurama",
};

export const LoginForm = () => {
  const [error,setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className=" p-4 bg-black bg-opacity-75 rounded-lg shadow-md max-w-xs h-max-w-xs">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-blue-500">
            Iniciar Sesion
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
    <form
      className="flex flex-col items-center"
      onSubmit={async (event) => {
        event.preventDefault();

        // get form data
        const formData = new FormData(event.currentTarget);
        const user = formData.get('user');
        const password = formData.get('password');

        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user, password }),
        });

        const data = await response.json();

        if (response.ok == false){
          setError(data.message);
          }else{
            router.push('/dashboard');
          }
      }}
    >
      
     
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email
              </label>
              <div className="mt-2">
                
                <input
                    type="text"
                    name="user"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Contraseña
                </label>  
              </div>
              <div className="mt-2">  
                <input
                  type="password"
                  name="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='pt-5'>
              <button
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="submit"
                >
                  Ingresar
                </button>
                {error && <p className='text-red-500'>{error}</p>}
            </div>

      
    </form>
    </div>
    </div>
    </div>
  );
};