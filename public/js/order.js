$(document).ready(function(){

    console.log("order page");
   
    async function loadOrders(){
        const orders = await axios.get('/getorders');
        const list = orders.data;
        // console.log(list[0].productid);

        $('#cart').empty();
        var total=0; 

        for(let curr of list[0].productid){
            const product = await axios.get(`/getproductdetail/${curr}`);
            // console.log(product);

            total+=parseInt(`${product.data[0].price}`);

            const large = `<div class="row">
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <!-- Image -->
              <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src="${product.data[0].img}"
                  class="w-100" alt="pimg" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                </a>
              </div>
              <!-- Image -->
            </div>

            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
              <!-- Data -->
              <p><strong>${product.data[0].productName}</strong></p>
              <p>Price:&nbsp${product.data[0].price}</p>
              <p></p>
              <!--  <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"-->
              <!--  title="Remove item">-->
              <!--  <i class="fas fa-trash"></i>-->
              <!-- </button>-->
              
              <!-- Data -->
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <!-- Quantity -->
              <div class="d-flex mb-4" style="max-width: 300px">
               

                <div class="form-outline">
                  <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                  <label class="form-label" for="form1">Quantity</label>
                </div>

                
              </div>
              <!-- Quantity -->

              <!-- Price -->
              <p class="text-start text-md-center">
                <strong><i class="fas fa-rupee-sign"></i>&nbsp${product.data[0].price}</strong>
              </p>
              <!-- Price -->
            </div>
          </div>
          <hr class="my-4" />`;
          $('#cart').prepend(large);

        }


        const summary = `<div class="col-md-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Order Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span><i class="fas fa-rupee-sign"></i> &nbsp${total}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                 Shipping
                <span>Free Shipping</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount paid</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong><i class="fas fa-rupee-sign"></i> &nbsp${total}</strong></span>
              </li>
            </ul>

          </div>
        </div>
      </div>`;
      $('#summ').append(summary);
        console.log(total);
    }

    loadOrders();

});