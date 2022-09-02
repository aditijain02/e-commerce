console.log("adminproducts");

$(document).ready(function(){

    async function showProducts(){
        const products = await axios.get('/products',)

        $('#adminProducts').empty();

        for(let product of products.data){

            const large =` <div class="container py-1">
            <div class="row justify-content-center mb-3">
              <div class="col-md-12 col-xl-10">
                <div class="card shadow-0 border rounded-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                          <img src=" ${product.img}"
                            class="w-100" />
                          <a href="#!">
                            <div class="hover-overlay">
                              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-6">
                        <h5>${product.productName}</h5><br><br>
                        
                        <div class="mt-1 mb-0 text-muted small">
                          <span>100% Verified by admin</span>
                          <span class="text-primary"> • </span>
                          <span>Light weight</span>
                          <span class="text-primary"> • </span>
                          <span>Best finish<br /></span>
                        </div>
                        <div class="mb-2 text-muted small">
                          <span>Unique design</span>
                          <span class="text-primary"> • </span>
                          <span>For men</span>
                          <span class="text-primary"> • </span>
                          <span>Casual<br /></span>
                        </div>
                        <p class="text-truncate mb-4 mb-md-0">
                        ${product.desc}
                        </p>
                      </div>
                      <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div class="d-flex flex-row align-items-center mb-1">
                          <h4 class="mb-1 me-1">Rs ${product.price}</h4>
                        </div>
                        
                        <div class="d-flex flex-column mt-4">
                        <!-- <button type="button" class="btn btn-danger"><a href="/product/del/${product._id}">Delete</a></button>-->
                        <!-- <button class="btn btn-success btn-sm mt-2" type="button">-->
                        <!-- <a href="/product/edit/${product._id}">Edit</a>-->
                        <!-- </button> <br>-->
                        <!-- <button class="btn btn-light btn-sm" type="button"><a href="/product/${product._id}">View More</a></button>-->

                        <a style="padding: 5px 40px" href="/product/del/${product._id}"><button style="padding: 5px 70px" type="button" class="btn btn-danger">Delete</button></a>
                        <a style="padding: 5px 40px" href="/product/edit/${product._id}"><button style="padding: 5px 80px" type="button" class="btn btn-success">Edit</button></a>
                        <a style="padding: 5px 40px" href="/product/${product._id}"><button style="padding: 5px 78px" type="button" class="btn btn-warning">View </button></a>
                      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

          $('#adminProducts').prepend(large);

        }
    }


    showProducts();
})