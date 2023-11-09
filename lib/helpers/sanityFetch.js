
import {indexQuery} from '@config/sanityQueries'
import {client } from '@config/sanityClient'


export async function getAllPosts() {
  /* const query = `*[_type == "post"] | order(_createdAt desc) `; */
  const query = indexQuery;
  const data = await client.fetch(query);  
  return data;
  }