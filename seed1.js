const mongoose=require('mongoose')
const Arrival=require('./controllers/Arrival')


const arrival=[
    {
        name:"Men’s Navy Running",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
        price:104,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Men’s Green Running",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg",
        price:89,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Women’s Tan Sneaker",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg",
        price:80,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Women’s Mint Sneaker",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg",
        price:90,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Women’s Peach Training",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-600x600.jpg",
        price:58,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Women’s Blue Training",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg",
        price:60,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Men’s Earth-Tone Sneaker",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg",
        price:75,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Men’s Moonstone Sneaker",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg",
        price:78,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Women’s Candy City Run",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg",
        price:40,
        desc:"Amazing Product To Buy"
    }
]

async function seedDB1(){
    await Arrival.insertMany(arrival);
    console.log("Data Seeded Successfully of 2");
}

module.exports=seedDB1