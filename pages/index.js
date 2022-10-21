import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="home w-screen h-screen">
        <div className="h-1/6 text-7xl text-center pt-4 text-white font-bold">
          Manoj Radhakrishnan
        </div>
        <div className="grid grid-cols-4">
          <div className="flex ">
            <p className="px-20 my-auto text-2xl text-yellow-200 ">
              “ Welcome ! and thanks for visiting. I hope you enjoy reading this
              book. I suggest you start by measuring where you are today in your
              journey as a leader. The insights you will gain from the book can
              put you on the path to success only if you dare to act upon them.
              ”
              <br/>
               - Manoj Radhakrishnan
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="px-20 text-white text-2xl">
            <Link href={<Home/>}>
            HOME
            </Link> <br/>
            <Link href={<Home/>}>
            ABOUT AUTHOR
            </Link><br/>
            <Link href={<Home/>}>
            ABOUT BOOK
            </Link><br/>
            <Link href={<Home/>}>
            EXPERTS SPEAK
            </Link><br/>
            <Link href={<Home/>}>
            BOOK PREVIEW
            </Link><br/>
            <Link href={<Home/>}>
            SHOP 
            </Link><br/>
            <Link href={<Home/>}>
            CONTACT
            </Link>
          </div>
        </div>
        <div className="text-center text-white mt-72 font-bold w-screen text-4xl">
        Foolproof Strategies to Safeguard Your INNOVATIONS, Build Credibility, Improve Branding and Increase Profits by PATENTING Intellectual Property Assets 

        </div>
      </div>
    </div>
  );
}
