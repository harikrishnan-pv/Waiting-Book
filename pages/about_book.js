import Image from "next/image";
import Link from "next/link";

export default function Book() {
  return (
    <div>
      <div className="w-screen  lg:hidden bg-[#c1c1c1]">
        <div className="pt-5">
          <Image
            src="/images/abtbkmob.jpg"
            className="w-screen "
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="p-5 text-gray-800 text-justify">
          <p className="text-2xl">About the book:</p>
          <br />
          <br />
          In this book, the Author{" "}
          <span className="text-black text-lg bold">
            (Manoj Radhakrishnan)
          </span>{" "}
          shares with you the fool proof method to build credibility and improve
          branding with your Intellectual property (IP) assets if you are an
          individual inventor/innovator or a person running a business around
          your innovation or an aspiring entrepreneur or even if you are one who
          is running a start-up. He shows how sustainable and successful
          business can be run by protecting innovation using patents.
          <br/>
          <br/>
          
           Innovators
          and businesses usually think of providing innovative products and
          services to their customers but ignore or underrate the value of
          protecting their core IP assets associated with it. Here the author
          explains how we can identify our IP assets and make the best use of
          it. He shares the key steps and strategies involved in the timely
          protection of technical innovation by patents and provides insights on
          what could be done with it to be successful. 
          <br/>
          <br/>
          
          In Inno Waiting? you will
          learn about different intellectual property rights that can be
          associated with a successful business. The book provides strategies to
          harvest technical innovations and will take you through some key
          patenting processes to protect them. Approaches you can adopt for
          stronger, broader, timely patent protection are also discussed. You
          will get insights on how to brand your business with patents and grow
          it by developing a patent portfolio. The book also reveals different
          proven ways of exploiting your patent rights to make a profit. 
          <br/>
          <br/>
          
          The
          book also includes views and insights of patent practitioners across
          the globe which will provide us with a very broad understanding and a
          global perspective on Patent protection. The book will undoubtedly
          give the required confidence to scale your business to a global
          platform without any fear and with the reassurance of a strong patent
          protection.
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
      <div className="w-screen hidden lg:block bg-neutral-200">
        <Image
          src="/images/abtbk.jpg"
          className="w-screen"
          width="100%"
          height="100%"
          layout="responsive"
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
  );
}
