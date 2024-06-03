export const filterData = [
    {name: "Fast food", image: require("../resimler/fastfood.png"), id: "0"},
    {name: "Burger", image: require("../resimler/burger.png"), id: "1"},
    {name: "Kebap", image: require("../resimler/kebap.png"), id: "2"},
    {name: "Döner", image: require("../resimler/döner.png"), id: "3"},
    {name: "Deniz Ürünleri", image: require("../resimler/balık.png"), id:"4"},
    {name: "Salata",image :require ("../resimler/salata.png"),id :"5" },
    {name : "Tatlı" ,image :require ("../resimler/tatlı.png") ,id :"6" }
  ];

  export const filterData2 = [
    { name: "Fast food", image: "https://www.partstown.com/about-us/wp-content/uploads/2023/11/what-is-considered-fast-food.jpg", id: "0" },
    { name: "Burgers", image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg", id: "1" },
    { name: "Pizza", image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg", id: "2" },
    { name: "Kebap", image:"https://kebapcibey.com.tr/uploads/news/1524580446Kebap.png", id: "3" },
    { name: "Döner", image: "https://images.deliveryhero.io/image/fd-tr/LH/jlks-listing.jpg", id: "4" },
    { name: "Deniz Ürünleri", image:  "https://2.bp.blogspot.com/-FyyGUKavwgQ/Ts_yUkBQbKI/AAAAAAAAAHY/uYcBUs8i9Z4/s1600/DSC_0037i.jpg", id: "5" },
    { name: "Salata", image: "https://i.pinimg.com/originals/8b/e6/f6/8be6f61f1669656a6307c5ac31e1367c.jpg", id: "6" },
    { name: "Tatlı", image: "https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/general/muhallebili-ekmek-kaday%C4%B1f%C4%B1/preview.jpg", id: "7" },
    { name: "Ev Yemeği", image: "https://www.tazeyorum.com/images/show/reviews/place-33049/original/7b8cba09d158f251860459c5b6c7e32e.png", id: "8" },
    { name: "Yabancı Mutfak", image: "https://wallpapers.com/images/hd/types-of-sushi-pictures-3840-x-2400-2zv0gjgbtvpbloeg.jpg", id: "9" }
  ];
  

  export const restaurantsData = [
    {
        restaurantName: "Mc Donalds",
        farAway: "5-10",
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
            {name:"Hand cut chips", price:29.30,image:'https://sanpagida.com.tr/wp-content/uploads/2021/09/patates-nasil-kizartilir-930x620.png'},
            {name:"Big Mac", price:50.80,image:'https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg'},
            {name:"Chicken Burger", price:70,image:'https://www.qsrmagazine.com/wp-content/uploads/2019/07/flame-grilled-chicken-burger-ideal-burger-applications.jpg'}
        ],
        id:0},

        {
          restaurantName: "KFC",
          farAway: "7",
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
            {name:"Hand cut chips",price:29.30,image:"https://sanpagida.com.tr/wp-content/uploads/2021/09/patates-nasil-kizartilir-930x620.png"},
            {name:"Big Mac",price:50.80,image:"https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg"},
            {name:"Chicken Burger",price:70,image:"https://www.qsrmagazine.com/wp-content/uploads/2019/07/flame-grilled-chicken-burger-ideal-burger-applications.jpg"}
          ],
       id:1},

       {
        restaurantName: "Grill Et",
        farAway: "13",
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
          {name:"Hand cut chips",price:29.30,image:"https://sanpagida.com.tr/wp-content/uploads/2021/09/patates-nasil-kizartilir-930x620.png"},
          {name:"Big Mac",price:50.80,image:"https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg"},
          {name:"Chicken Burger",price:70,image:"https://www.qsrmagazine.com/wp-content/uploads/2019/07/flame-grilled-chicken-burger-ideal-burger-applications.jpg"}
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
          image: "https://sanpagida.com.tr/wp-content/uploads/2021/09/patates-nasil-kizartilir-930x620.png"
        },
        {
          name: "Big Mac",
          price: 50.80,
          image: "https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg"
        },
        {
          name: "Chicken Burger",
          price: 70,
          image: "https://www.qsrmagazine.com/wp-content/uploads/2019/07/flame-grilled-chicken-burger-ideal-burger-applications.jpg"
        }
      ],
      id: 3},
    
]

export const productData = [
  {
    name: "Hand cut chips",
    price: 29.30,
    image: "https://sanpagida.com.tr/wp-content/uploads/2021/09/patates-nasil-kizartilir-930x620.png",
    details: "Two 100% fresh beef burger patties that are hot, deliciously",
    id: 0
  },
  {
    name: "Big Mac",
    price: 50.80,
    image: "https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    id: 1
  },
  {
    name: "Chicken Burger",
    price: 70,
    image: "https://www.qsrmagazine.com/wp-content/uploads/2019/07/flame-grilled-chicken-burger-ideal-burger-applications.jpg",
    details: "",
    id: 2
  },
  {
    name: "Hand cut chips",
    price: 29.30,
    image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/11/patates-cipsi-kossek.jpg",
    details: "Two 100% fresh beef burger patties that are hot, deliciously",
    id: 3
  },
  {
    name: "Big Mac",
    price: 70.20,
    image: "https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    id: 4
  },
  {
    name: "Chicken Burger",
    price: 70,
    image: "https://www.qsrmagazine.com/wp-content/uploads/2019/07/flame-grilled-chicken-burger-ideal-burger-applications.jpg",
    details: "",
    id: 5
  }
];
export const menuData = [
  { title: "BEEF", special: false, key: 0 },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  { title: "FRIES & ONION RINGS", special: false, key: 3 },
  { title: "SALADS", special: false, key: 4 },
  { title: "MILKSHAKES", special: false, key: 5 },
  { title: "HAPPY MEALS", special: false, key: 6 },
  { title: "DESSERTS", special: false, key: 7 },
  { title: "COLD DRINKS", special: false, key: 8 },
  { title: "HOT DRINKS", special: false, key: 9 },
];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILL", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MC CHICKEN DELUXE PROMO", key: 3 },
];

export const menu=[
  {key:1,title:"Beef"},
  {key:2,title:"Chicken"},
  {key:3,title:"Veggie Burger"},
  {key:4,title:"Share Box"},
  {key:5,title:"Happy Meals"},
  {key:6,title:"Fries"},
  {key:7,title:"Sides"},
  {key:8,title:"Milkshakes"},
]
export const menuDetailedData =[
  { 
    meal:"Big Mac",
    price:70.20,
    image:"https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

                    [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                    ],

                    [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                    {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                    ],

                    [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                      ],
                        
                    [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                    ],

                    [
                    {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                    ],
                    ],
    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],              
    id:0
  },

  { 
    meal:"Hand cut chips", 
    price:29.30,
    image:"https://cdn.yemek.com/mnresize/1250/833/uploads/2020/11/patates-cipsi-kossek.jpg",
    details:"Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],
      minimum_quatity:[2,1,2,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false], 
      id:1
  },

  {
    meal:"Chicken Burger",
    price:45.70,
    image:"https://www.qsrmagazine.com/wp-content/uploads/2019/07/flame-grilled-chicken-burger-ideal-burger-applications.jpg",
    details:"",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],

      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],   
    id:2
  },

  {
    meal:"Big Mac",
    price:50.80,
    image:"https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],
    
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],    
    id:3
  },

  
  { 
    
    meal:"Hand cut chips", 
    price:29.30,
    image:"https://cdn.yemek.com/mnresize/1250/833/uploads/2020/11/patates-cipsi-kossek.jpg",
    details:"Two 100% fresh beef burger patties that are hot,deliciously",
    
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],

    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],     
    id:4
  },

  { 
    meal:"Big Mac",
    price:70.20,
    image:"https://www.sickchirpse.com/wp-content/uploads/2016/11/Big-Mac.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

                    [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                    ],

                    [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                    {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                    ],

                    [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                      ],
                        
                    [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                    ],

                    [
                    {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                    ],
                    ],
    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],              
    id:5
  },

];

