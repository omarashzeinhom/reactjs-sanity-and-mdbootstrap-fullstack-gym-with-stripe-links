const classes = {
  name: "classes",
  title: "Classes",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        //crop hotspot check sanity docs  [Presenting Images](https://www.sanity.io/docs/presenting-images)
        hotspot: true,
      },
      //custom accepts only these type of image files
      //accept: "image/png, image/jpegm ,image/webp, image/svg, image/jpg",
    },
    {
      //objects
      name: "price",
      title: "Price",
      type: "number",
    },
    //objects
    {
      name: "stripelink",
      title: "Stripe Product Payment Link",
      type: "url",
    },
  ],
};
export default classes;
