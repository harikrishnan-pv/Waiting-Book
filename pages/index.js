import Link from "next/link";
import About from "./about";

export default function Home() {
  return (
    <div>
      <div className="home w-screen h-screen">
        <div className="h-1/6 text-6xl text-center pt-4 text-white font-bold">
          Manoj Radhakrishnan
        </div>
        <div className="grid h-4/6 grid-cols-4">
          <div className="flex ">
            <p className="px-20 my-auto text-xl text-orange-200 ">
              “ Welcome ! and thanks for visiting. I hope you enjoy reading this
              book. I suggest you start by measuring where you are today in your
              journey as a leader. The insights you will gain from the book can
              put you on the path to success only if you dare to act upon them.
              ”
              <br />- Manoj Radhakrishnan
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="px-20 text-white my-auto font-bold font-serif text-xl">
            <Link href={<Home />}>HOME</Link>
            <br />
            <p className="p-2"></p>
            <Link href="/about">ABOUT AUTHOR</Link>
            <br />

            <p className="p-2"></p>
            <Link href="/about_book">ABOUT BOOK</Link>
            <br />
            <p className="p-2"></p>
            <Link href="/experts">EXPERTS SPEAK</Link>
            <br />
            <p className="p-2"></p>
            <Link href="/preview">BOOK PREVIEW</Link>
            <br />
            <p className="p-2"></p>
            <Link href={<Home />}>SHOP</Link>
            <br />
            <p className="p-2"></p>
            <Link href={<Home />}>CONTACT</Link>
          </div>
        </div>
        <div className="text-center  text-orange-200 font-bold w-screen text-3xl">
          Foolproof Strategies to Safeguard Your <span className="text-white">INNOVATIONS</span>, Build
          Credibility, Improve Branding and Increase Profits by
          <span className="text-white"> PATENTING </span>
          Intellectual Property Assets
        </div>
      </div>
    </div>
  );
}
