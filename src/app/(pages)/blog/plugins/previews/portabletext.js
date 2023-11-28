import Image from "next/image";
import Link from "next/link";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlForImage } from "../../lib/image";
import Iframe from "react-iframe";
import getVideoId from "get-video-id";
import { cx } from "../../utils/all";

import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import jsx from "refractor/lang/jsx";
import html from "refractor/lang/markup";
import css from "refractor/lang/css";
import bash from "refractor/lang/bash";

Refractor.registerLanguage(js);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(html);
Refractor.registerLanguage(css);
Refractor.registerLanguage(bash);

//styles 
import styles from './styles.module.css'

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  // const {width, height} = getImageDimensions(value)
  return (
    <div className={styles.imgContainer}>
        <Image
        className={styles.img}
      src={urlForImage(value)}
      alt={value.alt || "Image"}
      loading="lazy"
      style={{
        width:'100%',
        height:'100%',
        objectFit: 'cover'
      }}
      sizes="(max-width: 800px) 100%, 100%)"/>
    </div>
  
  );
};

/* const PortableTextTable = ({ value }) => {
  const [head, ...rows] = value.table.rows;

  return (
    <table>
      {head.cells.filter(Boolean).length > 0 && (
        <thead>
          <tr>
            {head.cells.map(cell => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.cells.map((cell, index) => {
              return <td key={cell}>{cell}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}; */


/* const Code = ({ value }) => {
  return (
    <Refractor
      // In this example, `props` is the value of a `code` field
      language={value.language || "bash"}
      value={value.code}
      markers={value.highlightedLines}
    />
  );
}; */

/* const IframePreview = ({ value }) => {
  const { url, height } = value;
  if (!url) {
    return <p>Missing Embed URL</p>;
  }
  const { id, service } = getVideoId(url);

  const isYoutubeVideo = id && service === "youtube";

  const finalURL = isYoutubeVideo
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : url;

  return (
    <Iframe
      url={finalURL}
      width="100%"
      height={height || "350"}
      className={cx(!height && "aspect-video", "rounded-md")}
      display="block"
      position="relative"
      frameBorder="0"
      allowfullscreen
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
    />
  );
}; */

const components = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className={styles.h1}>{children}</h1>,
    
    h2: ({children}) => <h1 className={styles.h2}>{children}</h1>,

    p: ({children}) => <p className={styles.p}>{children}</p>,

    blockquote: ({children}) => <blockquote className={styles.quote}>{children}</blockquote>,

    // Ex. 2: rendering custom styles
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className={styles.ul}>{children}</ul>,
    number: ({children}) => <ol className={styles.ol}>{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className={styles.checkmarks}>{children}</ol>,
  },

  types: {
    image: ImageComponent,
    /* code: Code,
    embed: IframePreview,
    tables: PortableTextTable */
  },
  marks: {
    center: props => (
      <div className="text-center">{props.children}</div>
    ),

    highlight: props => (
      <span className="font-bold text-blue-500">
        {props.children}
      </span>
    ),

    link: ({ children, value }) => {
      // Check if href exists
      if (!value.href) {
        // Handle the case where href is not provided
        return <span>{children}</span>;
      }

      const rel = !value.href.startsWith("/")
        ? "noopener"
        : undefined;
      const target = !value.href.startsWith("/")
        ? "_blank"
        : undefined;

      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      );
    },

    internalLink: ({ children, value }) => {
      return (
        <Link href={`/post/${value?.slug?.current}`}>{children}</Link>
      );
    }


  }
};


// Set up Portable Text serialization
export const PortableText = props => (
  <PortableTextComponent components={components} {...props} />
);