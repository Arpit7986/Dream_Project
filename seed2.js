const mongoose=require('mongoose')
const Show=require('./controllers/Show')

const show=[
    {
        name:"Women’s Green Training",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001.jpg",
        price:50,
        desc:"Amazing Product to Buy"
    },
    {
        name:"Women’s Pink Suede",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016.jpg",
        price:60,
        desc:"Amazing Product to Buy"
    },
    {
        name:"Women’s Tosca City Run",
        img:"https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012.jpg",
        price:65,
        desc:"Amazing Product to Buy"
    }
]

async function seedDB2(){
    await Show.insertMany(show)
    console.log("Data Seeded Successfully of 2")
}

module.exports=seedDB2;