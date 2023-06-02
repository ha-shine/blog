import YoutubeIcon from "../icons/youtube.svg";
import TwitterIcon from "../icons/twitter.svg";
import InstagramIcon from "../icons/instagram.svg";
import TiktokIcon from "../icons/tiktok.svg";
import GithubIcon from "../icons/github.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import { Icon, Link } from "@chakra-ui/react";

export default function SocialIconGroup() {
  const links = [
    { link: "https://youtube.com/@shinedotrocks", icon: <YoutubeIcon /> },
    { link: "https://twitter.com/shinedotrocks", icon: <TwitterIcon /> },
    { link: "https://instagram.com/shinedotrocks", icon: <InstagramIcon /> },
    { link: "https://tiktok.com/@shinedotrocks", icon: <TiktokIcon /> },
    { link: "https://github.com/ha-shine", icon: <GithubIcon /> },
    {
      link: "https://www.linkedin.com/in/htet-aung-shine-79654192/",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <>
      {links.map(({ link, icon }) => (
        <SocialIcon key={link} link={link}>
          {icon}
        </SocialIcon>
      ))}
    </>
  );
}

function SocialIcon({ link, children }) {
  return (
    <Link href={link} target="__blank">
      <Icon boxSize="2.5em" fill="gray.50" mr="6">
        {children}
      </Icon>
    </Link>
  );
}
