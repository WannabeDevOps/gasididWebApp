// import './home.css'
import Link from 'next/link';
import '../globals.css'
import github_logo from './homeImg/github.png'
import ig_logo from './homeImg/ig.png'
import linkin_logo from './homeImg/linkin.png'
// import Home_1 from ''

export default function MainHome() {
    return (
    <>
    {/* Page 1 Container*/}
        <div className="bg-grey-100 min-h-full" >
        {/* mx-auto px-4 sm:px-6 lg:px-8 py-20 */}
        <div className="bg-home-wallpaper bg-cover bg-center w-full h-screen  flex justify-between">
            


                    <div className=" m-20">
                        <img width={500} height={800} src="https://i.pinimg.com/originals/4a/47/ad/4a47ada349f163cc026661083e3e2b70.png" alt="Person" className="max-w-full h-auto" />
                    </div>

                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <div className="text-center md:text-left">
                            <p className="text-4xl font-bold text-orange-500 opacity-80">Hello I'm</p>
                            <h1 className="text-9xl font-black mb-4">GASIDID</h1>
                            <h1 className="text-9xl font-black mb-4">CHORRAK</h1>
                            <p className="text-lg mb-4">I'm a full-stack web developer including DevOps and Deep learning image processing.</p>
                        </div>
                    </div>

                    {/* SideTab */}
                    <div className="flex flex-col md:flex-column mt-8">
                            <Link href="https://github.com/EiForWork"><img className="w-16 h-16" src={github_logo.src} alt="GitHub Logo"/></Link>
                            <Link href="https://github.com/EiForWork"><img className="w-16 h-16" src={ig_logo.src} alt="Ig Logo"/></Link>
                            <Link href="https://github.com/EiForWork"><img className="w-16 h-16" src={linkin_logo.src} alt="Linkin Logo"/></Link>
                    </div>
                    {/* SideTab End */}

            </div>
        </div>
    </>
    );
}