import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="bg-[#3f3f3f] lg:hidden min-h-screen w-screen">
        <div className="relative pt-20 ">
          <Image
            className="object-contain"
            src="/images/abtauth.png"
            width={500}
            height={500}
          />
        </div>

        <div className="p-3 text-[#e4e1cf] text-justify">
          About the Author:
          <br />
          <br />
          <span className="text-white ">
            {" "}
            <em>Manoj Radhakrishnan</em>
          </span>{" "}
          is an Indian Patent Agent and an electronics and communication
          Engineer. He has a post graduate diploma in IPR law from the National
          Law School of India University, Bangalore. He owns extensive
          experience in patent examination, patent development, patent
          prosecution, and patent portfolio management.
          <br />
          <br />
          Once a patent examiner in the Indian Patent Office, he has worked in
          different capacities such as computer network engineer, technical
          consultant, patent professional, and patent portfolio manager in
          various organizations and multinational companies.
          <br />
          <br />
          During his 25-year work career, he has been certified by various
          international institutes. He is a Patent Information specialist and
          holds a Diploma from GO Opleidingen Institute of Netherlands. He also
          holds an additional PG Diploma in Patents & IP laws, processes &
          services (US & India) from Global Institute of Intellectual Property
          (GIIP) New Delhi. He is also certified in European patent laws and
          practices by Delta Patents Institute of Netherlands and European
          Patent Institute (EPI) Munich, Germany. He is also certified by
          various companies and organizations (Microsoft, IBM, World
          Intellectual Property Organization (WIPO) & Dale Carnegie Institute).
          <br />
          <br />
          In his career, he got opportunities to work with other companies like
          Time Technologies (Computer Networking), Delta Innovative Enterprises
          (VSAT communication & networking), Foxmandat Little & Associates
          (Private Law firm) and IP departments of MNCs like Siemens & Ericsson.
          <br />
          <br />
          He is very passionate about promoting IPR awareness and education.
          Apart from speaking in industry seminars and conferences, he is
          passionate about conducting training programs and workshops for
          inventors and aspiring patent agents, and also coordinates
          industry-led training programs for intellectual property offices. In
          addition to that now he is an author of the book &quot;Inno Waiting
          ?&quot;
        </div>
        <Link href="/">
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
        </Link>
      </div>
      <div className="hidden lg:block">
        <div className="about  bg-neutral-800 p-20 grid grid-cols-4 w-screen h-screen">
          <Link href="/" className="z-100">
            <div className="flex cursor-pointer items-center text-lg hover:text-orange-300 text-white fixed z-100 top-5 left-5 ">
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
