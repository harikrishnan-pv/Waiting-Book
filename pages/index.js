import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="small-home min-h-screen">
      <div className="lg:hidden grid  grid-cols-1 min-w-max justify-items-center  small-home ">
        <br />
        <br />

        <div className="text-5xl name text-white p-10 text-center">
          Manoj <br /> Radhakrishnan
        </div>
        <br />
        <br />

        <div className="relative  ">
          <Image
            className="object-contain"
            src="/images/boook.png"
            width={500}
            height={500}
          />
        </div>
        <br />
        <br />
        <div className="p-5 max-w-md text-center text-xl brad">
          “Welcome ! and thanks for visiting. <br/> <br/> Are you an individual
          inventor/innovator or a person running a business around your
          innovation or an aspiring entrepreneur or one who is running a
          start-up. Then this book is for you. I hope you enjoy reading this
          book. I suggest you start by measuring where you are today in your
          journey as a leader. The insights you will gain from the book can put
          you on the path to success only if you dare to act upon them. ”
        </div>
        <br />
        
        <div className="grid gap-4 p-10 mb-5 justify-evenly backdrop-blur-md  rounded-xl grid-cols-2">
          <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg bg-white/10">
            <Link href="/about">ABOUT AUTHOR</Link>
          </div>
          <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg bg-white/10">
            <Link href="/about_book">ABOUT BOOK</Link>
          </div>
          <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg bg-white/10">
            <Link href="/experts">EXPERTS SPEAK</Link>
          </div>
          <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg bg-white/10">
            <Link href="/preview">BOOK PREVIEW</Link>
          </div>
          <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg bg-white/10">
            <Link href="">SHOP</Link>
          </div>
          <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg bg-white/10">
            <Link href="/form">CONTACT</Link>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="home w-screen hidden lg:block h-screen">
        <div className="py-28 text-6xl text-left pt-4 text-white font-bold"></div>
        <div className="grid h-4/6 grid-cols-3">
          <div className="flex "></div>
          <div></div>
          <div className="pr-16 text-right pl-24 text-white my-auto font-bold font-serif text-xl">
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
            <Link href="">SHOP</Link>
            <br />
            <p className="p-2"></p>
            <Link href="/form">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
