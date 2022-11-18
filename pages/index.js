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
        <div className="grid gap-4 p-10 mb-5 justify-evenly backdrop-blur-md  rounded-xl grid-cols-2">
          <Link href={<Home />}>HOME</Link>
          <Link href="/about">ABOUT AUTHOR</Link>
          <Link href="/about_book">ABOUT BOOK</Link>
          <Link href="/experts">EXPERTS SPEAK</Link>
          <Link href="/preview">BOOK PREVIEW</Link>
          <Link href="">SHOP</Link>
          <Link href="/form">CONTACT</Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="home w-screen hidden lg:block h-screen">
        <div className="py-28 text-6xl text-left pt-4 text-white font-bold"></div>
        <div className="grid h-4/6 grid-cols-3">
          <div className="flex "></div>
          <div></div>
          <div className="px-10 pl-24 text-white my-auto font-bold font-serif text-xl">
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
