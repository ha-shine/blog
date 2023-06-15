import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { Creation, CreationSocialLink, CreationSocialLinkType } from "./types";

const dataDirectory = path.join(process.cwd(), "data");

export function getAllCreationPosts(): Array<Creation> {
  const creationRawData = fs.readFileSync(
    path.join(dataDirectory, "creations.yml")
  );
  const creationYamlData = yaml.load(creationRawData);
  return creationYamlData["creations"].map((data) => {
    return {
      id: data["id"],
      rawTitle: data["title"],
      title: data["title"].replace(/\$(.*)\$/, "$1"),
      thumbnail: data["thumbnail"],
      social: data["social"] != undefined ? data["social"].map(toSocial) : [],
      includes: data["includes"] != undefined ? data["includes"] : [],
    };
  });
}

function toSocial(data): CreationSocialLink {
  const url = data["url"];
  let linkType = CreationSocialLinkType.Youtube;
  let normalisedType = data["type"].toLowerCase();

  switch (normalisedType) {
    case "youtube":
      linkType = CreationSocialLinkType.Youtube;
      break;
    case "instagram":
      linkType = CreationSocialLinkType.Instagram;
      break;
    case "tiktok":
      linkType = CreationSocialLinkType.TikTok;
      break;
    default:
      throw new Error(`Unknown link type ${data["type"]}`);
  }

  return { url, type: linkType };
}
