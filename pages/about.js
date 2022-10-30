import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="about bg-neutral-800 p-20 grid grid-cols-4 w-screen h-screen">
      <a href="/">
        <svg
          className="w-10 hover:text-orange-300 text-white fixed z-100 top-5 left-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
      </a>
      </div>
    </div>
  );
}
