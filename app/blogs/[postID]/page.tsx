
import fs from "fs";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import matter from "gray-matter";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import getPostMetadata from "../../component/getPostMetaData";
const POSTFOLDER = "app/posts/";

const getPostContent = (postid: string) => {
  const folder = POSTFOLDER;
  const file = `${folder}${postid}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterContent = matter(content);
  return matterContent;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
};

const postDetails = ({ params }: { params: { postID: string } }) => {
  const postid = params.postID;
  const post = getPostContent(postid);
  return (
    <div className="flex flex-col p-4 my-4">
      <Link href="/blogs" className="flex items-center text-blue-600 ">
        <FaArrowLeft className="mr-2" />
        <p className="text-l xl:text-xl ">Back to Blogs</p>
      </Link>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-green-600">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose dark:prose-invert text-white min-w-fit">
        <ReactMarkdown remarkPlugins={[gfm]}>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default postDetails;
