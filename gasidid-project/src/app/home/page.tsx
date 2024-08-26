'use client';

import Link from 'next/link';
import '../globals.css'
import github_logo from './homeImg/github.png'
import ig_logo from './homeImg/ig.png'
import linkin_logo from './homeImg/linkin.png'
import CardSlider from './card/page';

export default function MainHome() {
    return (
    <>


    {/* Page 1 Container*/}
        <div className="bg-home-wallpaper bg-cover bg-center">
            
                {/* Links */}
                <div className="w-fullscreen h-28 flex justify-evenly item-center">
                    <div className="max-w-screen-xl w-full flex justify-between items-center px-4 text-2xl font-semibold">
                        <Link href="/" className="hover:text-orange-500">Home</Link>
                        <Link href="/about" className="hover:text-orange-500">Certificate</Link>
                        <Link href="/services" className="hover:text-orange-500">Skill & Tools</Link>
                        <Link href="/services" className="hover:text-orange-500">Experience</Link>
                        <Link href="/contacts" className="bg-mainOrg text-white w-60 h-16 flex items-center justify-center rounded-lg">Contacts</Link>
                    </div>
                </div>

                <div className="w-full h-screen  flex justify-between items-center px-4 ">

                    {/* Person */}
                    <div className=" m-20 w-fullscreen">
                        <img width={500} height={200} src="https://i.pinimg.com/originals/4a/47/ad/4a47ada349f163cc026661083e3e2b70.png" alt="Person" 
                        className="h-screen object-cover" />
                    </div>
                    {/* Person */}

                    {/* Name Introduction */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <div className="text-center md:text-left">
                            <p className="text-4xl font-bold text-orange-500 opacity-80">Hello I'm</p>
                            <h1 className="text-9xl font-black mb-4">GASIDID</h1>
                            <h1 className="text-9xl font-black mb-4">CHORRAK</h1>

                            <div className="flex justify">
                                <div className=""><div className="w-2 h-48 bg-mainOrg ml-4 self-stretch"></div></div>
                                <div className="ml-4">
                                    <p className="text-lg mb-4">I'm a full-stack web developer including DevOps and Deep learning image processing.</p>
                                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos hic pariatur blanditiis iure assumenda tenetur commodi corrupti, expedita voluptatum ea, corporis alias mollitia dolor iste, praesentium sed distinctio? Voluptas.</p>
                                    <p className="text-lg mb-4">Thank you for see my website , Have a good day !!!</p>  
                                </div>
                            </div>  

                        </div>
                    </div>
                    {/* Name Introduction */}

                    {/* SideTab */}
                    <div className="flex flex-col md:flex-column mt-8  space-y-5">
                            <Link href="https://github.com/EiForWork"><img className="w-16 h-16" src={github_logo.src} alt="GitHub Logo"/></Link>
                            <Link href="https://github.com/EiForWork"><img className="w-16 h-16" src={ig_logo.src} alt="Ig Logo"/></Link>
                            <Link href="https://github.com/EiForWork"><img className="w-16 h-16" src={linkin_logo.src} alt="Linkin Logo"/></Link>
                    </div>
                    {/* SideTab */}
        
                 </div>
        </div>
    {/* Page 1 Container*/}

    {/* Page 2 Educations */}

    <div className=" w-fullscreen h-fullscreen bg-bgGrey">

            {/* Topic */}
            <div className="h-48 flex flex-col items-center justify-center">
                <h1 className="text-7xl font-bold mb-8">Educations</h1>
                <div className=""><div className="w-96 h-2 bg-mainOrg"></div></div>
            </div>

            {/* Education */}
            <div className=" w-fullscreen h-full flex">

                {/* Left */}
                <div className="h-full w-9/12 flex flex-col items-center mb-8">

                    <div className=" w-5/6 flex text-4xl font-bold"> 
                        <p className="">Srinakharinwirot University</p>
                        <p className="text-mainOrg"> | Compouter Engineering</p>
                    </div>

                    <div className="relative bg-swueg bg-cover bg-center w-5/6 mt-2 rounded-lg overflow-hidden text-white" style={{ height: '600px' }}>

                        <ul className="list-disc list-inside relative z-10 p-4">
                            <li className="text-lg">Bachelor's degree of Engineering</li>
                            <li className="text-lg">
                                Department of <span className="text-red-500">Computer Engineering</span>
                            </li>
                            <li className="text-lg">GPA 4.00</li>
                            <li className="text-lg">2022-2025</li>


                            <div className="text-white flex">
                                <div className="w-1 h-22 bg-red-200"></div>
                                <div className="ml-4">
                                <p>What skill and question</p>
                                    <p>What skill and question</p>
                                    <p>What skill and question</p>
                                    <p>What skill and question</p>
                                </div>
                            </div>
                        </ul>

                        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
                
                    </div>

                </div>

        {/* Right */}
        <div className="w-full md:w-2/6 ml-8 mr-8"style={{ height: '700px',width:'500px' }}>
            <img width={500} height={200} src="https://i.pinimg.com/originals/4a/47/ad/4a47ada349f163cc026661083e3e2b70.png" alt="Person" 
            className="object-contain w-full h-full" />
        </div>

            </div>
    </div>


    {/* Page 2 Educations */}


    {/* Page 3 Certifications */}



            {/* Topic */}
            <div className="h-48 flex flex-col items-center justify-center">
                <h1 className="text-7xl font-bold mb-8">Certifications</h1>
                <div className=""><div className="w-96 h-2 bg-mainOrg"></div></div>
            </div>

            <div className="bg-red-200 w-fullscreen h-96 flex">



            <CardSlider/>


            </div>












    
    {/* Page 3 Certifications */}



    </>
    );
}