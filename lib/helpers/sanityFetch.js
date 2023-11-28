
import {indexQuery ,postBySlugQuery} from './sanityQueries'
import {client } from '@config/sanityClient'


export async function getAllPosts() {
  /* const query = `*[_type == "post"] | order(_createdAt desc) `; */
  const query = indexQuery;
  const data = await client.fetch(query );  
  return data;

  }

  export async function getPostBySlug(slug) {
    const query = postBySlugQuery;
    const post = await client.fetch(query, { slug });
    return post;
  }