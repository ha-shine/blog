import TwitterIcon from "../icons/twitter.svg";
import GithubIcon from "../icons/github.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import { Box, Flex, HStack, Icon, Link } from "@chakra-ui/react";

export default function SocialIconGroup() {
  const links = [
    { link: "https://twitter.com/shinedotrocks", icon: <TwitterIcon /> },
    { link: "https://github.com/ha-shine", icon: <GithubIcon /> },
    {
      link: "https://www.linkedin.com/in/htet-aung-shine-79654192/",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <HStack spacing="16">
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
    <Link
      href={link}
      target="__blank"
      bgColor="#484848"
      borderRadius={50}
      fill="white"
      _hover={{ background: "#ECECEC", fill: "gray.700" }}
    >
      <Flex p={3.5}>
        <Icon boxSize="1.5em">{children}</Icon>
      </Flex>
    </Link>
  );
}
