import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="home w-screen h-screen">
        
        <div className="py-28 text-6xl text-left pt-4 text-white font-bold">
        </div>
        <div className="grid h-4/6 grid-cols-3">
          <div className="flex ">
            
          </div>
          <div></div>
            <div className="px-10 text-white my-auto font-bold font-serif text-xl">
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
