import Link from 'next/link'
import logo from "../../public/logo.svg"
import Image from 'next/image'

export default function Navbar() {
  return (

    <div className="w-full flex px-[2rem] py-[2rem] flex-col items-stretch bg-text text-primary mt-[7rem]">

          <div className="bg-accent md:w-[80%] md:mx-auto px-[2rem] lg:px-[3rem] py-[1.5rem] lg:py-[2rem] rounded-2xl lg:rounded-3xl mt-[-5rem] lg:mt-[-7rem] text-center lg:text-start">
            <h1 className="font-bold text-[1.25rem] lg:text-[2.5rem] text-primary">with auctiontable</h1>
            <p className='lg:text-[1.5rem]'>Experience the thrill of auctions from the comfort of your screen!</p>
          </div>


        <div className="flex mt-[2rem] flex-wrap gap-[1rem] items-start justify-evenly">

              <div className="flex flex-col items-center justify-center text-center gap-[1rem]">
                  <h3 className="text-[1rem] md:text-[1.25rem] font-bold">Auctiontable</h3>
                  <div className="text-[0.75rem] md:text-[1rem] flex flex-col items-center justify-center gap-[0.5rem]">
                    <Link href={'/'}>About Us</Link>
                    <Link href={'/'}>Newsroom</Link>
                    <Link href={'/'}>Careers</Link>
                    <Link href={'/'}>Contact</Link>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-[1rem]">
                  <h3 className="text-[1rem] md:text-[1.25rem] font-bold">Learn</h3>
                  <div className="text-[0.75rem] md:text-[1rem] flex flex-col items-center justify-center gap-[0.5rem]">
                    <Link href={'/'}>Selling</Link>
                    <Link href={'/'}>Bidding</Link>
                    <Link href={'/'}>General Information</Link>

                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-[1rem]">
                  <h3 className="text-[1rem] md:text-[1.25rem] font-bold">Other</h3>
                  <div className="text-[0.75rem] md:text-[1rem] flex flex-col items-center justify-center gap-[0.5rem]">
                    <Link href={'/'}>Customer Reviews</Link>
                    <Link href={'/'}>Blogs</Link>
                    <Link href={'/'}>Community</Link>
                  </div>
                </div>

           </div>
          
          <div className="w-full h-[.1rem] bg-primary my-[2rem] opacity-30"></div>

          <div className="flex flex-wrap gap-[1rem] items-center justify-center sm:justify-evenly">

          <Link href={'/'}>
            <Image
              src={logo}
              width={100}
              alt="logo"
              className='md:w-[183px]'
            />
          </Link>

          <Link className="text-[0.75rem] md:text-[1rem]" href={'/'}>Privacy Policy</Link>
          <Link className="text-[0.75rem] md:text-[1rem]" href={'/'}>Terms & Condition</Link>
          <Link className="text-[0.75rem] md:text-[1rem]" href={'/'}>Security</Link>
          <Link className="text-[0.75rem] md:text-[1rem]" href={'/'}>@2023</Link>

          </div>

      </div>

  )
}
