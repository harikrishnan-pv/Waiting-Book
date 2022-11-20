import Image from "next/image";
import Link from "next/link";

export default function Experts() {
  return (
    <div>
      <div className=" bg-gray-300 px-5  min-h-screen expert w-screen ">
        <div className="grid px-5 lg:hidden grid-cols-1 ">
          <div>
            <Image
              src="/images/world.png"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/images/experts1.jpg"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/images/experts2.jpg"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>{" "}
          <div>
            <Image
              src="/images/experts3.jpg"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>{" "}
          <div>
            <Image
              src="/images/experts4.jpg"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>{" "}
          <div>
            <Image
              src="/images/experts5.jpg"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>{" "}
          <div>
            <Image
              src="/images/experts6.jpg"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>{" "}
          <div>
            <Image
              src="/images/experts7.jpg"
              className="w-screen "
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <Link href="/">
            <svg
              className="w-10 hover:text-white text-gray-600 fixed z-100 top-5 left-5"
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

        <div className="hidden lg:block">
          <Image
            src="/images/experts.jpg"
            width="100%"
            height="100%"
            layout="fill"
            objectFit="contain"
          />
          <Link href="/" className="z-100">
            <div className="flex items-center text-lg hover:text-amber-600 fixed z-100 top-5 left-5 text-gray-700">
              <svg
                className="w-10 mr-2"
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
              Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
