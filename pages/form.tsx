import Link from "next/link";
import { useEffect, useState } from "react";
import $ from 'jquery';


export default function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  
  useEffect(() => {
    $("#submit-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycby8c5sP62kNmhpqfhDRiJ_SSL_gN3KpZJpOtQd6nfJkdHPxhagmm-p5hDy5OZgJrCs71g/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
          },
          error:function (err){
            window.location.reload()
  
          }
      })
  })
  }, []);

  return (
    <div className="flex min-h-full h-screen w-screen form items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Link href="/">
        <svg
          className="w-10 hover:text-orange-300 text-white fixed z-100 top-5 left-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
      </Link>
      <div className="w-full backdrop-blur-sm p-20 rounded-3xl shadow-5xl bg-black/30 max-w-md space-y-8">
        <div className="text-4xl text-center text-amber-500">Contact Us</div>
        <form id="submit-form" className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                value={name}
                onChange={(value) => {
                  setName(value.target.value);
                }}
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(value) => {
                  setEmail(value.target.value);
                }}
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(value) => {
                  setMessage(value.target.value);
                }}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                placeholder="Type your message"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


