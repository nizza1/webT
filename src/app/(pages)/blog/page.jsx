import React from 'react'
import styles from './styles.module.css'
import {getAllPosts} from '@helpers/sanityFetch'
import Link from 'next/link';
import Image from 'next/image';

 const posts = await getAllPosts();
  
console.log(posts);

const Blog = () => {
  return (
    <div className={styles.page}>
      <div className={styles.innerContainer}>
        <h1>Blog</h1>

        {posts.map((post)=> (
          <div key={post._id} className={styles.singleContainer}>
            <h3 >
                    {post.title}
            </h3>
            {post.mainImageUrl && (
              <Image
               className={styles.imgPosts}
                src={post.mainImageUrl}
                width={300}
                height={300}
                alt={post.title || 'Post Image'}
                style={{
                  objectFit: 'cover'
                }} // This will maintain the aspect ratio of the image
              />
            )}
            <p >
              {post.publishedAt.split("T")[0]}
            </p>
            <div >
                 <Link href={`/blog/${post.slug}`} >mehr dazu</Link>
             </div>
              
          </div>
         ))}
      </div>
    </div>
  )
}

export default Blog