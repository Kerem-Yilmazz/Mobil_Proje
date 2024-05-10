export const filterData = [
    {name: "Fast food", image: require("../resimler/fastfood.png"), id: "0"},
    {name: "Burger", image: require("../resimler/burger.png"), id: "1"},
    {name: "Kebap", image: require("../resimler/kebap.png"), id: "2"},
    {name: "Döner", image: require("../resimler/döner.png"), id: "3"},
    {name: "Deniz Ürünleri", image: require("../resimler/balık.png"), id:"4"},
    {name: "Salata",image :require ("../resimler/salata.png"),id :"5" },
    {name : "Tatlı" ,image :require ("../resimler/tatlı.png") ,id :"6" }
  ];


  export const restaurantsData = [
    {
        restaurantName: "Mc Donalds",
        farAway: "40-50",
        businessAddress: "Gazi Cad. Hazardağlı Kavşağı",
        images: 'https://mdsassets.emaarmalls.com/mds/uploads/store/mainPicture/65aa6f4ad7418.jpg',
        averageReview: 4.9,
        numberOfReview: 272,
        coordinates : {lat : -26.1888612, lng : 28.243252},
        discount:10,
        deliveryTime:15,
        collectTime:5,
        foodType:"Burgers, Wraps, Milkshakes...",
        productData:[
            {name:"Hand cut chips", price:29.30,image:'https://bukasapics.s3.us-east-2.amazonaws.com/plates.png'},
            {name:"Big Mac", price:50.80,image:'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png'},
            {name:"Chicken Burger", price:70,image:'https://bukasapics.s3.us-east-2.amazonaws.com/plates.png'}
        ],
        id:0},

        {
          restaurantName: "KFC",
          farAway: "30-35",
          businessAddress: "Cumhuriyet, Malatya Cd. Elisyum Avm",
          images: "https://media-cdn.tripadvisor.com/media/photo-o/1b/99/44/8e/kfc-faxafeni.jpg",
          averageReview: 4.3,
          numberOfReview: 306,
          coordinates: {
            lat: -26.1891648,
            lng: 28.2441808
          },
          discount:20,
          deliveryTime:30,
          collectTime:10,
          foodType:"Chicken,Chicken wings...",
          productData:[
            {name:"Hand cut chips",price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
            {name:"Big Mac",price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},
            {name:"Chicken Burger",price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"}
          ],
       id:1},

       {
        restaurantName: "Grill Et",
        farAway: "15-20",
        businessAddress: "Çaydaçıra, Adnan Kahveci Blv.",
        images: "https://i.lezzet.com.tr/images-xxlarge-secondary/mukemmel-et-nasil-pisirilir-314a2432-6096-47e3-95c8-fa3e5a311da5.jpg",
        coordinates: {
          lat: -26.1886781,
          lng: 28.244879
        },
        averageReview: 4.9,
        numberOfReview: 1272,
        discount:12,
        deliveryTime:25,
        collectTime:15,
        foodType:"Flame grilled beef Burgers",
        productData:[
          {name:"Hand cut chips",price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
          {name:"Big Mac",price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},
          {name:"Chicken Burger",price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"}
        ],
     id:2},

     {
      restaurantName: "Passaport Pizza",
      farAway:"15-25",
      businessAddress: "Çaydaçıra Mah. Hacı Ömer Bilginoğlu Cad.",
      images: "https://yuvamaya.com.tr/upload/recipes/pizza.jpg",
      averageReview: 4.3,
      numberOfReview: 700,
      coordinates: {
        lat: -26.1845336,
        lng: 28.2481691
      },
      discount: null,
      deliveryTime: 20,
      collectTime: 10,
      foodType: "Chicken pizza, vegetarian pizza...",
      productData: [
        {
          name: "Hand cut chips",
          price: 29.30,
          image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
        },
        {
          name: "Big Mac",
          price: 50.80,
          image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
        },
        {
          name: "Chicken Burger",
          price: 70,
          image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
        }
      ],
      id: 3},
    
]
