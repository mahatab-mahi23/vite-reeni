import React from 'react'
import Pt from '../../assets/image/pt1.svg'
import Peronal from '../../assets/image/personal.svg'
import Model from '../../assets/image/model.svg'
import Tech from '../../assets/image/technician.svg'

const Portfolio = () => {
  return(
   <>
   <section class="pt-25 bg-[#F8F9FA]">
  <div class="container px-5 md:px-0">
    
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <span class="text-primary font-primary font-bold uppercase tracking-[0.15em] text-sm">
        Latest Portfolio
      </span>
      <h2 class="text-heading font-secondary text-4xl md:text-5xl font-bold">
        Transforming Ideas into Exceptional
      </h2>
      <p class="text-para font-inter leading-relaxed max-w-2xl mx-auto">
        Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      
      <div class="flex flex-col gap-12">
        
        <div class="group cursor-pointer">
          <div class="rounded-[20px] overflow-hidden mb-5 bg-white shadow-sm border border-gray-100">
            <img src={Pt} alt="Personal Portfolio" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <div class="flex items-center justify-between px-1">
            <div>
              <h3 class="text-heading font-secondary text-xl font-bold mb-1">My Journey</h3>
              <p class="text-para font-inter text-sm">Development Coaches</p>
            </div>
            <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-heading group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </button>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="rounded-[20px] overflow-hidden mb-5 bg-white shadow-sm border border-gray-100">
             <img src={Peronal} alt="Personal Portfolio" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <div class="flex items-center justify-between px-1">
            <div>
              <h3 class="text-heading font-secondary text-xl font-bold mb-1">My Portfolio of Innovation</h3>
              <p class="text-para font-inter text-sm">App Development</p>
            </div>
            <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-heading group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </button>
          </div>
        </div>

      </div>

      <div class="flex flex-col gap-12 md:mt-24">
        
        <div class="group cursor-pointer">
          <div class="rounded-[20px] overflow-hidden mb-5 bg-white shadow-sm border border-gray-100">
             <img src={Model} alt="Personal Portfolio" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <div class="flex items-center justify-between px-1">
            <div>
              <h3 class="text-heading font-secondary text-xl font-bold mb-1">My Professional Portfolio</h3>
              <p class="text-para font-inter text-sm">Development Coaches</p>
            </div>
            <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-heading group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </button>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="rounded-[20px] overflow-hidden mb-5 bg-white shadow-sm border border-gray-100">
            <img src={Tech} alt="Personal Portfolio" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <div class="flex items-center justify-between px-1">
            <div>
              <h3 class="text-heading font-secondary text-xl font-bold mb-1">A Portfolio of Creativity and Passion</h3>
              <p class="text-para font-inter text-sm">Business Development</p>
            </div>
            <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-heading group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
   </>
  )
}

export default Portfolio
