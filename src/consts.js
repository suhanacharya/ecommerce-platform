// eslint-disable-next-line
const productList = [
  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/natural-cosmetics-arrangement_23-2148608257.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-with-half-lemon_23-2148608256.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
    ],
    prodCategory: "beauty",
    prodId: "100",
    prodName: "Lemon Hand Wash",
    mrp: "250",
    price: "230",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/natural-orange-juice-cosmetics_23-2148608263.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-with-half-lemon_23-2148608256.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-arrangement_23-2148608257.jpg",
    ],
    prodCategory: "beauty",
    prodId: "101",
    prodName: "Orange Face Wash",
    mrp: "100",
    price: "100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/natural-cosmetics-with-half-lemon_23-2148608256.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-arrangement_23-2148608257.jpg",
    ],
    prodCategory: "beauty",
    prodId: "102",
    prodName: "Mango Face Wash",
    mrp: "100",
    price: "100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },

  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "books",
    prodId: "200",
    prodName: "Book 1",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },

  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "books",
    prodId: "201",
    prodName: "Book 2",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },

  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
    ],
    prodCategory: "books",
    prodId: "202",
    prodName: "Book 3",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },

  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "book",
    prodId: "203",
    prodName: "Book 4",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
      "https://img.freepik.com/free-psd/top-view-tablet-mock-up_23-2148915325.jpg?size=338&ext=jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "electronics",
    prodId: "300",
    prodName: "Electronic 1",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
      "https://img.freepik.com/free-psd/top-view-tablet-mock-up_23-2148915325.jpg?size=338&ext=jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "electronics",
    prodId: "301",
    prodName: "Electronic 2",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
      "https://img.freepik.com/free-psd/top-view-tablet-mock-up_23-2148915325.jpg?size=338&ext=jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "electronics",
    prodId: "302",
    prodName: "Electronic 3",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
];

const beautyProducts = [
  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/natural-cosmetics-arrangement_23-2148608257.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-with-half-lemon_23-2148608256.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
    ],
    prodCategory: "beauty",
    prodId: "100",
    prodName: "Lemon Hand Wash",
    mrp: "250",
    price: "230",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/natural-orange-juice-cosmetics_23-2148608263.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-with-half-lemon_23-2148608256.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-arrangement_23-2148608257.jpg",
    ],
    prodCategory: "beauty",
    prodId: "101",
    prodName: "Orange Face Wash",
    mrp: "100",
    price: "100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/natural-cosmetics-with-half-lemon_23-2148608256.jpg",
      "https://image.freepik.com/free-psd/natural-cosmetics-arrangement_23-2148608257.jpg",
    ],
    prodCategory: "beauty",
    prodId: "102",
    prodName: "Mango Face Wash",
    mrp: "100",
    price: "100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
];

const bookProducts = [
  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "books",
    prodId: "200",
    prodName: "Book 1",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },

  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "books",
    prodId: "201",
    prodName: "Book 2",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },

  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
    ],
    prodCategory: "books",
    prodId: "202",
    prodName: "Book 3",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },

  {
    prodImgUrl: [
      "https://image.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-572.jpg",
      "https://image.freepik.com/free-psd/book-cover-mockup_125540-453.jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "book",
    prodId: "203",
    prodName: "Book 4",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
];

const electronicProducts = [
  {
    prodImgUrl: [
      "https://image.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
      "https://img.freepik.com/free-psd/top-view-tablet-mock-up_23-2148915325.jpg?size=338&ext=jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "electronics",
    prodId: "300",
    prodName: "Electronic 1",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
      "https://img.freepik.com/free-psd/top-view-tablet-mock-up_23-2148915325.jpg?size=338&ext=jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "electronics",
    prodId: "301",
    prodName: "Electronic 2",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
  {
    prodImgUrl: [
      "https://image.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg",
      "https://image.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg",
      "https://img.freepik.com/free-psd/top-view-tablet-mock-up_23-2148915325.jpg?size=338&ext=jpg",
      "https://image.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
    ],
    prodCategory: "electronics",
    prodId: "302",
    prodName: "Electronic 3",
    mrp: "1000",
    price: "500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem nisi qui sint magnam ratione cupiditate dolores",
  },
];

const banners = [
  "https://res.cloudinary.com/imgbucket/image/upload/v1629527924/ecommerce-site/banner1_kixmbg.jpg",
  "https://res.cloudinary.com/imgbucket/image/upload/v1629527924/ecommerce-site/banner2_jpuxfs.jpg",
  "https://res.cloudinary.com/imgbucket/image/upload/v1629527925/ecommerce-site/banner3_te8pbt.jpg",
  "https://res.cloudinary.com/imgbucket/image/upload/v1629528114/ecommerce-site/banner4_aqauuu.jpg",
];

module.exports = {
  beautyProducts,
  electronicProducts,
  bookProducts,
  productList,
  banners,
};
