import logo from "../../public/logo.svg"
import hero from "../../public/hero2.png"
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <nav className="w-full mx-auto flex px-[1rem] py-[0.75rem] justify-between">

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

          <div className="mt-[1rem] w-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] bg-primary ">
          <Image
              src={hero}
              width={1500}

              alt="logo"
              className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-primary"
              />
          </div>

      </div>

      {/* Feature Section */}

      <div className="w-full flex px-[2rem] py-[2rem] flex-col items-stretch text-text mt-[2rem]">

        <h1 className="text-[2rem] font-extrabold text-center">How it <span className="text-accent">Works</span>!</h1>

      {/* Feature Section Card Collection */}
        <div className="flex flex-col items-stretch justify-center gap-[1.5rem] my-[1.5rem]">

            {/* Feature Section Card 1 */}

            <div className="flex flex-col items-center justify-center gap-[1rem] px-[1rem] py-[1.5rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

                <div className="bg-secondary w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] text-primary">1</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] text-center">Sell with Ease</h1>

                <p className="text-[0.875rem] text-center">List your products with detailed descriptions and set a starting bid.</p>

            </div>

            {/* Feature Section Card 2 */}

            <div className="flex flex-col items-center justify-center gap-[1rem] px-[1rem] py-[1.5rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

                <div className="bg-secondary w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] text-primary">2</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] text-center">Bid to Win</h1>

                <p className="text-[0.875rem] text-center">Bidders engage in competitive offers to secure the best deals.</p>

            </div>

            {/* Feature Section Card 3 */}

            <div className="flex flex-col items-center justify-center gap-[1rem] px-[1rem] py-[1.5rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

                <div className="bg-secondary w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] text-primary">3</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] text-center">Time-limited Thrill</h1>

                <p className="text-[0.875rem] text-center">Auctions are time-bound, ensuring quick and fair transactions.</p>

            </div>

            {/* Feature Section Card 4 */}

            <div className="flex flex-col items-center justify-center gap-[1rem] px-[1rem] py-[1.5rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

                <div className="bg-secondary w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] text-primary">4</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] text-center">Secure Transactions</h1>

                <p className="text-[0.875rem] text-center">Highest bidder wins, and sellers receive payments hassle-free.</p>

            </div>

            {/* Feature Section Card 5 */}

            <div className="flex flex-col items-center justify-center gap-[1rem] px-[1rem] py-[1.5rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

                <div className="bg-secondary w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] text-primary">5</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] text-center">That’s all, Now lets</h1>

                <div className="flex gap-[0.5rem]">
                    <Link className="rounded-md border-accent border-2 px-[0.5rem] py-[0.25rem] text-[14px] font-semibold text-accent hover:bg-accent hover:text-primary" href={'/'}>Start Selling</Link>
                    <Link className="rounded-md border-accent border-2 px-[0.5rem] py-[0.25rem] text-[14px] font-semibold text-primary bg-accent hover:bg-primary hover:text-accent" href={'/'}>Start Bidding</Link>
                </div>

            </div>


        </div>

      </div>

      {/* Footer */}
      <div className="w-full flex px-[2rem] py-[2rem] flex-col items-stretch bg-text text-primary mt-[7rem]">

          <div className="bg-accent px-[2rem] py-[1.5rem] rounded-2xl mt-[-7rem] text-center">
            <h1 className="font-bold text-[1.25rem] text-primary">with auctiontable</h1>
            <p>Experience the thrill of auctions from the comfort of your screen!</p>
          </div>


        <div className="flex mt-[2rem] flex-wrap gap-[1rem] items-start justify-evenly">

              <div className="flex flex-col items-center justify-center text-center gap-[1rem]">
                  <h3 className="text-[1rem] font-bold">Auctiontable</h3>
                  <div className="text-[0.75rem] flex flex-col items-center justify-center gap-[0.5rem]">
                    <Link href={'/'}>About Us</Link>
                    <Link href={'/'}>Newsroom</Link>
                    <Link href={'/'}>Careers</Link>
                    <Link href={'/'}>Contact</Link>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-[1rem]">
                  <h3 className="text-[1rem] font-bold">Learn</h3>
                  <div className="text-[0.75rem] flex flex-col items-center justify-center gap-[0.5rem]">
                    <Link href={'/'}>Selling</Link>
                    <Link href={'/'}>Bidding</Link>
                    <Link href={'/'}>General Information</Link>

                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-[1rem]">
                  <h3 className="text-[1rem] font-bold">Other</h3>
                  <div className="text-[0.75rem] flex flex-col items-center justify-center gap-[0.5rem]">
                    <Link href={'/'}>Customer Reviews</Link>
                    <Link href={'/'}>Blogs</Link>
                    <Link href={'/'}>Community</Link>
                  </div>
                </div>

           </div>
          
          <div className="w-full h-[.1rem] bg-primary my-[2rem] opacity-30"></div>

          <div className="flex flex-wrap gap-[1rem] items-center justify-center">

          <Link href={'/'}>
            <Image
              src={logo}
              width={100}
              alt="logo"
            />
          </Link>

          <Link className="text-[0.75rem]" href={'/'}>Privacy Policy</Link>
          <Link className="text-[0.75rem]" href={'/'}>Terms & Condition</Link>
          <Link className="text-[0.75rem]" href={'/'}>Security</Link>
          <Link className="text-[0.75rem]" href={'/'}>@2023</Link>

          </div>

      </div>
    </>
  )
}
