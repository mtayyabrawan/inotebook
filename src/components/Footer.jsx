import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const socialMedia = [
    {
      name: "GitHub",
      icon: githubIcon,
      link: "https://github.com/mtayyabrawan",
    },
    {
      name: "Facebook",
      icon: facebookIcon,
      link: "https://facebook.com/mtayyabrawan",
    },
    {
      name: "Twitter",
      icon: twitterIcon,
      link: "https://x.com/mtayyabrawan",
    },
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      link: "https://linkedin.com/in/mtayyabrawan",
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      link: "https://instagram.com/mtayyabrawan",
    },
  ];
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="relative bottom-0 w-full bg-gray-100 py-6 text-gray-800 selection:bg-[#111827] selection:text-white dark:bg-gray-900 dark:text-gray-300 dark:selection:bg-yellow-500 dark:selection:text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h1 className="flex items-baseline text-3xl font-bold">
              <span className="dark:text-gray-200">i</span>
              <span className="text-purple-500">Notebook</span>
            </h1>
            <p className="text-sm">&copy; {year} All Rights Reserved</p>
          </div>
          <div className="flex space-x-4 rounded-xl bg-yellow-300 p-2">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <span className="sr-only">{media.name}</span>
                <img src={media.icon} className="h-6 w-6" alt={media.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
