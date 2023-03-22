import product_image_01 from "./assets/products/sillon.jpg";
import product_image_02 from "./assets/products/toaster.jpg";
import product_image_03 from "./assets/products/lampara.png";
import product_image_04 from "./assets/products/mueble.jpg";
import product_image_05 from "./assets/products/luz.jpg";
import product_image_06 from "./assets/products/oil.jpg";
import product_image_07 from "./assets/products/negra.jpg";
import product_image_08 from "./assets/products/ash.jpg";
import product_image_09 from "./assets/products/planta.png";
import product_image_10 from "./assets/products/silla.jpg";
import product_image_11 from "./assets/products/sun.jpg";
import product_image_12 from "./assets/products/golden.png";
import product_image_13 from "./assets/products/chair.png";
import product_image_14 from "./assets/products/chair02.jpg";
import product_image_15 from "./assets/products/cam.jpg";
import product_image_16 from "./assets/products/bodyoil.jpg";
import OtherImgs1 from "./assets/otherProducts/other1.jpg";
import OtherImgs2 from "./assets/otherProducts/other2.jpg";
import Toster1 from "./assets/otherProducts/toster1.jpg";
import Toster2 from "./assets/otherProducts/toster2.jpg";
import LampBlue1 from "./assets/otherProducts/lampblue1.webp";
import LampBlue2 from "./assets/otherProducts/lampblue2.webp";
import PulpUnit1 from "./assets/otherProducts/pulpunit1.jpg";
import PulpUnit2 from "./assets/otherProducts/pulpunit2.jpg";
import ModernGold1 from "./assets/otherProducts/moderngold1.webp";
import ModernGold2 from "./assets/otherProducts/moderngold2.webp";
import CleaningOil1 from "./assets/otherProducts/cleaningoil1.jpg";
import CleaningOil2 from "./assets/otherProducts/cleaningoil2.jpg";
import BlackAndWhite1 from "./assets/otherProducts/blackandwhite1.webp";
import BlackAndWhite2 from "./assets/otherProducts/blackandwhite2.webp";
import BodyOil1 from "./assets/otherProducts/bodyoil1.jpg";
import BodyOil2 from "./assets/otherProducts/bodyoil2.jpg";
import Shelf1 from "./assets/otherProducts/shelf1.webp";
import Shelf2 from "./assets/otherProducts/shelf2.webp";
import Vase1 from "./assets/otherProducts/vase1.webp";
import Vase2 from "./assets/otherProducts/vase2.webp";
import ChairBoom1 from "./assets/otherProducts/chairboom1.webp";
import ChairBoom2 from "./assets/otherProducts/chairboom2.webp";
import BlackLamp1 from "./assets/otherProducts/blacklamp1.webp";
import BlackLamp2 from "./assets/otherProducts/blacklamp2.jpg";
import GoldenLamp1 from "./assets/otherProducts/goldenlamp1.webp";
import GoldenLamp2 from "./assets/otherProducts/goldenlamp2.webp";
import WoodChair1 from "./assets/otherProducts/woodchair1.webp";
import WoodChair2 from "./assets/otherProducts/woodchair2.webp";
import Copenhagen1 from "./assets/otherProducts/copenhagen1.webp";
import Copenhagen2 from "./assets/otherProducts/copenhagen2.webp";
import Cam1 from "./assets/otherProducts/cam1.webp";
import Cam2 from "./assets/otherProducts/cam2.jpg";

export const items = [
  {
    id: 1,
    name: "Little Armchair Sheepshin",
    price: 999.99,
    category: "chairs",
    img: product_image_01,
    otherImgs: [OtherImgs1, OtherImgs2],
    specs:
      "Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.",
    texture: "Sheep Skin",
    weight: "15kg",
    size: "150cm x 70cm",
  },
  {
    id: 2,
    name: "Pop-Up Toaster",
    price: 49.99,
    category: "electronics",
    img: product_image_02,
    otherImgs: [Toster1, Toster2],
    specs:
      " The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.",
    texture: "Plastic",
    weight: "3.5kg",
    size: "20xm x 10cm",
  },
  {
    id: 3,
    name: "Lamp Light Blue",
    img: product_image_03,
    price: 79.99,
    category: "lamps",
    otherImgs: [LampBlue1, LampBlue2],
    specs:
      "The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions.",
    texture: "Plastic",
    weight: "2kg",
    size: "15cm x 15cm",
  },
  {
    id: 4,
    name: "Pulp Unit - 5 Compartments",
    img: product_image_04,
    price: 254.99,
    category: "furnitures",
    otherImgs: [PulpUnit1, PulpUnit2],
    specs:
      "Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, MUJI angle files and ring binders fit neatly inside.",
    texture: "Wood",
    weight: "45kg",
    size: "250cm x 60cm",
  },
  {
    id: 5,
    name: "Golden Modern Light",
    img: product_image_05,
    price: 149.99,
    category: "lamps",
    otherImgs: [ModernGold1, ModernGold2],
    specs:
      "Tom Dixon and FRONT have created an incredibly beautiful pendant, in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The first of its kind. the lamp is transparent when its on and you can see the exciting play of colors.",
    texture: "Plastic",
    weight: "3kg",
    size: "20cm x 20cm",
  },
  {
    id: 6,
    name: "Body Oil 200ml",
    img: product_image_06,
    price: 69.99,
    category: "skin care",
    otherImgs: [CleaningOil1, CleaningOil2],
    specs:
      "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water",
    texture: "Liquid",
    weight: "200ml",
    size: "10cm x 5cm",
  },
  {
    id: 7,
    name: "Black and White Lamp",
    img: product_image_07,
    price: 299.99,
    category: "lamps",
    otherImgs: [BlackAndWhite1, BlackAndWhite2],
    specs:
      "Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off.",
    texture: "Plastic",
    weight: "6kg",
    size: "20cm x 20cm",
  },
  {
    id: 8,
    name: "Gejst Shelf A Black Ash/Black",
    img: product_image_08,
    price: 159.99,
    category: "fornitures",
    otherImgs: [Shelf1, Shelf2],
    specs:
      "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf.",
    texture: "Wood",
    weight: "10kg",
    size: "60cm x 20cm",
  },
  {
    id: 9,
    name: "Cube Lolo Vase Black",
    img: product_image_09,
    price: 139.99,
    category: "fornitures",
    otherImgs: [Vase1, Vase2],
    specs:
      "Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassens 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision.",
    texture: "Ceramics",
    weight: "12kg",
    size: "45cm x 15cm",
  },
  {
    id: 10,
    name: "Traditional Armchair",
    img: product_image_10,
    price: 99.99,
    category: "chairs",
    otherImgs: [ChairBoom1, ChairBoom2],
    specs:
      "Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home.",
    texture: "Wood",
    weight: "8kg",
    size: "60cm x 40cm",
  },

  {
    id: 11,
    name: "The Sun Pendant Black",
    img: product_image_11,
    price: 199.99,
    category: "lamps",
    otherImgs: [BlackLamp1, BlackLamp2],
    specs:
      "The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting . ",
    texture: "Plastic",
    weight: "4kg",
    size: "20cm x 20cm",
  },

  {
    id: 12,
    name: "Simple Golden Lamp",
    img: product_image_12,
    price: 229.99,
    category: "lamps",
    otherImgs: [GoldenLamp1, GoldenLamp2],
    specs:
      "Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years.",
    texture: "Plastic",
    weight: "4kg",
    size: "15cm x 15cm",
  },

  {
    id: 13,
    name: "Oak Spanish Chair",
    img: product_image_13,
    price: 599.99,
    category: "chairs",
    otherImgs: [WoodChair1, WoodChair2],
    specs:
      "When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.",
    texture: "Wood",
    weight: "15kg",
    size: "60cm x 30cm",
  },

  {
    id: 14,
    name: "Copenhagen Armchair",
    img: product_image_14,
    price: 339.99,
    category: "chairs",
    otherImgs: [Copenhagen1, Copenhagen2],
    specs:
      "Concept: The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs. ",
    texture: "Wood",
    weight: "14kg",
    size: "65cm x 35cm",
  },
  {
    id: 15,
    name: "Anti Dark Light",
    img: product_image_15,
    price: 99.99,
    category: "electronics",
    otherImgs: [Cam1, Cam2],
    specs:
      "Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling",
    texture: "Metal",
    weight: "2kg",
    size: "15cm x 10cm",
  },

  {
    id: 16,
    name: "Body Oil 50ml",
    img: product_image_16,
    price: 49.99,
    category: "skin care",
    otherImgs: [BodyOil1, BodyOil2],
    specs:
      "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.",
    texture: "Liquid",
    weight: "50ml",
    size: "10cm x 5cm",
  },
];
