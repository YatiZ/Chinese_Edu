import CountUpNumber from "../shared/CountUpNumber"

const HeroSection = () => {
  return (
    <div className="mx-10">
      <section className='flex px-4 items-center gap-12 container mx-auto'>
      <div className='py-10 h-full'>
        <h1 className='font-heading mb-6'>
                Explore Our Chinese Course
            </h1>
            <p className='text-[#4a4a4a] dark:text-[#ffffea] mb-12 max-w-lg'>
            Experience an Exquisite Hotel Immersed in Rich History and Timeless
            Elegance.
            </p>
            <button className='btn-primary'>Get Started</button>
        </div>
       
      </section>
        
        
            {/* Room Description */}
            <div className='flex justify-between mt-12'>
                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs lg:text-xl text-center'>Basic Room</p>
                    <CountUpNumber duration={3000} endValue={200} />
                </div>

                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
                    <CountUpNumber duration={3000} endValue={100} />
                </div>

                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs lg:text-xl text-center'>Suite</p>
                    <CountUpNumber duration={3000} endValue={50} />
                </div>

                </div>   
            

            
            <div className='md:grid hidden gap-8 grid-cols-1'>
                <div className='rounded-2xl overflow-hidden h-80 mb-5'>
                    <img src='https://blog.keatschinese.com/wp-content/uploads/2020/12/learning-the-chinese-language.jpg' alt='' height={400}  className='img scale-animation'/>
                </div>

            <div className='grid grid-cols-2 gap-8 h-48'>
            <div className='rounded-2xl overflow-hidden h-48'>
                    <img src='https://pbio.uniska-bjm.ac.id/wp-content/uploads/2022/11/IMG-20221103-WA0001-723x1024.jpg' alt='' width={300} height={300} className='img scale-animation'/>
            </div>
            <div className='rounded-2xl overflow-hidden h-48'>
                    <img src='https://i.ebayimg.com/images/g/qtkAAOSw~oFXMikK/s-l1600.jpg' alt='' width={300} height={300} className='img scale-animation'/>
            </div>
            </div>
            </div>
    
    
      
    </div>
  )
}

export default HeroSection