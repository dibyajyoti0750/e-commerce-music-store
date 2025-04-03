import musical from "./musical.png";
import search_icon from "./search.png";
import profile_icon from "./user.png";
import cart_icon from "./shopping-bag.png";
import menu_icon from "./menu.png";

import hero_img from "./hero_img.jpeg";

import replace_icon from "./replacement.png";
import check_icon from "./badge.png";
import support_icon from "./costumer-service.png";

import product1 from "./product1.jpeg";
import product2 from "./product2.jpeg";

import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  musical,
  search_icon,
  profile_icon,
  cart_icon,
  hero_img,
  replace_icon,
  check_icon,
  support_icon,

  dropdown_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};

export const products = [
  {
    _id: "sarod001",
    name: "Handcrafted Classical Sarod",
    description:
      "A fretless string instrument known for its deep, resonant sound, widely used in Hindustani classical music.",
    price: 32000,
    image: [product1],
    category: "Sarod",
    subCategory: "Plucked",
    material: "Tun Wood, Goat Skin, Metal Strings",
    tuning: "C# - G# - C# - D#",
    weight: "6kg",
    dimensions: "42 x 12 x 10 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "santur002",
    name: "Concert Grade Santur",
    description:
      "A trapezoidal wooden instrument with strings struck by mallets, producing a melodious sound.",
    price: 28000,
    image: [product2],
    category: "Santur",
    subCategory: "Struck",
    material: "Walnut Wood, Steel Strings",
    tuning: "C Major",
    weight: "5kg",
    dimensions: "35 x 14 x 5 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "swarmandal003",
    name: "Classical Swarmandal",
    description:
      "A harp-like Indian instrument used to create soothing background harmonics in classical music.",
    price: 18000,
    image: [product1],
    category: "Swarmandal",
    subCategory: "Plucked",
    material: "Teak Wood, Brass Strings",
    tuning: "Varies",
    weight: "4kg",
    dimensions: "28 x 16 x 4 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "dilruba004",
    name: "Handmade Dilruba",
    description:
      "A bowed string instrument with sympathetic strings, often used in Sikh devotional music.",
    price: 20000,
    image: [product2],
    category: "Esraj",
    subCategory: "Bowed",
    material: "Tun Wood, Goat Skin, Metal Strings",
    tuning: "C - G - D - A",
    weight: "3.5kg",
    dimensions: "40 x 10 x 6 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "esraj005",
    name: "Esraj with Professional Bow",
    description:
      "A bowed instrument known for its soft, expressive sound, used in Hindustani classical music.",
    price: 22000,
    image: [product1],
    category: "Esraj",
    subCategory: "Bowed",
    material: "Teak Wood, Steel Strings",
    tuning: "C - G - D - A",
    weight: "4.5kg",
    dimensions: "42 x 11 x 7 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "bigesraj006",
    name: "Large Esraj Deluxe",
    description:
      "A bigger variant of the Esraj, producing a deeper, more resonant tone for professional musicians.",
    price: 26000,
    image: [product2],
    category: "Esraj",
    subCategory: "Bowed",
    material: "Tun Wood, Horsehair Bow, Metal Strings",
    tuning: "C - G - D - A",
    weight: "5kg",
    dimensions: "45 x 12 x 7 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "sitarrs007",
    name: "Sitar - Pt. Ravi Shankar Gharana",
    description:
      "A sitar built in the style of Pt. Ravi Shankar, featuring deep resonance and rich tonal quality.",
    price: 30000,
    image: [product1],
    category: "Sitar",
    subCategory: "Plucked",
    material: "Tun Wood, Calabash, Metal Strings",
    tuning: "C# - G# - C# - D#",
    weight: "6kg",
    dimensions: "50 x 14 x 10 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "sitarvk008",
    name: "Sitar - Pt. Vilayat Khan Gharana",
    description:
      "A sitar built in the style of Pt. Vilayat Khan, designed for a melodious gayaki ang playing style.",
    price: 29000,
    image: [product2],
    category: "Sitar",
    subCategory: "Plucked",
    material: "Teak Wood, Gourd, Metal Strings",
    tuning: "C - G - D - A",
    weight: "5.5kg",
    dimensions: "48 x 13 x 9 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "tanpura009",
    name: "Professional Tanpura",
    description:
      "A long-necked plucked instrument providing a harmonic drone in Indian classical music.",
    price: 25000,
    image: [product1],
    category: "Tanpura",
    subCategory: "Plucked",
    material: "Tun Wood, Gourd, Brass Strings",
    tuning: "C - G - C - G",
    weight: "4.5kg",
    dimensions: "52 x 12 x 10 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "boxtanpura010",
    name: "Compact Box Tanpura",
    description:
      "A portable tanpura with a box design, perfect for travel and practice sessions.",
    price: 15000,
    image: [product2],
    category: "Tanpura",
    subCategory: "Plucked",
    material: "Teak Wood, Steel Strings",
    tuning: "C - G - C - G",
    weight: "3.5kg",
    dimensions: "30 x 10 x 6 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "swarmandaltanpura011",
    name: "Swarmandal + Tanpura Combo",
    description:
      "A unique combination of swarmandal and tanpura, ideal for vocal accompaniment.",
    price: 34000,
    image: [product1],
    category: "Tanpura",
    subCategory: "Plucked",
    material: "Teak Wood, Brass Strings",
    tuning: "Varies",
    weight: "6kg",
    dimensions: "36 x 16 x 6 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "sursringar012",
    name: "Sursringar for Professionals",
    description:
      "A deep-toned instrument similar to the sarod, with a classical resonance.",
    price: 27000,
    image: [product2],
    category: "Sarod",
    subCategory: "Plucked",
    material: "Tun Wood, Goat Skin, Metal Strings",
    tuning: "C# - G# - C# - D#",
    weight: "7kg",
    dimensions: "44 x 14 x 10 inches",
    date: Date.now(),
    bestseller: false,
  },

  {
    _id: "sarangi013",
    name: "Handcrafted Sarangi",
    description:
      "A bowed short-necked string instrument, widely used in Hindustani classical and folk music.",
    price: 26000,
    image: [product1],
    category: "Sarangi",
    subCategory: "Bowed",
    material: "Tun Wood, Goat Skin, Gut Strings",
    tuning: "C - G - D - A",
    weight: "3.5kg",
    dimensions: "30 x 10 x 6 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "surbahar014",
    name: "Sur Bahar - Bass Sitar",
    description:
      "A deeper and larger variant of the sitar, producing rich bass tones, ideal for dhrupad music.",
    price: 31000,
    image: [product2],
    category: "Sitar",
    subCategory: "Plucked",
    material: "Tun Wood, Gourd, Metal Strings",
    tuning: "C - G - D - A",
    weight: "7kg",
    dimensions: "55 x 16 x 12 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "punjabirabab015",
    name: "Traditional Punjabi Rabab",
    description:
      "A short-necked plucked instrument known for its deep, resonant sound, played in Sikh and Afghan traditions.",
    price: 19000,
    image: [product1],
    category: "Rabab",
    subCategory: "Plucked",
    material: "Mulberry Wood, Goat Skin, Gut Strings",
    tuning: "D - A - D - G",
    weight: "3kg",
    dimensions: "32 x 10 x 6 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "afghanirabab016",
    name: "Authentic Afghani Rabab",
    description:
      "A traditional Afghan instrument, known for its deep tones and intricate carving.",
    price: 25000,
    image: [product2],
    category: "Rabab",
    subCategory: "Plucked",
    material: "Mulberry Wood, Goat Skin, Gut Strings",
    tuning: "D - A - D - G",
    weight: "4kg",
    dimensions: "35 x 11 x 7 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "electricsitar017",
    name: "Electric Sitar",
    description:
      "A modern adaptation of the sitar with built-in pickups for amplified performances.",
    price: 28000,
    image: [product1],
    category: "Sitar",
    subCategory: "Plucked",
    material: "Teak Wood, Metal Strings, Electronic Components",
    tuning: "C - G - D - A",
    weight: "5kg",
    dimensions: "48 x 14 x 10 inches",
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "tanpuri018",
    name: "Small Tanpuri for Practice",
    description:
      "A compact version of the tanpura, designed for students and travel musicians.",
    price: 12000,
    image: [product2],
    category: "Tanpura",
    subCategory: "Plucked",
    material: "Teak Wood, Steel Strings",
    tuning: "C - G - C - G",
    weight: "3kg",
    dimensions: "24 x 8 x 4 inches",
    date: Date.now(),
    bestseller: false,
  },

  // Strings
  {
    _id: "strings001",
    name: "Premium Sitar Strings Set",
    description:
      "A complete set of high-quality sitar strings designed for rich resonance and durability.",
    price: 1200,
    image: [product1],
    category: "Strings",
    subCategory: "Professional",
    material: "Steel, Bronze Wound",
    compatibility: "Sitar, Sur Bahar",
    weight: "200g",
    dimensions: "Standard string pack",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "strings002",
    name: "Sarod Strings Pack",
    description:
      "A set of durable and bright-sounding strings for professional sarod players.",
    price: 1500,
    image: [product2],
    category: "Strings",
    subCategory: "Professional",
    material: "Steel, Copper Wound",
    compatibility: "Sarod, Sursringar",
    weight: "250g",
    dimensions: "Standard string pack",
    date: Date.now(),
    bestseller: false,
  },

  // Cases
  {
    _id: "case001",
    name: "Hard Case for Sitar",
    description:
      "A sturdy, padded hard case designed to protect your sitar from damage during travel.",
    price: 5000,
    image: [product1],
    category: "Cases",
    subCategory: "Professional",
    material: "Wood, Foam, Fabric",
    compatibility: "Sitar, Sur Bahar",
    weight: "5kg",
    dimensions: "52 x 16 x 12 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "case002",
    name: "Padded Gig Bag for Tanpura",
    description:
      "A lightweight, cushioned gig bag offering protection and portability for your tanpura.",
    price: 2500,
    image: [product2],
    category: "Cases",
    subCategory: "Student",
    material: "Nylon, Foam Padding",
    compatibility: "Tanpura, Box Tanpura",
    weight: "2kg",
    dimensions: "50 x 12 x 10 inches",
    date: Date.now(),
    bestseller: false,
  },

  // Plectrums
  {
    _id: "plectrum001",
    name: "Brass Mizrab for Sitar",
    description:
      "A durable brass mizrab designed for professional sitar players to produce crisp, clear tones.",
    price: 500,
    image: [product1],
    category: "Plectrums",
    subCategory: "Professional",
    material: "Brass Wire",
    compatibility: "Sitar, Sur Bahar",
    weight: "50g",
    dimensions: "Adjustable fit",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "plectrum002",
    name: "Coconut Shell Plectrum for Sarod",
    description:
      "Handmade coconut shell plectrum designed for traditional sarod playing.",
    price: 700,
    image: [product2],
    category: "Plectrums",
    subCategory: "Professional",
    material: "Polished Coconut Shell",
    compatibility: "Sarod, Sursringar",
    weight: "60g",
    dimensions: "2 x 1 inches",
    date: Date.now(),
    bestseller: false,
  },

  // Electronics
  {
    _id: "pickup001",
    name: "Clip-on Pickup for Acoustic Instruments",
    description:
      "A high-quality clip-on pickup for amplifying acoustic Indian classical instruments.",
    price: 3000,
    image: [product1],
    category: "Electronics",
    subCategory: "Professional",
    material: "Metal, Plastic",
    compatibility: "Sitar, Sarod, Tanpura",
    weight: "150g",
    dimensions: "5 x 2 x 1 inches",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "tuner002",
    name: "Digital Tuner for Indian Classical Instruments",
    description:
      "A chromatic digital tuner optimized for tuning Indian classical instruments accurately.",
    price: 1800,
    image: [product2],
    category: "Electronics",
    subCategory: "Student",
    material: "Plastic, LCD Display",
    compatibility: "Sitar, Sarangi, Tanpura",
    weight: "100g",
    dimensions: "3 x 2 x 1 inches",
    date: Date.now(),
    bestseller: false,
  },
];
