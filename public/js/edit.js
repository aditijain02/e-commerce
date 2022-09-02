$(document).ready(function(){


    async function details(){
        const product = await axios.get(`/detail/${pid}`);
        $('#name').val(product.data.productName);
        $('#price').val(product.data.price);
        $('#img').val(product.data.img);
        $('#desc').val(product.data.desc);
    }
    // console.log(pid);

    details();

    

});