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
        <div className="p-5 max-w-md text-white text-center text-xl brad">
          “Welcome ! and thanks for visiting. <br /> <br /> Are you an
          individual inventor/innovator or a person running a business around
          your innovation or an aspiring entrepreneur or one who is running a
          start-up. Then this book is for you. I hope you enjoy reading this
          book. I suggest you start by measuring where you are today in your
          journey as a leader. The insights you will gain from the book can put
          you on the path to success only if you dare to act upon them. ”
        </div>
        <br />

        <div className="grid gap-4 text-white p-10 mb-5 justify-evenly backdrop-blur-md  rounded-xl grid-cols-2">
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
          <div className="pr-16 grid gap-2 grid-cols-3 text-right pl-24 text-white my-auto font-bold font-serif text-xl">
            <div></div>

            <Link href="/about">
              <div className="backdrop-opacity-10 backdrop-invert col-span-2 p-2 rounded-lg shadow-lg cursor-pointer bg-white/10 hover:bg-black/20">
                ABOUT AUTHOR
              </div>
            </Link>
            <div></div>
            <Link href="/about_book">
              <div className="backdrop-opacity-10 backdrop-invert p-2 col-span-2  rounded-lg shadow-lg bg-white/10 cursor-pointer hover:bg-black/20">
                ABOUT BOOK
              </div>
            </Link>
            <div></div>

            <Link href="/experts">
              <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg col-span-2 shadow-lg bg-white/10 cursor-pointer hover:bg-black/20">
                EXPERTS SPEAK
              </div>
            </Link>
            <div></div>

            <Link href="/preview">
              <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg col-span-2 bg-white/10 cursor-pointer hover:bg-black/20">
                BOOK PREVIEW
              </div>
            </Link>
            <div></div>

            <Link href="">
              <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg col-span-2 bg-white/10 cursor-pointer hover:bg-black/20">
                SHOP
              </div>
            </Link>
            <div></div>

            <Link href="/form">
              <div className="backdrop-opacity-10 backdrop-invert p-2 rounded-lg shadow-lg col-span-2 bg-white/10 cursor-pointer hover:bg-black/20">
                CONTACT
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
