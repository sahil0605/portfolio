

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";



const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/sahil0605" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="mailto:sahilsinghsolanki2460@gmail.com" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a>
      <a href="https://www.linkedin.com/in/sahilsinghsolanki/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
      <a href="https://docs.google.com/document/d/1RY-7v4m43cAS1HeUn0Ewfu-h5pnJfpGt0hG9cXR-5Aw/edit?usp=sharing" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faFilePdf}
        />
      </a>
      <a href="https://leetcode.com/sahil0605/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faCode}
        />
      </a> 
      
    </div>
  );
};

export default SocialLinks;
