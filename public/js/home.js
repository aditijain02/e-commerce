$(document).ready(function(){


    console.log("home js");

    async function getProducts(){
        const products = await axios.get('/products',)
        // console.log(products);

        $('.product-container').empty();

        for(product of products.data){
            const large = '<div class="card"><div class="title">'+ product.productName +' &nbsp &nbsp <i class="fas fa-rupee-sign"></i>&nbsp ' + product.price+'</div><div class="image"><img src="'+ product.img+'"/></div><div class="text">'+ product.desc+'.</div><button  class="buy-button details"><a href="/product/'+product._id+'">Buy Now</a></button></div>';
            $('.product-container').prepend(large);
        }
    }

    getProducts();



    const searchInput = document.querySelector("[data-search]");
    searchInput.addEventListener("input",(e)=>{
        let value =e.target.value;  
        // getProducts();
        console.log(value);

        let cards = document.querySelectorAll('.card');
         console.log(cards);

        for(let card of cards){
            let curr = card.querySelector('.title');

             let textval = curr.innerText;
             textval=textval.toLowerCase();
             value=value.toLowerCase();
            
            console.log(textval);

            if(textval.indexOf(value)>-1){
                
            }else{
                card.remove();
            }
        }

        if(value==""){
            getProducts();
        }
    })


   


});

