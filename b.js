const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body

// Glampsites Data
const glampsites = [
  {
    id: 1,
    img_url: "img/66a28285ec61deebee4139c7_pine-ridge-glampsite-default-image-glamping-x-webflow-template.jpg",
    name: "Pine Ridge Glampsite",
    about: "Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed.",
    sqft: "2,553 sqft",
    person: "2 guests",
    res: "Lorem ipsum dolor sit amet consectetur urna orci sem.",
    price: "$250.00 USD",
    location: "123 El Capitan Meadows, El Capitan, CA",
    img2_url: "img/669ffeac19af17335e2648f8_social-media-gallery-two-default-image-glamping-x-webflow-template.jpg",
    img3_url: "img/66a27d2f215505f6867ba4b8_property-gallery-two-glamping-x-webflow-template.jpg",
    img4_url: "img/66a27d345e1fd338beb69ee1_property-gallery-four-glamping-x-webflow-template.jpg",
  },
  {
    id: 2,
    img_url: "img/66a281f0728d0f9a91237030_lakeside-luxury-escape-default-image-glamping-x-webflow-template-p-800.jpg",
    name: "Lakeside Luxury Escape",
    about: "Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed.",
    sqft: "4,821 sqft",
    person: "4 guests",
    res: "Lorem ipsum dolor sit amet consectetur urna orci sem.",
    price: "$400.00 USD",
    location: "234 Cascade Road, Wilmington, NY",
    img2_url: "img/669ffeac19af17335e2648f8_social-media-gallery-two-default-image-glamping-x-webflow-template.jpg",
    img3_url: "img/66a27d2f215505f6867ba4b8_property-gallery-two-glamping-x-webflow-template.jpg",
    img4_url: "img/66a27d345e1fd338beb69ee1_property-gallery-four-glamping-x-webflow-template.jpg",
  },
  {
    id: 3,
    img_url: "img/66a28120ac2e1afc9c14932c_sunset-valley-haven-default-image-glamping-x-webflow-template-p-800.jpg",
    name: "Sunset Valley Haven",
    about: "Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed.",
    sqft: "1,334 sqft",
    person: "2 guests",
    res: "Lorem ipsum dolor sit amet consectetur urna orci sem.",
    price: "$240.00 USD",
    location: "890 Thunder Mountain Road, Sedona, AZ",
    img2_url: "img/669ffeac19af17335e2648f8_social-media-gallery-two-default-image-glamping-x-webflow-template.jpg",
    img3_url: "img/66a27d2f215505f6867ba4b8_property-gallery-two-glamping-x-webflow-template.jpg",
    img4_url: "img/66a27d345e1fd338beb69ee1_property-gallery-four-glamping-x-webflow-template.jpg",
  },
  {
    id: 4,
    img_url: "img/66a28285ec61deebee4139c7_pine-ridge-glampsite-default-image-glamping-x-webflow-template.jpg",
    name: "Serenity Woods Retreat",
    about: "Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed.",
    sqft: "5,392 sqft",
    person: "5 guests",
    res: "Lorem ipsum dolor sit amet consectetur urna orci sem.",
    price: "$250.00 USD",
    location: "567 Canyon Ridge Drive, Sedona, AZ",
    img2_url: "img/669ffeac19af17335e2648f8_social-media-gallery-two-default-image-glamping-x-webflow-template.jpg",
    img3_url: "img/66a27d2f215505f6867ba4b8_property-gallery-two-glamping-x-webflow-template.jpg",
    img4_url: "img/66a27d345e1fd338beb69ee1_property-gallery-four-glamping-x-webflow-template.jpg",
  },
  {
    id: 5,
    img_url: "img/66a27f062fb2c8951b706ae1_whispering-pines-resort-main-image-glamping-x-webflow-template.jpg",
    name: "Whispering Pines Resort",
    about: "Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed.",
    sqft: "1,592 sqft",
    person: "3 guests",
    res: "Lorem ipsum dolor sit amet consectetur urna orci sem.",
    price: "$180.00 USD",
    location: "112 Maple Avenue, Indian Lake, NY",
    img2_url: "img/669ffeac19af17335e2648f8_social-media-gallery-two-default-image-glamping-x-webflow-template.jpg",
    img3_url: "img/66a27d2f215505f6867ba4b8_property-gallery-two-glamping-x-webflow-template.jpg",
    img4_url: "img/66a27d345e1fd338beb69ee1_property-gallery-four-glamping-x-webflow-template.jpg",
  },
  {
    id: 6,
    img_url: "img/66a28120ac2e1afc9c14932c_sunset-valley-haven-default-image-glamping-x-webflow-template-p-800.jpg",
    name: "Mountain View Oasis",
    about: "Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed.",
    sqft: "3,501 sqft",
    person: "4 guests",
    res: "Lorem ipsum dolor sit amet consectetur urna orci sem.",
    price: "$410.00 USD",
    location: "456 Cliffside Drive, El Capitan, CA",
    img2_url: "img/669ffeac19af17335e2648f8_social-media-gallery-two-default-image-glamping-x-webflow-template.jpg",
    img3_url: "img/66a27d2f215505f6867ba4b8_property-gallery-two-glamping-x-webflow-template.jpg",
    img4_url: "img/66a27d345e1fd338beb69ee1_property-gallery-four-glamping-x-webflow-template.jpg",
  },
];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Glamping API!");
});

// Get all glampsites
app.get("/glampsites", (req, res) => {
  res.json(glampsites);
});

// Get a single glampsite by ID
app.get("/glampsites/:id", (req, res) => {
  const glampsite = glampsites.find((g) => g.id === parseInt(req.params.id));
  if (!glampsite) {
    return res.status(404).json({ message: "Glampsite not found" });
  }
  res.json(glampsite);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
