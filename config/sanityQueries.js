const postFields = `
  _id,
  title,
  "publishedAt": publishedAt,
  "slug": slug.current,
  "mainImageUrl": mainImage.asset->url,
  "body": body,
`;

export const indexQuery = `
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;