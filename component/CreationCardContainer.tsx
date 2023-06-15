import {
  Creation,
  CreationIncludeLink,
  CreationSocialLink,
  CreationSocialLinkType,
} from "../lib/types";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/layout";
import YoutubeIcon from "../icons/youtube.svg";
import InstagramIcon from "../icons/instagram.svg";
import TiktokIcon from "../icons/tiktok.svg";

export type Props = {
  creations: Array<Creation>;
};

export default function CreationCardContainer(props: Props) {
  return (
    <>
      <Box borderRadius="full">
        {props.creations.map((creation) => (
          <CreationCard key={creation.id} creation={creation} />
        ))}
      </Box>
    </>
  );
}
function CreationCard({ creation }) {
  // Find the emphasised string's index and the content, which will give me
  // the length of the string. This information is used to split the string
  // into three parts, first part that comes before the emphasised string,
  // the emphasised string itself, and the part that comes afterward.
  const indexOfEmphasised = creation.rawTitle.search(/\$(.*)\$/);
  const emphasisedString = creation.rawTitle.match(/\$(.*)\$/)[0].slice(1, -1);
  const firstPart = creation.rawTitle.slice(0, indexOfEmphasised);
  const lastPart = creation.rawTitle.slice(
    indexOfEmphasised + emphasisedString.length + 2
  );

  return (
    <Flex
      backgroundColor="gray.800"
      _even={{ backgroundColor: "#5A1416" }}
      direction={["column", "row"]}
    >
      <VStack w={["100%", "50%"]} alignItems="flex-start" p={["4", "8"]}>
        <Heading color="gray.50" fontWeight="bold">
          {firstPart}
          <Text as="span" color="#7FDDDA">
            {emphasisedString}
          </Text>
          {lastPart}
        </Heading>
        <Box>
          {creation.includes.map((include) => (
            <IncludeLink key={include.url} {...include} />
          ))}
        </Box>
        <Spacer display={["none", "flex"]} />
        <HStack spacing="3">
          {creation.social.map((social) => (
            <SocialLink key={social.url} {...social} />
          ))}
        </HStack>
      </VStack>
      <Box
        w={["100%", "50%"]}
        height={["200px", "300px"]}
        backgroundImage={`url(${creation.thumbnail})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Box>
    </Flex>
  );
}

function IncludeLink(props: CreationIncludeLink) {
  return (
    <Link
      href={props.url}
      target="__blank"
      fontFamily="body"
      fontSize="lg"
      color="gray.50"
      borderBottom="1px"
      borderColor="gray.200"
      _hover={{
        textDecoration: "none",
        color: "teal.200",
        borderColor: "teal.200",
      }}
      isExternal
    >
      {props.title}
    </Link>
  );
}

function SocialLink(props: CreationSocialLink) {
  let icon = <YoutubeIcon />;
  let hoverFill = "teal.200";

  switch (props.type) {
    case CreationSocialLinkType.Youtube:
      icon = <YoutubeIcon />;
      hoverFill = "#FF0000";
      break;
    case CreationSocialLinkType.Instagram:
      icon = <InstagramIcon />;
      hoverFill = "#FCCC63";
      break;
    case CreationSocialLinkType.TikTok:
      icon = <TiktokIcon />;
      hoverFill = "teal.200";
      break;
  }

  return (
    <Link href={props.url} target="__blank" isExternal>
      <Icon boxSize="2em" fill="gray.50" _hover={{ fill: hoverFill }}>
        {icon}
      </Icon>
    </Link>
  );
}
