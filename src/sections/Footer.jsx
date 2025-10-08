import {FaWhatsapp} from 'react-icons/fa'
import { BiMailSend } from "react-icons/bi"


const Footer = () => {
    return (
        <footer>
            <div className="container py-10">
                <div className="flex w-full max-md:flex-col">
                    <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
                        <p className="opacity-70">
                            Developed by Ebikeme Ese
                        </p>

                        <div className="flex items-center justify-center sm:ml-auto gap-2">
                            <a 
                                href='mailto:ebikemeese@gmail.com?subject=Xora'
                                target="_blank"
                                className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
                            >
                                <BiMailSend />
                            </a>
                                
                            <a 
                                href='https://wa.me/2348123208257'
                                target="_blank"
                                className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer