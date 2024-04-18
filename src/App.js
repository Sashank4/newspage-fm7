import './App.css';
import Navbar from './includes/navbar.js';
import mainImg from './assets/images/image-web-3-desktop.jpg'
import mainImgMobile from './assets/images/image-web-3-mobile.jpg'
import sencondImg1 from './assets/images/image-retro-pcs.jpg'
import sencondImg2 from './assets/images/image-top-laptops.jpg'
import sencondImg3 from './assets/images/image-gaming-growth.jpg'

function App() {
  return (
    <div className="App p-6 md:p-24"> 
      <Navbar/>

      <div className='pt-6 flex-column md:grid md:grid-cols-3 md:grid-rows-2 gap-8 grid-flow-row-dense grid-auto-rows'>
        <div className='col-span-2 hidden sm:block'>
          <img src={mainImg} alt='mainImg'/>
        </div>
        <div className='md:hidden'>
          <img src={mainImgMobile} alt='mainImgMobile'/>
        </div>
        <div className='md:mt-0 mt-4 latest-news row-span-2 h-5/6'>
          <div className='p-10'>
              <p className=' heading text-4xl pb-4 font-bold text-start text-white'>New</p>
              <div className='pt-4'>
              <p className='text-start pt-3 mainTag text-white text-2xl font-medium'>Hydrogen VS Electric Cars</p>
              <p className='text-start pt-3 subTag pb-8 text-white text-lg font-light'>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <hr/> 
              <div className='pt-4'>
              <p className='text-start pt-3  mainTag text-white text-2xl font-medium'>The Downsides of AI Artistry</p>
              <p className='text-start pt-3 subTag pb-8 text-white text-lg font-light'>What are the possible adverse effects of on-demand AI image generation?</p>
              </div>
              <hr/>
              <div className='pt-4'>
              <p className='text-start pt-3 mainTag text-white text-2xl font-medium'>Is VC Funding Drying Up?</p>
              <p className='text-start pt-3 subTag text-white text-lg font-light'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
          </div>
        </div>

        <div>
          <p className='text-7xl bright-heading font-bold text-start'>The Bright Future of Web 3.0?</p>
        </div>

        <div className='fourth-column p-4 '>
          <p className='text-start text-lg pb-12'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?</p>
          <button className='read-more-button pl-6 pr-6 float-left'><p className='p-2 tracking-wider font-semibold text-white'>Read More</p></button>
        </div>
      </div>

      <div className='pt-6 flex-column md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8 thirdSection'>
        <div className='flex pt-4 pb-4 md:p-2'>
           <div> <img src={sencondImg1} alt='secondImg1' /> </div>
            <div className='pl-4 pr-4 flex-column' >
              <p className='text-start font-bold text-4xl md:pb-4 numbering'>01</p>
              <p className='text-start font-bold text-lg md:pb-2 heading'>Reviving Retro PCs</p>
              <p className='text-start leading-normal data'>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className='flex pt-4 pb-4'>
           <div> <img src={sencondImg2} alt='secondImg1' /> </div>
            <div className='pl-4 pr-4 flex-column'>
              <p className='text-start font-bold text-4xl md:pb-4 numbering'>02</p>
              <p className='text-start font-bold text-lg md:pb-2 heading'>Top 10 Laptops of 2022</p>
              <p className='text-start leading-normal data'>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className='flex pt-4 pb-4'>
           <div> <img src={sencondImg3} alt='secondImg1' /> </div>
            <div className='pl-4 pr-4 flex-column'>
              <p className='text-start font-bold text-4xl md:pb-4 numbering'>03</p>
              <p className='text-start font-bold text-lg md:pb-2 heading'>The Growth of Gaming</p>
              <p className='text-start leading-normal data'>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
