import React from 'react';
import Image from 'next/image';
import AuroraImg from '../public/aurora-banner.png'
import KRYPTEXImg from '../public/kryptex-banner.png'
import TradecoinXImg from '../public/tradecoin-banner.png'

const Company = () => {
  return (
    <>
     <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Happy Clients</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative  border border-emerald-300 rounded-md">
          <Image alt="gallery" class="absolute inset-0 my-12 mx-auto object-cover" src={AuroraImg}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-mock-300 mb-1">GREAT WORK</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Aurora Exchange</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative  border border-emerald-300 rounded-md">
          <Image alt="gallery" class="absolute inset-0 my-12 mx-auto object-cover" src={KRYPTEXImg}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-mock-300 mb-1">Amazing Team!</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">KRYPTEX</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative  border border-emerald-300 rounded-md">
          <Image alt="gallery" class="absolute inset-0 my-12 mx-auto object-cover" src={TradecoinXImg} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-mock-300 mb-1">Satisfied</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">TradecoinX</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
     </section> 
    </>
  );
}

export default Company;
