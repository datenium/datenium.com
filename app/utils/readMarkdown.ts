import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';

interface PostData {
  id: string;
  title: string;
  date: string;
  // Add any other properties from your matterResult.data here
}

interface SinglePost {
  title: string;
  date: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'app/blogs/posts');

export function parseMarkdownFile(fileName: string): SinglePost  {
  const fullPath = path.join(postsDirectory, fileName+ '.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Extract other metadata properties as needed

  return {
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    content: matterResult.content as string,
    // Add any other properties from your matterResult.data here
  };
}


export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // console.log(fileContents);
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    console.log(matterResult.content);
    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      // Add any other properties from your matterResult.data here
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
