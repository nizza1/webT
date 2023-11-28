import React from 'react'
import styles from './styles.module.css'
import {getAllPosts} from '@helpers/sanityFetch'
import Link from 'next/link';
import Image from 'next/image';

const posts = await getAllPosts();

/* export async function generateMetadata({ params }) {
  const allPosts = await getAllPosts(params.slug);
  return { title: allPosts };
} */

/* export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
} */

const Blog = () => {

  if (!posts || posts.length === 0) {
    return <div className={styles.page}>
    <div className={styles.innerContainer}>
      <h1>No posts available.</h1>
    </div>
  </div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.innerContainer}>
        <h1>Blog</h1>

        {posts.map((post)=> (
          <div key={post._id} className={styles.singleContainer}>
           
            {post.mainImageUrl && (
              <div className={styles.imgContainer}> 
                  <Image
               className={styles.img}
                src={post.mainImageUrl}
                width={500}
                height={300}
                alt={post.title || 'Post Image'}
                style={{
                  objectFit: 'cover'
                }} // This will maintain the aspect ratio of the image
              />
              </div>
            
            )}

            <div className={styles.textContainer}>
            <h2 >
                    {post.title}
            </h2>
            <p >
              {post.publishedAt.split("T")[0]}
            </p>
            <div >
                 <Link href={`/blog/${post.slug}`} >mehr dazu</Link>
             </div>
            </div>
            
              
          </div>
         ))}
      </div>
    </div>
  )
}

export default Blog