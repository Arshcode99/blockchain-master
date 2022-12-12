import React from 'react';
import Logo from '../public/logo.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
     <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={Logo} />
      <span class="ml-3 text-xl">Bitreino</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Bitreino —
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">All Right Reserve</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        Terms & Conditions
      </a> 
      {'\u00A0'}{'\u00A0'}{'\u00A0'}|
      <a class="ml-3 text-gray-500">
        Privacy Policy
      </a>
      
    </span>
  </div>
</footer>
    </>
  );
}

export default Footer;
