import { Facebook, Twitter, Linkedin, Youtube, Whatsapp , Instagram, Github  } from "react-bootstrap-icons";
const XingIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path d="M11.222 0h3.284L9.034 9.186 16 16h-3.284L6.034 9.186 11.222 0zM4.778 3.32h3.284L5.27 8.16l2.792 4.52H4.778L1.986 8.16l2.792-4.84z"/>
  </svg>
);
export const socialIcons = [
  {
     id: 1,
     icon: <Facebook />,
     link: "https://www.facebook.com/HussamAlnabelsi",
    
   },
   {
     id: 2,
     icon: <XingIcon color="#000000" size={20} />,
     link: "https://www.xing.com/profile/Hussam_ALNABELSI",
   },
   {
     id: 3,
     icon: <Linkedin />,
     link: "https://www.linkedin.com/in/hussam-alnabelsi/",
   },
  
   {
     id: 5,
     icon: <Instagram />,
     link: "https://www.instagram.com/hussamalnabelsi/",
   },
  {
       id: 6,
       icon: <Github  color="#000000" />,
       link: "https://github.com/HussamFull", 
     },
];
