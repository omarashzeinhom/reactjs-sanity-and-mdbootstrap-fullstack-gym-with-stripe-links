const membership = {
  name: "membership", //key id
  title: "Membership",
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
      //objects
      name: "image",
      title: "Image",
      type: "image",
    },

    {
      //objects
      name: "price",
      title: "Price",
      type: "number",
    },
    //objects

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    //objects
    {
      name: "stripelink",
      title: "Stripe Product Payment Link",
      type: "url",
    },
 
  ],
  
};

export default membership;
