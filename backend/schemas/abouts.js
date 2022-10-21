const abouts = {
  name: "abouts",
  title: "Abouts",
  type: "document",
  fields: [
      {
          //objects
          name: "title",
          title: "Name",
          type: "string",
        },
        {
          //objects
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          //imageURL
        name: "aboutimg",
        title: "Card Image",
        type: "image",
        options: {
          //crop hotspot check sanity docs  [Presenting Images](https://www.sanity.io/docs/presenting-images)
          hotspot: true,
        },
          //custom accepts only these type of image files
          //accept: "image/png, image/jpegm ,image/webp, image/svg, image/jpg",
        },
    
       
  ],
};
export default abouts;




