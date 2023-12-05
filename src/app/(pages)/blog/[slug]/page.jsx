

import React, { Suspense } from 'react';
import { getPostBySlug } from '@helpers/sanityFetch';
import { PortableText } from "../plugins/previews/portabletext";

import Image from 'next/image';
import styles from './styles.module.css'
import { parseISO, format } from "date-fns";

import client from '@config/sanityClient'
/* import BlockContent from '@sanity/block-content-to-react'; */
import imageUrlBuilder from '@sanity/image-url';


export async function generateMetadata({ params: { slug } }) {
  const postMeta = await getPostBySlug(slug);
  const description = postMeta.body[0].children[0].text;
  if (!postMeta || postMeta.length === 0) {
    return {
      title: 'post not found'
    }
  }
  
  return {
    title: postMeta.title ,
   description
}}

async function PostContent({ slug }) {

  const post = await getPostBySlug(slug);

 
  if (!post || post.length === 0) {
    return <div className={styles.container}>
    <div className={styles.innerContainer}>
      <h1>Post not found</h1>
    </div>
  </div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.postContainer}>
          <div className={styles.titleContainer}>
             <h1>{post.title}</h1>
             <p>{post.publishedAt.split("T")[0]}</p>
             <p>{post?.categories? post.categories : null}</p>
          </div>
       
        
        {post.mainImageUrl && (
          <div className={styles.imageContainer}>
          <Image
          className={styles.mainImage}
          src={post.mainImageUrl}
          loading="lazy"
          width={700}
          height={500}
          style={{
            width:'100%',
            height:'100%',
            objectFit: 'cover'
          }}
          alt={post.title || 'Post Image'}
          />
        </div>
      )}
       
       <div className={styles.postBody}>
       {/* <PortableText
              value={post.body}
              // Add serializers here if you have custom rendering for some block types
            /> */}
            {post.body && <PortableText value={post.body} />}
      {/*         <BlockContent
              className={styles.blockContent}
          blocks={post.body}
          projectId='j8d0v991'
          dataset='production'
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          urlFor={urlFor}
        /> */}
       </div>
        </div>
     
      </div>
      
     
    </div>
  );
}

export default async function Page({ params: { slug } }) {
  return (
    <>
      <Suspense fallback={<div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1>Loading...</h1>
        
        </div></div>}>
        <PostContent slug={slug} />
      </Suspense>
    </>
  );
}
