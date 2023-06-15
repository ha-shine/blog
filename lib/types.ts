// Types are moved into their own file because these types are required by the
// components from frontend which will not have access to modules like "fs".

export type Creation = {
  id: string;
  rawTitle: string;
  title: string;
  thumbnail: string;
  social: Array<CreationSocialLink>;
  includes: Array<CreationIncludeLink>;
};

export type CreationSocialLink = {
  url: string;
  type: CreationSocialLinkType;
};

export type CreationIncludeLink = {
  title: string;
  url: string;
};

export const enum CreationSocialLinkType {
  Youtube,
  Instagram,
  TikTok,
}
