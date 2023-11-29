
/* import { createClient } from 'next-sanity' */
import { createClient } from '@sanity/client'

import createImageUrlBuilder from '@sanity/image-url';

const Sanity_id = process.env.sanity_id
const Sanity_project = process.env.sanity_project


export const config = {

    projectId: Sanity_id, // you can find this in your sanity.json
    dataset: Sanity_project, // or the name you chose in sanity.json
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2021-03-25', // use a UTC date string
  };


export const client = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);