import logo from "../../public/logo.svg"
import hero from "../../public/hero2.png"
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <nav className="flex px-[1rem] py-[0.75rem] justify-between">

          <Image
            src={logo}
            width={120}
            alt="logo"
          />

          <div className="flex gap-[0.5rem]">
              <Link className="rounded-md border-accent border-2 px-[0.5rem] py-[0.25rem] text-[14px] font-semibold text-accent hover:bg-accent hover:text-primary" href={'/login'}>Log In</Link>
              <Link className="rounded-md border-accent border-2 px-[0.5rem] py-[0.25rem] text-[14px] font-semibold text-primary bg-accent hover:bg-primary hover:text-accent" href={'/login'}>Sign Up</Link>
          </div>
      </nav>

      {/* Hero Section */}
      <div className="flex px-[1rem] py-[2rem] flex-col">

        <div className="w-full my-[1rem]">
            <h1 className="mx-auto px-[2rem] text-[2rem] font-extrabold text-text tracking-tight leading-8 text-center">Here Every <span className="text-accent">Bid</span> Tells a Story!</h1>
            <h2 className="mx-auto mt-[1rem] px-[1rem] text-[1rem] text-text tracking-tight leading-5 text-center">Embark on an Adventure of Bidding, Bargains, and Unforgettable Finds!</h2>
        </div>

        <div className="mt-[1rem] w-full rounded-xl shadow-[0px_0px_60px_8px_rgba(217,217,217,0.5)] bg-primary ">
        <Image
            src={hero}
            width={1500}
            
            alt="logo"
            />
        </div>
      </div>

      {/* Feature Section */}

      <div>
        
      </div>
    </>
  )
}
