import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="about bg-neutral-800 p-20 grid grid-cols-4 w-screen h-screen">
        <div className="col-span-3 px-20 text-justify text-2xl text-white ">
          <div className="text-5xl mt-20">
            About the Author: <br />
          </div>
          
          <br />
          <br />
          
          <div className="text-yellow-100">
          <b className="text-white">Manoj Radhakrishnan </b>is an Indian patent agent and an
          electronics and communication Engineer. He is a certified IPR
          professional from the National Law School of India University. He owns
          extensive experience in patent examination, patent development, patent
          prosecution, and patent portfolio management. 
          <br />
          <br />
          <br />
           Once a patent
          examiner in the Indian Patent Office, he has worked in different
          capacities such as technical consultant, patent professional, and
          patent portfolio manager in various organizations and multinational
          companies. 
          <br />
          <br />
          <br />
          During his 25-year work career, he has been certified by various
          international institutes and companies. He is very passionate about
          promoting IPR awareness and education. Apart from speaking in industry
          seminars and conferences, he is passionate about conducting training
          programs and workshops for inventors and aspiring patent agents, and
          also coordinates i ndustry-led training programs for intellectual
          property offices.
          </div>
        </div>
        <div className="abtpic shadow-2xl">

        </div>
      </div>
    </div>
  );
}
