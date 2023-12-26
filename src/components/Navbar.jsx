import Link from 'next/link'
import logo from "../../public/logo.svg"
import Image from 'next/image'

export default function Navbar() {
  return (

    <nav className="w-full mx-auto flex px-[1rem] md:px-[1.5rem] py-[0.75rem] md:py-[1rem] items-center justify-between">

          <Image
            src={logo}
            width={120}
            alt="logo"
            className='sm:w-[160px] md:w-[11rem]'
          />

          <div className="flex items-center justify-center gap-[0.5rem]">
              <Link className="rounded-md border-accent border-2 px-[0.5rem] sm:px-[1.5rem] py-[0.25rem] sm:py-[0.5rem] md:py[1rem] text-[14px] md:text-[1.25rem] font-semibold text-accent hover:bg-accent hover:text-primary" href={'/login'}>Log In</Link>
              <Link className="rounded-md border-accent border-2 px-[0.5rem] sm:px-[1.5rem] py-[0.25rem] sm:py-[0.5rem] md:py[1rem] text-[14px] md:text-[1.25rem] font-semibold text-primary bg-accent hover:bg-primary hover:text-accent" href={'/login'}>Sign Up</Link>
          </div>

      </nav>

  )
}
