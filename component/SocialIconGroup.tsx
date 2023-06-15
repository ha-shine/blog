import YoutubeIcon from "../icons/youtube.svg";
import TwitterIcon from "../icons/twitter.svg";
import InstagramIcon from "../icons/instagram.svg";
import TiktokIcon from "../icons/tiktok.svg";
import GithubIcon from "../icons/github.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import { HStack, Icon, Link } from "@chakra-ui/react";

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
    <HStack spacing="5">
      {links.map(({ link, icon }) => (
        <SocialIcon key={link} link={link}>
          {icon}
        </SocialIcon>
      ))}
    </HStack>
  );
}

function SocialIcon({ link, children }) {
  return (
    <Link href={link} target="__blank">
      <Icon boxSize="2.5em" fill="gray.50" _hover={{ fill: "teal.200" }}>
        {children}
      </Icon>
    </Link>
  );
}
