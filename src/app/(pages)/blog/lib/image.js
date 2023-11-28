import createImageUrlBuilder from "@sanity/image-url";
/* import { dataset, projectId } from "@/lib/sanity/config"; */
const Sanity_id = process.env.sanity_id
const Sanity_project = process.env.sanity_project
const projectId = Sanity_id;
const dataset = Sanity_project;
const imageBuilder = createImageUrlBuilder({ 
    projectId, dataset 
});

export const urlForImage = source => {
  if (!source || !source.asset) return;
  const dimensions = source?.asset?._ref.split("-")[2];

  const [width, height] = dimensions
    .split("x")
    .map(num => parseInt(num, 10));

  const url = imageBuilder
    .image(source)
    .auto("format")
    .width(Math.min(width, "2000"))
    .url();

  return {
    src: url,
    width: width,
    height: height
  };
};