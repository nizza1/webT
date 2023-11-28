
/* import { createClient } from 'next-sanity' */
import { createClient } from '@sanity/client'

import createImageUrlBuilder from '@sanity/image-url';


export const config = {

    projectId: 'j8d0v991', // you can find this in your sanity.json
    dataset: 'production', // or the name you chose in sanity.json
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: '2021-03-25', // use a UTC date string
  };


export const client = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);