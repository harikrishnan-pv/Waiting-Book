import Image from "next/image";
import Link from "next/link";

export default function Book() {
  return (
    <div>
        
      <div className="w-screen bg-neutral-200">
        <Image
          src="/images/abtbk.jpg"
          className="w-screen"
          width="100%" height="100%" layout="responsive" objectFit="contain"
        />
      </div>
      <Link href="/" className="z-100" >
          <svg
            className="w-10 hover:text-amber-600 text-gray-700 fixed z-100 top-5 left-5"
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
        </Link>
    </div>
  );
}
