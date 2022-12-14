import Image from 'next/image'
import PImg1 from '../public/undraw_adventure_re_ncqp.svg'
import PImg2 from '../public/undraw_bitcoin_re_urgq.svg'
import PImg3 from '../public/undraw_exams_re_4ios.svg'
import PImg4 from '../public/undraw_financial_data_re_p0fl.svg'
import PImg5 from '../public/undraw_join_re_w1lh.svg'
import PImg6 from '../public/undraw_live_collaboration_re_60ha.svg'
import PImg7 from '../public/undraw_multitasking_re_ffpb.svg'
import PImg8 from '../public/undraw_real_time_collaboration_c62i.svg'
import koxImg from '../public/undraw_online_collaboration_re_bkpm.svg'
import AuroraImg from '../public/aurora-banner.png'
import KRYPTEXImg from '../public/kryptex-banner.png'
import TradecoinXImg from '../public/tradecoin-banner.png'
// import Benifits from '../components/benifits'
// import Company from '../components/company'
// import Contact from '../components/contact'
// import Moreinfo from '../components/moreinfo'
// import Offers from '../components/offers'
// import Pricing from '../components/pricing'
// import Services from '../components/services'
// import Team from '../components/team'
// import Workprocess from '../components/workprocess'
import HeroImg from '../public/hero-Img.svg'

export default function Home() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image class="lg:w-2/6 md:w-3/6 w-80 mb-10 object-cover object-center rounded" alt="hero" src={HeroImg} />
          <div class="text-center lg:w-2/3 w-full">
          <p class="mb-8 leading-relaxed p-3">Explore & Collaborate With The New Gen-Technology</p>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Building Into Blockchain Ecosystem</h1>
            <p class="mb-8 leading-relaxed">We develop Web3 applications on Ethereum, Polygon and other blockchains along-with Crypto exchanges, <br /> DeFi, NFTs, DAO & metaverse. Let Us build your next project.</p>
            <div class="flex justify-center">
              <a href='#services' class="inline-flex text-white bg-gradient-to-r from-indigo-600 to-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Explore</a>
              <a href='tel:+91-7209236123' class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Instant connect</a>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font" id='services'>
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Services</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">expertise and industry insights in every aspect of your business and guides you along the way ours growth and expansion we produce innovative solutions and add addional features to existing products every Month.</p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-600 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Development</h2>
                <p>
                  Dapps and DAOs,
                  Smart Contracts,
                  Token Engineering,
                  Payment Solutions,
                  NFT Creation,
                  crypto-exchanges,
                  Liquidity solutions & market making bot,
                  Web/Mobile Development.
                </p>
                <a class="mt-3 text-blue-600 inline-flex items-center" data-modal-toggle="defaultModal">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              

{/* <!-- Main modal --> */}
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Development
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 mx-auto my-0 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <ul className='list-disc text-left mx-6'>
                  <li>WDapps and DAOs</li>
                  <li>Smart Contracts</li>
                  <li>Token Engineering</li>
                  <li>Payment Solutions</li>
                  <li>NFT Creation</li>
                  <li>crypto-exchanges</li>
                  <li>Liquidity solutions & market making bot</li>
                  <li>Web/Mobile Development</li>
                  </ul>
                </p>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ok</button>
                <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Request Custom Service</button>
            </div>
        </div>
    </div>
</div>

            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Design</h2>
                <p class="leading-relaxed text-base">UI/UX, Branding, Front-End Development, Product Design, Design for Blockchain, Iconography & Graphic Design.</p>
                <a class="mt-3 text-blue-600 inline-flex items-center" data-modal-toggle="staticModal">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
{/* <!-- Main modal --> */}
<div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Design
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <ul className='list-disc text-left mx-6'>
                  <li>UI/UX</li>
                  <li>Branding</li>
                  <li>Front-End Development</li>
                  <li>Product Design</li>
                  <li>Design for Blockchain</li>
                  <li>Iconography & Graphic Design</li>
                  </ul>
                </p>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-toggle="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I Ok</button>
                <button data-modal-toggle="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Request Custom Service</button>
            </div>
        </div>
    </div>
</div>

            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Consultant & marketing</h2>
                <p class="leading-relaxed text-base">User Research, Smart Contract Pre-Auditing, Testing & Simulations, Wireframes & Systems Architecture, Blockchain Training, SEO/Digital marketing.</p>
                <a class="mt-3 text-blue-600 inline-flex items-center" data-modal-toggle="popup-modal">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              

<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            {/* <!-- Modal body --> */}
            <div class="p-6 space-y-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Consultant & marketing
                </h3>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <ul className='list-disc text-left mx-6'>
                  <li>User Research</li>
                  <li>mart Contract Pre-Auditing</li>
                  <li>Testing & Simulations</li>
                  <li>Wireframes & Systems Architecture</li>
                  <li>Blockchain Training</li>
                  <li>SEO/Digital marketing</li>
                  </ul>
                </p>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I Ok</button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Request Custom Service</button>
            </div>
        </div>
    </div>
</div>



            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font" id='offers'>
  <div class="container px-5 py-24 mx-auto">
  <h1 class="sm:text-4xl text-3xl text-center font-medium title-font mb-2 text-gray-900">What do we offer</h1>
  <hr />
  <br />
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-blue-600 text-lg title-font font-medium mb-2">Integration with all the most popular solutions</h2>
        <p class="leading-relaxed text-base">in the market so our clients are able to get everything in one place.</p>
        <a class="mt-3 text-blue-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-blue-600 text-lg title-font font-medium mb-2">24/7 technical support</h2>
        <p class="leading-relaxed text-base">we offer institutional-grade tools & technology and complement those capabilities with bespoke attention when it came to problem solving.</p>
        <a class="mt-3 text-blue-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-blue-600 text-lg title-font font-medium mb-2">Professional access to exchange & Crypto liquidity</h2>
        <p class="leading-relaxed text-base">via mulitple connection methods is available for all our clients.</p>
        <a class="mt-3 text-blue-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-blue-600 text-lg title-font font-medium mb-2">A full range of services</h2>
        <p class="leading-relaxed text-base">We will provide all technical support like design, development & deployment services and will help you in your marketing needs like SEO/Digital marketing , community marketing etc.</p>
        <a class="mt-3 text-blue-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <a  href='#contact' >
    <button class="flex mx-auto mt-20 text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:blue-600 rounded text-lg">Let's Talk</button>
    </a>
  </div>
     </section>
     <section class="text-gray-600 body-font" id='benifits'>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">We are company which will</h1>
        <div class="h-1 w-20 bg-blue-600 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Inhance Your Brand Value In The Market And Provide Sustainable Growth, Integration with all the most popular solutions in the market so our clients are able to get everything in one place, Professional access to exchange & Crypto liquidity via mulitple connection methods is available for all our clients.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg1} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">1</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Provide</h2>
          <p class="leading-relaxed text-base">advanced client service from the time of contract-signing.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg2} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">2</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Cares</h2>
          <p class="leading-relaxed text-base">for your success.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg3} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">3</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Grow</h2>
          <p class="leading-relaxed text-base">faster than others.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg4} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">4</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Client-care</h2>
          <p class="leading-relaxed text-base">our guarantees, staff-training and onsite and offsite support.</p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg5} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">5</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Understands</h2>
          <p class="leading-relaxed text-base">responsibility for both our own corporate & their end users.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg6} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">6</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Share</h2>
          <p class="leading-relaxed text-base">expertise and industry insights in every aspect of your business and guides you along the way.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg7} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">7</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">We serve</h2>
          <p class="leading-relaxed text-base">everyone on an equal footing with utmost professionalism and deep involvement in all the details.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class=" h-48 rounded w-full object-cover object-center mb-6" src={PImg8} alt="content"/>
          <h3 class="tracking-widest text-blue-600 text-xs font-medium title-font">8</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Never stop</h2>
          <p class="leading-relaxed text-base">ours growth and expansion we produce innovative solutions and add addional features to existing products every Month.</p>
        </div>
      </div>
    </div>
  </div>
  
     </section> 
     <section class="text-gray-600 body-font" id='about'>
     <h1 class="sm:text-4xl text-3xl text-center font-medium title-font mb-2 text-gray-900">Technology that are robust and best in class</h1>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Leading-edge technology.</h2>
            <p class="leading-relaxed text-base">Hundreds of thousands of apps have alreqdy been built with our stock and framework, including AirBNB, Shopify, SoundCloud, Twitch, GitHUb, and Zendesk.</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-blue-600 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Self-healing planet-scale cloud</h2>
            <p class="leading-relaxed text-base">Based on the same principles that Google, Amazon and Microsoft reply on every day when running billions of cloud containers, we design crypto exchange cloud sloutions.
Software Development Process</p>
          </div>
        </div>
      </div>
    </div>
  </div>
     </section> 
     <section class="text-gray-600 body-font" id='workproccess'>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Understanding your needs</h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Formulating a scheme</h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Signing Contracts</h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Collection Domains</h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
</svg>

          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">System Training</h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>

          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Project Acceptance</h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
</svg>

          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Online Operations</h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Deployment Configuration</h2>
            <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
          </div>
        </div>
      </div>
      <Image class="lg:w-3/5 md:w-1/2 rounded-lg md:mt-0 mt-12" src={koxImg} alt="step"/>
    </div>
  </div>
     </section> 
      <section class="text-gray-600 body-font" id='company'>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Happy Clients</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Know What Our Clients Have To Say.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative  border border-emerald-300 rounded-md">
          <Image alt="gallery" class="absolute inset-0 my-12 mx-auto object-cover" src={AuroraImg}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">GREAT WORK</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Aurora Exchange</h1>
            <p class="leading-relaxed"></p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative  border border-emerald-300 rounded-md">
          <Image alt="gallery" class="absolute inset-0 my-12 mx-auto object-cover" src={KRYPTEXImg}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">Amazing Team!</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">KRYPTEX</h1>
            <p class="leading-relaxed"></p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative  border border-emerald-300 rounded-md">
          <Image alt="gallery" class="absolute inset-0 my-12 mx-auto object-cover" src={TradecoinXImg} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">Satisfied</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">TradecoinX</h1>
            <p class="leading-relaxed"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
     </section> 
     <section class="text-gray-600 body-font relative" id='contact'>
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9874203721874!2d77.07571381485424!3d28.449795599079273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ebab5e8267%3A0xd7601e9d0157e080!2sSector%2043%20Rd%2C%20Block%20C%2C%20Sushant%20Lok%20Phase%20I%2C%20Sector%2043%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1670853468147!5m2!1sen!2sin"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Sushant Lok Phase-1, Sector 43, Gurgaon <br />122009, Haryana, India.</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs"></h2>
          <a class="text-blue-600 leading-relaxed"></a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">INSTANT CHAT</h2>
          <a class="text-blue-600 leading-relaxed">Open Chat</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+91 7209236123</p>
        </div>
      </div>
    </div>
    <div class="p-3 lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Reqeust Call</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Connect with us and let us help you with Your projects!</p>
      <form target="_blank" action="https://formsubmit.co/reactjsofficial1@gmail.com" method="POST">
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div class="relative mb-4">
        <label for="Phone" class="leading-7 text-sm text-gray-600">Phone No.</label>
        <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
      </div>
      <button type='submit' class="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
      <p class="text-xs text-gray-500 mt-3">*By Submiting Your Data You are agree that we will use this data to only contact you.</p>
      </form>
    </div>
  </div>
     </section>
    </>
  )
}
