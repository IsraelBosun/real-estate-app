// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'Adeola\'s Mansion',
    description:
      'A luxurious and spacious mansion located in a serene and secure neighborhood. This house features 6 bedrooms, 3 bathrooms, and a total of 4200 sq ft of living space. Built in 2016, it boasts of modern finishes and top-of-the-line appliances. Contact us today to schedule a viewing!',
    image: House1,
    imageLg: House1Lg,
    country: 'Ogun State',
    address: '12, Adeyinka Street, Abeokuta, Lagos',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Oluwatobi Adeyemi',
      phone: '0803 123 4567',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'John\'s Villa',
    description:
      'A beautiful and well-maintained villa located in the heart of Lagos. This house features 6 bedrooms, 3 bathrooms, and a total of 4200 sq ft of living space. Built in 2016, it boasts of modern finishes and top-of-the-line appliances. Contact us today to schedule a viewing!',
    image: House2,
    imageLg: House2Lg,
    country: 'Ogun State',
    address: '8, Wale Adeleke Street, Sango, Ogun',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Funke Adebayo',
      phone: '0803 123 4567',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'Kehinde\'s Mansion',
    description:
      'A magnificent mansion located in a prime location in Ogun State. This house features 6 bedrooms, 3 bathrooms, and a total of 4200 sq ft of living space. Built in 2016, it boasts of modern finishes and top-of-the-line appliances. Contact us today to schedule a viewing!',
    image: House3,
    imageLg: House3Lg,
    country: 'Ogun State',
    address: '25, Oluwafemi Street, Victoria Island, Lagos',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Segun Adeyemo',
      phone: '0803 123 4567',
    },
  },

  {
    id: 4,
    type: 'House',
    name: 'Opeyemi House',
    description:
      'A beautiful 6 bedroom house for sale in a serene environment. Spacious rooms, modern amenities, and a lovely garden.',
    image: House4,
    imageLg: House4Lg,
    country: 'Lagos State',
    address: '23 Oladele Ogunlana Street, Ikotun, Lagos',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Emeka Okoro',
      phone: '0802 123 4567',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'Bolaji House',
    description:
      'A stunning 5 bedroom house for sale in a peaceful neighborhood. Modern architecture, high-end finishes, and a lovely backyard.',
    image: House5,
    imageLg: House5Lg,
    country: 'Ogun State',
    address: '10 Ojodu Abiodun Road, Ojodu, Ogun',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Adesuwa Okafor',
      phone: '0803 456 7890',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'Chidi House',
    description:
      'A magnificent 6 bedroom house for sale in a quiet residential area. Beautifully designed, spacious rooms, and a large garden.',
    image: House6,
    imageLg: House6Lg,
    country: 'Lagos State',
    address: '7 Fashola Close, Magodo GRA, Lagos',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Adebayo Oladipo',
      phone: '0805 678 9012',
    },
  },
  
  {
    id: 7,
    type: 'Apartment',
    name: 'Luxury Apartment 1',
    description:
    'Beautifully designed and spacious apartment located in the heart of Lagos State. This 2-bedroom apartment features modern finishes and high-end appliances. Enjoy stunning views of the city from the large windows. Perfect for individuals or small families seeking a comfortable and stylish living space.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Lagos State',
    address: '12 Victoria Island Lagos, Nigeria',
    bedrooms: '2',
    bathrooms: '2',
    surface: '1300 sq ft',
    year: '2015',
    price: '250000',
    agent: {
    image: Agent7,
    name: 'Chika Eze',
    phone: '0803 123 4567',
    },
    },
    
    {
    id: 8,
    type: 'Apartment',
    name: 'Luxury Apartment 2',
    description:
    'Stunning and modern apartment located in the heart of Ogun State. This 3-bedroom apartment features top-of-the-line finishes and high-end appliances. Enjoy panoramic views of the city from the large balcony. Perfect for families seeking a spacious and luxurious living space.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Ogun State',
    address: '1 Abeokuta Ogun State, Nigeria',
    bedrooms: '3',
    bathrooms: '3',
    surface: '2000 sq ft',
    year: '2018',
    price: '500000',
    agent: {
    image: Agent8,
    name: 'Tunde Oladele',
    phone: '0802 234 5678',
    },
    },
    {
    id: 9,
    type: 'Apartment',
    name: 'Luxury Apartment 3',
    description:
    'Elegantly designed and spacious apartment located in the heart of Lagos State. This 2-bedroom apartment features high-end finishes and modern appliances. Enjoy breathtaking views of the city from the large windows. Perfect for individuals or small families seeking a comfortable and stylish living space.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Lagos State',
    address: '5 Ikeja Lagos, Nigeria',
    bedrooms: '2',
    bathrooms: '2',
    surface: '1500 sq ft',
    year: '2017',
    price: '350000',
    agent: {
    image: Agent9,
    name: 'Amina Ibrahim',
    phone: '0805 345 6789',
    },
    },
    {
      id: 10,
      type: 'House',
      name: 'House 7',
      description:
      'A beautiful house with spacious rooms and modern amenities. Perfect for a family looking for a comfortable and stylish living space. Located in a peaceful neighborhood in Lagos State.',
      image: House7,
      imageLg: House7Lg,
      country: 'Lagos State',
      address: '12, Adeniyi Jones Avenue, Ikeja, Lagos State',
      bedrooms: '5',
      bathrooms: '3',
      surface: '3200 sq ft',
      year: '2015',
      price: '117000',
      agent: {
      image: Agent10,
      name: 'Adebayo Adeyemi',
      phone: '0803 123 4567',
      },
      },
      {
      id: 11,
      type: 'House',
      name: 'House 8',
      description:
      'A stunning house with a beautiful garden and ample space for a large family. Modern features and sleek design make this house an ideal choice for those who appreciate style and comfort. Located in a prime location in Ogun State.',
      image: House8,
      imageLg: House8Lg,
      country: 'Ogun State',
      address: '14, Adeola Odeku Street, Victoria Island, Lagos State',
      bedrooms: '7',
      bathrooms: '2',
      surface: '2200 sq ft',
      year: '2019',
      price: '145000',
      agent: {
      image: Agent11,
      name: 'Tunde Oladipo',
      phone: '0806 987 6543',
      },
      },
      {
      id: 12,
      type: 'House',
      name: 'House 9',
      description:
      'A luxurious house with top-of-the-line amenities and stunning interiors. Perfect for those who appreciate the finer things in life. Located in a prime location in Lagos State.',
      image: House9,
      imageLg: House9Lg,
      country: 'Lagos State',
      address: '2, Gado Nasko Way, Lekki, Lagos State',
      bedrooms: '4',
      bathrooms: '4',
      surface: '4600 sq ft',
      year: '2015',
      price: '139000',
      agent: {
      image: Agent12,
      name: 'Nkechi Eze',
      phone: '0809 456 1234',
      },
      },

      {
      id: 13,
      type: 'House',
      name: 'Olorunlogbon Villa',
      description:
      'Spacious and elegant house located in the heart of Lagos State. This beautiful house features 5 bedrooms, 2 bathrooms, a large living room, and a modern kitchen. The house is situated in a peaceful neighborhood and is close to all amenities.',
      image: House10,
      imageLg: House10Lg,
      country: 'Lagos State',
      address: '12 Adeyemo Alakija Street, Victoria Island, Lagos',
      bedrooms: '5',
      bathrooms: '2',
      surface: '5200 sq ft',
      year: '2014',
      price: '180000',
      agent: {
      image: Agent1,
      name: 'Oluwatoyin Adekunle',
      phone: '0806 123 4567',
      },
      },
      {
      id: 14,
      type: 'House',
      name: 'Ogunjobi Paradise',
      description:
      'Beautiful and well-maintained house located in the serene and quiet area of Ogun State. This lovely house boasts 5 bedrooms, 2 bathrooms, a spacious living area, and a modern kitchen. It is situated in a prime location and is close to all amenities.',
      image: House11,
      imageLg: House11Lg,
      country: 'Ogun State',
      address: '14 Adeniji Adele Street, Marina, Lagos',
      bedrooms: '5',
      bathrooms: '2',
      surface: '3200 sq ft',
      year: '2011',
      price: '213000',
      agent: {
      image: Agent2,
      name: 'Funke Adeyemi',
      phone: '0803 123 4567',
      },
      },
      {
      id: 15,
      type: 'House',
      name: 'Akinwande House',
      description:
      'Stunning and modern house located in a prime area of Lagos State. This beautiful house features 4 bedrooms, 3 bathrooms, a spacious living room, and a stylish kitchen. It is situated in a quiet and peaceful neighborhood and is close to all amenities.',
      image: House12,
      imageLg: House12Lg,
      country: 'Lagos State',
      address: '3 Olumo Close, GRA, Ikeja, Lagos',
      bedrooms: '4',
      bathrooms: '3',
      surface: '5200 sq ft',
      year: '2013',
      price: '221000',
      agent: {
      image: Agent3,
      name: 'Adebayo Adegoke',
      phone: '0809 123 4567',
      },
      },
      {
        id: 16,
        type: 'Apartment',
        name: 'Apartment 16',
        description:
        'Beautifully designed and cozy apartment for sale. Located in a serene environment with easy access to major roads and social amenities. Come make this your dream home!',
        image: Apartment4,
        imageLg: Apartment4Lg,
        country: 'Lagos State',
        address: '17 Kudirat Abiola Way, Oregun, Ikeja, Lagos',
        bedrooms: '2',
        bathrooms: '1',
        surface: '1300 sq ft',
        year: '2011',
        price: '21000',
        agent: {
        image: Agent4,
        name: 'Bukola Adekunle',
        phone: '0803 123 4567',
        },
        },
        {
        id: 17,
        type: 'Apartment',
        name: 'Apartment 17',
        description:
        'A spacious and elegant apartment situated in a serene environment. Perfectly suited for a family looking for comfort and style. Hurry and make this your new home!',
        image: Apartment5,
        imageLg: Apartment5Lg,
        country: 'Ogun State',
        address: '14 Ibikunle St, Sagamu, Ogun',
        bedrooms: '3',
        bathrooms: '1',
        surface: '1000 sq ft',
        year: '2012',
        price: '32000',
        agent: {
        image: Agent5,
        name: 'Adesuwa Osagie',
        phone: '0802 987 6543',
        },
        },
        {
        id: 18,
        type: 'Apartment',
        name: 'Apartment 18',
        description:
        'A newly built and beautifully finished apartment for sale. Located in a serene and secure environment. Ideal for family and great value for money.',
        image: Apartment6,
        imageLg: Apartment6Lg,
        country: 'Lagos State',
        address: '12 Olufunmilayo St, Yaba, Lagos',
        bedrooms: '3',
        bathrooms: '1',
        surface: '1200 sq ft',
        year: '2010',
        price: '38000',
        agent: {
        image: Agent6,
        name: 'Chinedu Okeke',
        phone: '0806 543 2198',
        },
        },
];


// in the below , change all the word canada to Lagos State and change all the word United States to Ogun State, also change all the addresses in this array object file to a random nigerian address for each, also change the description to a random  sensible description of a house for sale for each make it short, then change the name  to a random nigerian name for each and the phone number to a random nigerian phone number also