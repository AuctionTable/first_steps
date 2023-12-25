import illustration from "../../public/illustration.svg"
import hero from "../../public/hero2.png"
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <>
      

      {/* Hero Section */}
      <div className="flex px-[1rem] py-[2rem] flex-col">

          <div className="w-full my-[1rem]">
              <h1 className="mx-auto px-[2rem] text-[2rem] sm:text-[3rem] lg:text-[4rem] font-extrabold text-text tracking-tight sm:tracking-normal leading-8 sm:leading-none text-center">Here Every <span className="text-accent">Bid</span> Tells a Story!</h1>
              <h2 className="mx-auto mt-[1rem] sm:mt-[2rem] px-[1rem] text-[1rem] sm:text-[1.5rem] lg:text-[1.75rem] text-text tracking-tight sm:tracking-normal leading-5 sm:leading-none text-center">Embark on an Adventure of Bidding, Bargains, and Unforgettable Finds!</h2>
          </div>

          <div className="mt-[1rem] lg:px-[4rem] lg:mt-[2rem] w-full rounded-xl md:rounded-2xl lg:rounded-3xl ">
          <Image
              src={hero}
              width={1500}

              alt="logo"
              className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-primary"
              />
          </div>

      </div>

      {/* Feature Section */}

      <div className="w-full flex px-[2rem] py-[2rem] flex-col items-stretch text-text mt-[2rem] md:mt-[4rem] lg:mt-[6rem]">

        <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-extrabold text-center">How it <span className="text-accent">Works</span>!</h1>

      {/* Feature Section Card Collection */}
        <div className="flex flex-col lg:flex-row flex-wrap items-stretch justify-center gap-[1.5rem] md:gap-[2rem] xl:gap-[3rem] my-[1.5rem]">

            {/* Feature Section Card 1 */}

            <div className="flex flex-col lg:w-[47%] items-center justify-center gap-[1rem] px-[1rem] lg:px-[2.25rem] py-[1.5rem] lg:py-[3rem] rounded-lg md:rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

                <div className="bg-secondary w-[3.5rem] sm:w-[5.5rem] h-[3.5rem] sm:h-[5.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] sm:w-[4rem] h-[2.5rem] sm:h-[4rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] sm:text-[2rem] text-primary">1</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] sm:text-[2.25rem] text-center">Sell with Ease</h1>

                <p className="text-[0.875rem] sm:text-[1.5rem] text-center">List your products with detailed descriptions and set a starting bid.</p>

            </div>

            {/* Feature Section Card 2 */}

            <div className="flex flex-col lg:w-[47%] items-center justify-center gap-[1rem] px-[1rem] lg:px-[2.25rem] py-[1.5rem] lg:py-[3rem] rounded-lg md:rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

            <div className="bg-secondary w-[3.5rem] sm:w-[5.5rem] h-[3.5rem] sm:h-[5.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] sm:w-[4rem] h-[2.5rem] sm:h-[4rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] sm:text-[2rem] text-primary">2</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] sm:text-[2.25rem] text-center">Bid to Win</h1>

                <p className="text-[0.875rem] sm:text-[1.5rem] text-center">Bidders engage in competitive offers to secure the best deals.</p>

            </div>

            {/* Feature Section Card 3 */}

            <div className="flex flex-col lg:w-[47%] items-center justify-center gap-[1rem] px-[1rem] lg:px-[2.25rem] py-[1.5rem] lg:py-[3rem] rounded-lg md:rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

            <div className="bg-secondary w-[3.5rem] sm:w-[5.5rem] h-[3.5rem] sm:h-[5.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] sm:w-[4rem] h-[2.5rem] sm:h-[4rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] sm:text-[2rem] text-primary">3</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] sm:text-[2.25rem] text-center">Time-limited Thrill</h1>

                <p className="text-[0.875rem] sm:text-[1.5rem] text-center">Auctions are time-bound, ensuring quick and fair transactions.</p>

            </div>

            {/* Feature Section Card 4 */}

            <div className="flex flex-col lg:w-[47%] items-center justify-center gap-[1rem] px-[1rem] lg:px-[2.25rem] py-[1.5rem] lg:py-[3rem] rounded-lg md:rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

            <div className="bg-secondary w-[3.5rem] sm:w-[5.5rem] h-[3.5rem] sm:h-[5.5rem] rounded-full flex items-center justify-center">
                  <div className="bg-accent w-[2.5rem] sm:w-[4rem] h-[2.5rem] sm:h-[4rem] rounded-full flex items-center justify-center">
                    <h3 className="font-bold text-[1.25rem] sm:text-[2rem] text-primary">4</h3>
                  </div>
                </div>

                <h1 className="font-bold text-[1.5rem] sm:text-[2.25rem] text-center">Secure Transactions</h1>

                <p className="text-[0.875rem] sm:text-[1.5rem] text-center">Highest bidder wins, and sellers receive payments hassle-free.</p>

            </div>

            {/* Feature Section Card 5 */}

            <div className="flex items-center lg:w-[97%] justify-center gap-[1rem] px-[1rem] lg:px-[2.25rem] py-[1.5rem] lg:py-[3rem] rounded-lg md:rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"> 

              <div className="flex flex-col md:w-[60%] items-center justify-center gap-[1rem]">

                    <div className="bg-secondary w-[3.5rem] sm:w-[5.5rem] h-[3.5rem] sm:h-[5.5rem] rounded-full flex items-center justify-center">
                          <div className="bg-accent w-[2.5rem] sm:w-[4rem] h-[2.5rem] sm:h-[4rem] rounded-full flex items-center justify-center">
                            <h3 className="font-bold text-[1.25rem] sm:text-[2rem] text-primary">5</h3>
                          </div>
                    </div>

                    <h1 className="font-bold text-[1.5rem] sm:text-[2.25rem] text-center">That’s all, Now lets</h1>

                    <div className="flex gap-[0.5rem]">
                            <Link className="rounded-md border-accent border-2 px-[0.5rem] sm:px-[1.5rem] py-[0.25rem] sm:py-[0.5rem] lg:py[1rem] text-[14px] md:text-[1.25rem] lg:text-[1.2rem] xl:text-[1.5rem] font-semibold text-accent hover:bg-accent hover:text-primary" href={'/'}>Start Selling</Link>
                            <Link className="rounded-md border-accent border-2 px-[0.5rem] sm:px-[1.5rem] py-[0.25rem] sm:py-[0.5rem] lg:py[1rem] text-[14px] md:text-[1.25rem] lg:text-[1.2rem] xl:text-[1.5rem] font-semibold text-primary bg-accent hover:bg-primary hover:text-accent" href={'/'}>Start Bidding</Link>
                    </div>
              </div>

              <div className="hidden md:block w-[40%] lg:w-[360px] overflow-hidden">
                <Image
                  src={illustration}
                  width={100}
                  alt="logo"
                  className="w-full overflow-hidden"
                />
                  
                
              </div>

            </div>


        </div>

      </div>

      
    </>
  )
}
