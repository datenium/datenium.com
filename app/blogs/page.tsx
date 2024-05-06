import Link from "next/link";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
const POSTFOLDER = "app/posts/"

const getPostMetadata = () => {
  const files = fs.readdirSync(POSTFOLDER);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${POSTFOLDER}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const BlogPage: React.FC = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <article key={post.slug} className="m-2">
    <Link href={`/blogs/${post.slug}`} className="block border p-4 rounded transition duration-300 hover:shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-2">{post.title}</h4>
            <p className="text-xs md:text-sm text-gray-600">{post.subtitle}</p>
          </div>
          <p className="text-xs md:text-sm font-small text-gray-500 mt-2 md:mt-0">
            {post.date}
          </p>
        </div>
    </Link>
  </article>
  ));
  return (
    <div className="min-h-screen ">
        {postPreviews}
    </div>
  );
};

export default BlogPage;
