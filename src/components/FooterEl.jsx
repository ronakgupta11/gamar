import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Footer } from 'flowbite-react';




export function FooterEl(){
return(
<Footer container className='bg-slate-900  rounded-br-none rounded-bl-none'>
<div
 
 >
  <div 
   
  className="grid w-full justify-between  sm:flex sm:justify-between md:flex md:grid-cols-1">
    <div>
      {/* <Footer.Brand
        href="https://flowbite.com"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
      /> */}
    </div>
    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
      <div>
        <Footer.Title title="about" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">The Team</Footer.Link>
          <Footer.Link href="#"> Our Story</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Follow us" />
        <Footer.LinkGroup col>
          <Footer.Link href="https://github.com/ronakgupta11/gamar">Github</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Legal" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
        </Footer.LinkGroup>
      </div>
    </div>
  </div>
  {/* <Footer.Divider />
  <div className="w-full sm:flex sm:items-center sm:justify-between">
    <Footer.Copyright href="#" by="gamAr™" year={2023} />
    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
      
      <Footer.Icon href="https://github.com/ronakgupta11/gamar" icon={BsGithub} />
    </div>
  </div> */}
</div>
</Footer>
)

}