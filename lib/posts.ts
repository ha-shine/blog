import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type Post = {
  id: string,
  serial: string,
  filename: string,
  cover: string,
  title: string,
  description: string,
  created: string,
  lastUpdated: string
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): Array<Post> {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fileAbsPath = path.join(postsDirectory, fileName);
    const content = fs.readFileSync(fileAbsPath, "utf-8");
    const data = matter(content).data;
    const serial = fileName.slice(0, 4);
    const cover = `${serial}-cover.png`;
    return {
      id: fileName.slice(5, -3),
      serial,
      cover,
      filename: fileName,
      title: data["title"],
      description: data["description"],
      created: data["created"],
      lastUpdated: data["last_updated"]
    };
  });
}

export function getPostContent(post: Post): string {
  const filepath = path.join(postsDirectory, post.filename);
  return fs.readFileSync(filepath, "utf-8");
}