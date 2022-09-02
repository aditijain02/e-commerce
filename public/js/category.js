$(document).ready(function(){
    console.log(cat);

    async function getProducts(){
        const products = await axios.get(`/home/category/${cat}`);
        // console.log(products);

        $('.product-container').empty();

        for(product of products.data){
            const large = '<div class="card"><div class="title">'+ product.productName +' &nbsp &nbsp <i class="fas fa-rupee-sign"></i>&nbsp ' + product.price+'</div><div class="image"><img src="'+ product.img+'"/></div><div class="text">'+ product.desc+'.</div><button  class="buy-button details"><a href="/product/'+product._id+'">Buy Now</a></button></div>';
            $('.product-container').prepend(large);
        }
    }

    getProducts();
})
