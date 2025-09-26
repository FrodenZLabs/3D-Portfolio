import { FaArrowRight } from "react-icons/fa6";
import { socialImgs } from "../constants";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  const navLinks = [
    { id: 1, href: "Home" },
    { id: 2, href: "About" },
    { id: 3, href: "Projects" },
    { id: 4, href: "Skills" },
    { id: 5, href: "Contact" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-[1.75rem] font-bold pb-2">
              Stephen Kibe
            </h3>
            <p className="text-lg text-cyan-400 pb-5">Fullstack Developer</p>
            <p>Thank you for visiting my personal portfolio.</p>
            <p>Lets connect over socials.</p>
            <p>Open to any feedbacks.</p>
          </div>

          <div className="socials flex-col">
            <h3 className="text-white-50 text-2xl font-bold">Contact Info</h3>
            <div className="text-[0.9rem] font-semibold">
              <p className="flex items-center gap-3 mb-1">
                <MdEmail /> stephenkibe8155@gmail.com
              </p>
              <p className="flex items-center gap-3 mb-1">
                <MdLocalPhone /> +(254)-111-927-170
              </p>
              <p className="flex items-center gap-3">
                <MdLocationOn /> Nairobi, Kenya
              </p>
            </div>
            <div className="flex">
              {socialImgs.map((socialImg, index) => (
                <div key={index} className="icon">
                  <img src={socialImg.imgPath} alt={socialImg.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full xs:w-2/5 mt-8 sm:w-2/5 sm:mt-0 lg:w-[30%] sm:pl-20 lg:pl-12 justify-start">
            <h3 className="text-white-50 text-[1.35rem] xs:text-2xl font-bold pb-4">
              Quick Links
            </h3>
            {navLinks.map(({ id, href }) => (
              <div key={id} className="group w-fit px-3">
                <Link to={href} smooth duration={500}>
                  <div className="flex items-center justify-between w-fit gap-2 font-semibold text-white-50 cursor-pointer">
                    <FaArrowRight />
                    <span className="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:text-transparent duration-500 group-hover:animate-pulse">
                      {href}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="flex justify-center">
        <p className="text-center text-white-50 md:text-end">
          &copy; {new Date().getFullYear()} FrodenZ Labs. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
