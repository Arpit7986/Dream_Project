const mongoose=require('mongoose')
const Product=require('./controllers/Product')

const product=[
    {
        name:"Women’s Tan Sneaker",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-600x600.jpg",
        price:80,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Men’s Black Running",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg",
        price:79,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Men’s Classic Mint",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-600x600.jpg",
        price:89,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Women’s Cream Suede",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-600x600.jpg",
        price:59,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Women’s Mint Sneaker",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg",
        price:90,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Men’s Red Running",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-600x600.jpg",
        price:70,
        desc:"Amazing Product To Buy"
    }
]

async function seedDB(){
    await Product.insertMany(product);
    console.log("Data Seeded Successfully");
}

module.exports=seedDB
