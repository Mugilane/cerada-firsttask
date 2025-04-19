import React, { useEffect } from 'react'
import Header from '../Components/Header'
import bgimg from '../assets/bg4.gif'
import imgs from '../assets/bg1.jpg'
import fi2 from '../assets/fi2.png'
import date from '../assets/fi3.png'
import loc from '../assets/fi4.png'
import org from '../assets/fi6.png'
import nets from '../assets/fi5.png'
import Footer from '../Components/Footer'
import fi7 from '../assets/fi7.png'
import fi8 from '../assets/fi8.png'
import fi1 from '../assets/fi1.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
   AOS.init({
    duration: 1000,
   })
  }, [])
  

  return (
    <div className='bg-white'>
        <div style={{backgroundImage:`URL(${bgimg})`}} className='bg-no-repeat w-full bg-cover h-max'>
            {/* <img src={bgimg} alt="" className='relative w-full h-10/12' /> */}
            <div class="obsolute text-white">
                <div className='flex flex-row justify-around  bg-green-800 text-sm p-2 tst'>
                  <div className='flex flex-row items-center gap-2'>
                    <img src="https://icsap.co.in/assets/register-C_USa4Tf.png" alt="" className='h-8' />
                    <p>Register Now</p>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <img src="https://icsap.co.in/assets/mail-WhNZzFqv.png" alt="" className='h-8' />
                    <p>info@ICSAPCI.com</p>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <img src="https://icsap.co.in/assets/call-NFH4RXAW.png" alt="" className='h-8' />
                    <p>+91 1234567890</p>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <img src="https://icsap.co.in/assets/partner-DFuEPuDc.png" alt="" className='h-8' />
                    <p>Apply for Academic Partner</p>
                  </div>
                </div>
                <div class="relative bottom-0 w-full overflow-hidden tst">
                    <marquee class="bg-green-400 text-green-950 text-2xl font-semibold py-2 marq">
                    HYBRID EVENT - You can participate in person at Manila, Philippines or Virtually from your home or office. 
                    </marquee>
                </div>
                <div className='mt-4'>
                <Header/>
                </div>
            </div>

            <div className='relative flex flex-col gap-6 items-center mt-10 w-ful'>
              <p 
              className='orgstyle2 lg:text-5xl font-extrabold text-center text-green-200 uppercase sm:text-xl'
              >International Conference on Sustainable Agriculture Practices and Climate Change Impacts </p>
              <p 
               className='lg:text-3xl font-bold w-max p-2 rounded-2xl text-white fts'
              >Theme: "Innovative Approaches to Mitigate Climate Change through Sustainable Agriculture"</p>
              <p
               className='orgstyle lg:text-2xl font-semibold justify-self-center sm:text-xs'
              >Orgnaized by</p>
              <p
               className='orgstyle2 lg:text-4xl font-extrabold justify-self-center sm:text-xl '
              >Confworld Educational Research and Development Association</p>
            </div> 

            <div className='relative flex flex-col backdrop-blur-xl text-green-100 w-8/12 justify-self-center items-center mt-22 rounded-2xl p-4 gap-4'>
               <h1 className='text-3xl font-semibold'>Confrence Details</h1>
               <div className='flex lg:flex-row gap-2 items-center flrow'>
                 <div className='flex flex-row gap-2 mts'>
                   <img src={date} alt="" className='h-10 mt-2'/>
                   <div className='flex flex-col tst2'>
                    <p className='text-lg font-bold '>Date</p>
                    <p className='text-lg font-semibold ' >16-17 Apr, 2026</p>
                   </div>
                 </div>
                 <div className='flex flex-row gap-2 mts'>
                   <img src={loc} alt="" className='h-10 mt-2' />
                   <div className='flex flex-col tst2'>
                    <p className='text-lg font-bold'>Location</p>
                    <p className='text-lg font-semibold'>Manila, Philippines</p>
                   </div>
                 </div>
                 <div className='flex flex-row gap-2 mts'>
                   <img src={nets} alt="" className='h-10 mt-2'/>
                   <div className='flex flex-col tst2'>
                    <p className='text-lg font-bold'>Conference Format</p>
                    <p className='text-lg font-semibold'>Hybrid conference: In Person + Online</p>
                   </div>
                 </div>
                 <div className='flex flex-row gap-2 mts'>
                   <img src={org} alt="" className='h-10 mt-3'/>
                   <div className='flex flex-col tst2'>
                    <p className='text-lg font-bold'>Organized by</p>
                    <p className='text-lg font-semibold'>CERADA</p>
                   </div>
                 </div>
               </div>
               <div className="pt-2">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-green-700 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Register Now
                </span>
                </button>
               </div>
            </div>

            <div className='flex flex-col justify-self-center items-center mt-8 pb-4'>
              <h1 className='font-serif text-green-200'>#CERADA Support SDG's</h1>
              <div className='flex flex-row gap-2 overflow-hidden'>
                <img src="https://icetmrs.com/assets/logo-SwyesrWA.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/PRO1-CkNnUN3E.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/web-DEaLh1Jw.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal1-ITieLZ3b.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal2-BBloluBi.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal3-BehFylIf.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal4-CLpmEH_u.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal5-ij8yFWz8.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal7-60yXuO04.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal8-BfiPexq7.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal9-CnH43Fhv.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal11-CudsWUhu.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal16-BETGmyIU.png" alt="" className='w-12'/>
                <img src="https://icetmrs.com/assets/goal17-DhnIRWmJ.png" alt="" className='w-12'/>
              </div>
            </div>      
        </div>


        <div className='relative m-2 p-4  rounded-2xl bg-white mt-10 wels'>
          <h1 className='text-center text-6xl font-serif text-green-800 mt-2' data-aos="fade-up">Welcome to ICSAPCI 2026</h1>
          <h4 className='text-center text-4xl font-bold text-green-800 mt-8' data-aos="fade-up">Shaping the Future of Sustainable Agriculture and Climate change</h4>

          <div className='lg:grid lg:grid-cols-3 gap-4 p-10 text-green-800 lg:w-9/12 mt-6 items-center justify-self-center text1'>
            <div className='lg:col-span-2 text2' >
              <p className='text-2xl font-medium p-2 text-justify' data-aos="fade-right">Agriculture is the cornerstone of global sustenance and economic stability. 
            In an era where environmental challenges and food security concerns are increasingly
             prevalent, the need for sustainable agricultural practices has never been more urgent.
              The International Conference on Sustainable Agriculture Practices and Climate Change 
              Impacts (ICSAPCI - 2026) is dedicated to addressing these challenges, focusing on 
              innovative strategies that ensure a sustainable and resilient agricultural future.</p>
              <p className='text-2xl font-medium p-2 text-justify' data-aos="fade-right">At ICSAPCI-2026 we are dedicated to fostering a collaborative environment where 
            thought leaders, researchers and practitioners from around the globe converge to 
            address the pressing issues of climate change and disaster risk. Our aim is to inspire
             innovative solutions and build a shared understanding of how to create resilient,
              sustainable communities in the face of evolving environmental challenges.</p>
               <p className='text-2xl font-medium p-2 text-justify' data-aos="fade-right">ICSAPCI-2026 brings together leading researchers, practitioners, policymakers and 
            industry experts from around the world to share their insights, research and solutions. 
            This hybrid conference offers the flexibility to join either in person in the vibrant 
            city of Manila, Philippines or virtually from the comfort of your home or office, 
            making it accessible to a global audience.</p>
            </div>
            <img src={fi2} className='hide w-full rounded-tl-4xl rounded-br-4xl' data-aos="fade-left"/>
          </div>      
        </div>

        <div>
          <section className="bg-green-700" data-aos="fade-up">
            <h1 className='text-gray-50 text-center text-6xl pt-6 mt-4' data-aos="fade-up">Conference Theme</h1>
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                  <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" data-aos="fade-right">"Innovative Approaches to Mitigate Climate Change through Sustainable Agriculture"</h2>
                      <p className="mb-4 text-xl" data-aos="fade-right">As the world grapples with the challenges 
                        of feeding a growing population while preserving our planet, ICSAPCI 2026 
                        focuses on innovative solutions and strategic approaches to ensure food security 
                        and environmental sustainability. This theme invites participants to explore 
                        cutting-edge research, share insights and collaborate on strategies that will 
                        shape the future of agriculture. It also  reflects our commitment to addressing 
                        the urgent need for effective solutions that enhance community resilience in the 
                        face of climate change and natural disasters.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                      <img className="w-full rounded-lg" data-aos="flip-up" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                      <img className="mt-4 w-full lg:mt-10 rounded-lg" data-aos="flip-down" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                  </div>
              </div>
           </section>
        </div>

        <section class="py-8 bg-white sm:py-10 lg:py-16">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="text-center">
                <h2 class="text-3xl font-bold leading-tight text-green-800 sm:text-4xl xl:text-5xl" data-aos="fade-up">
                  Boost Your Productivity </h2>
              </div>
              <div
                class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">

                <div data-aos="zoom-out-right" class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                  <div  class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                    <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
                  </div>
                  <h3 class="mt-12 text-xl font-bold text-green-800">Global Networking</h3>
                  <p class="mt-5 text-base text-gray-600">Connect with a diverse community of experts and peers in the field of sustainable agriculture.</p>
                </div>

            
                <div data-aos="zoom-out-up" class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                  <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                    <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
                  </div>
                  <h3 class="mt-12 text-xl font-bold text-green-800">Innovative Insights</h3>
                  <p class="mt-5 text-base text-gray-600">Discover groundbreaking research, technological advancements, and best practices that are shaping the future of agriculture.</p>
                </div>


                <div data-aos="zoom-out-left" class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                  <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                    <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
                  </div>
                  <h3 class="mt-12 text-xl font-bold text-green-800">Interactive Sessions</h3>
                  <p class="mt-5 text-base text-gray-600">Participate in workshops, panel discussions and Q&A sessions with leading minds in the industry.</p>
                </div>

                <div data-aos="zoom-out-right" class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
                  <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                    <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
                  </div>
                  <h3 class="mt-12 text-xl font-bold text-green-800">Publication Opportunities</h3>
                  <p class="mt-5 text-base text-gray-600">Present your research and get it published in Scopus-indexed journals and Clarivate WoS proceedings.</p>
                </div>

                <div data-aos="zoom-out-up" class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                  <div class="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                    <i class="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
                  </div>
                  <h3 class="mt-12 text-xl font-bold text-green-800">Hybrid Flexibility</h3>
                  <p class="mt-5 text-base text-gray-600">Choose to attend in person or virtually, with full access to all conference sessions, materials and networking opportunities.</p>
                </div>


                <div data-aos="zoom-out-left" class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                  <div class="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                    <i class="fa-solid fa-bolt text-3xl text-gray-900"></i>
                  </div>
                  <h3 class="mt-12 text-xl font-bold text-green-800">CERADA Awards</h3>
                  <p class="mt-5 text-base text-gray-600">Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.</p>
                </div>
              </div>
            </div>
        </section>


        <div className='bg-green-700' data-aos="fade-up">
          <h1 className='text-gray-50 text-center text-6xl pt-6 mt-4' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Session and Tracks/Call for Papers</h1>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="mt-4 font-light text-gray-500 sm:text-lg dark:text-gray-300 lg:text-2xl w-9/12 justify-self-center text-center">Our diverse sessions and tracks offer an unparalleled opportunity to engage with the global
             agricultural community, exchange ideas, and contribute to sustainable practices that are essential for our collective future. 
             We invite researchers, academicians and professionals to submit their papers. Topics of interest include, but are not limited to:</p>
          <div className='w-full px-14 py-8'>
            <ul className="card-wrapper w-full">
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src='https://icsap.co.in/assets/session1-Dia-hIA4.jpg' alt=''/>
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 1</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Sustainable Crop Production</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src='https://icsap.co.in/assets/session2-CLw8iQUM.jpg' alt=''/>
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 2</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Soil Health and Management</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session3-Bzmx94mN.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 3</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Water Management in Agriculture</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session4-BAhBqjr2.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 4</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Agroecology and Biodiversity</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session5-kDF1NvtG.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 5</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Precision Agriculture</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session6-B9L7ZZ_v.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 6</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Climate-Smart Agriculture</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session7-AbyghcPw.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 7</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Sustainable Livestock Management</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session8-DtKECAQ7.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 8</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Agro-industrial Waste Management</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session9-DE-2PQNT.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 9</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Sustainable Agro-business Models</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session10-Db43C7-n.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 10</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Education and Outreach in Sustainable Agriculture</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session11-DZ-12JbD.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 11</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Sustainable Fisheries and Aquaculture</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session12-1OJ9eoAJ.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 12</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Urban Agriculture</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session13-YlQtjIMT.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 13</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Agri Business/Agrochemicals and Fertilizers for Future</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session14-Cdyb_d05.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 14</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Livestock based Sustainable Food system</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session15-CEv1-IhQ.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 15</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Food & National Security</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session16-b7VBxxRi.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 16</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Climate Change Impact and Natural Disaster</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session17-BrtwUiwg.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 17</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Adaptation and Mitigation Strategies</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session18-Cht4I1MQ.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 18</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Disaster Risk Management</p>
              </li>
              <li  data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session19-Cq_oh98s.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 19</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Innovative Solutions and Technologies</p>
              </li>
              <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img src="https://icsap.co.in/assets/session20-CCNmixdl.jpg" alt="" />
                <h3><a href="" className='text-gray-800 text-3xl font-bold'>Session 20</a></h3>
                <p className='text-gray-700 text-xl font-semibold'>Nutrition and Climate Change</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='relative h-max mt-8 ovhide' >
          <div>
              <div className="flex justify-center ">
                <div className="flex flex-row">
                      <div data-aos="fade-up-right" className="hide overflow-hidden w-80 h-96 mt-3 [clip-path:polygon(20%_10%,100%_0%,100%_20%,100%_100%,30%_100%,0%_80%)] object-contain border-4 border-green-700 shadow-2xl">
                        <img
                          src={fi1}
                          alt="Product Image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div data-aos="fade-up-left" className="bg-green-200 bg-opacity-70 text-gray-800 p-8 rounded-xl shadow-lg w-max h-max px-10 ml-4 pmc">
                        <h2 className="text-6xl font-bold mb-4 subd">Submission Deadlines</h2>
                        <div className="flex justify-between flex-wrap text-center gap-10 mt-10 flrow flrow2">
                          <div>
                            <img src={fi7} alt="" className='w-15' />
                            <p className="text-xl font-bold">Early bird registration</p>
                            <p className="text-2xl font-extrabold">30 Jul 2025</p>
                          </div>
                          <div className='lg:mt-10'>
                            <img src={fi7} alt="" className='w-15' />
                            <p className="text-xl font-bold">Abstract submission</p>
                            <p className="text-2xl font-extrabold">31 August 2025</p>
                          </div>
                          <div className='lg:mt-20'>
                            <img src={fi7} alt="" className='w-15' />
                            <p className="text-xl font-bold">Full paper submission</p>
                            <p className="text-2xl font-extrabold">30 September 2025</p>
                          </div>
                          <div className='lg:mt-32'>
                            <img src={fi7} alt="" className='w-15' />
                            <p className="text-xl font-bold">Final Registration</p>
                            <p className="text-2xl font-extrabold">31 October 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
           <p data-aos="fade-up-right" className='hide justify-self-center text-gray-800 text-lg font-medium' style={{marginTop:'-30px'}}>For detailed submission guidelines, please visit the <span>Submission Page.</span></p>
          </div>
         
        </div>

        <div className='flex flex-row justify-center mx-auto py-14 px-10 mt-8 w-9/12 gap-4 ovhide'>
           <div data-aos="fade-up-right" className='flex flex-col justify-center h-96'>
            <div className='bg-green-200 p-5 rounded-xl'>
               <h1 className='text-gray-800 text-4xl font-bold'>Keynote Speakers</h1>
               <p className='text-xl text-gray-800'>Our conference will feature renowned speakers who are leaders in their respective fields.
               Stay tuned for announcements about our distinguished keynote speakers.</p>
            </div>
           </div>
           <img data-aos="fade-up-left" src="https://icsteet.com/assets/icsteet-X_t7JpiC.jpeg" alt="" 
            className='hide h-96 object-cover [clip-path:polygon(0%_0%,75%_0%,100%_20%,100%_100%,20%_100%,0%_80%)] rounded-br-4xl rounded-tl-4xl'
           />
        </div>

        <div className='bg-green-700 pb-8' data-aos="fade-up">
          <h1 className='text-6xl ml-15 font-extrabold text-green-200 p-2 pt-4 mt-6' data-aos="fade-down-right">Why Do You Join Us?</h1>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-9/12 justify-self-center m-4 text-green-700'>
            <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Cutting-Edge Research</h1>
              </div>
              <div className='card-body'> 
                  <p>Explore groundbreaking advancements in agriculture, food science & technology and climate change.</p>
              </div>
            </div>

             <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Global Networking</h1>
              </div>
              <div className='card-body'> 
                  <p>Connect with international experts, peers and industry leaders.</p>
              </div>
            </div>

             <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Innovative Sessions</h1>
              </div>
              <div className='card-body'> 
                  <p>Participate in workshops and presentations on emerging trends.</p>
              </div>
            </div>

             <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Publication Opportunities</h1>
              </div>
              <div className='card-body'> 
                  <p>Publish your research in prestigious journals and conference proceedings.</p>
              </div>
            </div>

             <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Expert Keynotes</h1>
              </div>
              <div className='card-body'> 
                  <p>Gain insights from distinguished speakers and thought leaders.</p>
              </div>
            </div>

            <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Interactive Workshops</h1>
              </div>
              <div className='card-body'> 
                  <p>Engage in hands-on learning and practical skill development.</p>
              </div>
            </div>

            <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Collaborative Projects</h1>
              </div>
              <div className='card-body'> 
                  <p>Discover potential collaborators for future research and innovation.</p>
              </div>
            </div>
            
            <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Professional Development</h1>
              </div>
              <div className='card-body'> 
                  <p>Enhance your career with gather new knowledge and skills.</p>
              </div>
            </div>

            <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Student Engagement</h1>
              </div>
              <div className='card-body'> 
                  <p>Encourage student participation with special sessions and awards.</p>
              </div>
            </div>

            <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>Research Showcases</h1>
              </div>
              <div className='card-body'> 
                  <p>Present and discuss your research with a global audience</p>
              </div>
            </div>

            <div className='card2' data-aos="flip-up">
              <div className='card-head'>
                  <h1>CERADA Awards </h1>
              </div>
              <div className='card-body'> 
                  <p>Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.</p>
              </div>
            </div>
            
          </div>

        </div>


        <div data-aos="flip-down" className='flex flex-col bg-green-200 m-10 p-4 rounded-xl text-gray-800 justify-self-center gap-2'>
          <h1 className='text-3xl text-center font-medium'>Proceedings & Publications</h1>
          <p>Note: ICSAPCI-2026 Proceedings will be submitted to the Web of science Book citation index 
            (BkCI) and Scopus for evaluation and indexing purposes (T&C)* apply.</p>
        </div>

        <Footer/>

        
    </div>
  )
}

export default Home