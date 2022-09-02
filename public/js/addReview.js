$(document).ready(function(){




    console.log(productId);

    async function getReviews(){
        const rev = await axios.get(`/product/review/${productId}`);
        console.log(rev.data);

        for(let data of rev.data.reviews){
            // console.log(data.content);

            const large = createHtml(data);
            $('.rev').prepend(large);
            
        }
    };

    getReviews();


    function createHtml(data){

      var star = data.star;
      if (typeof(star) == "undefined")
       star="0";
        return `<div class="card mb-3">
        <div class="card-body">
          <div class="d-flex flex-start">
            <!-- <img class="rounded-circle shadow-1-strong me-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="40"
              height="40" /> -->
            <div class="w-100">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="text-primary fw-bold mb-0">
                 ${data.postedBy}
                  <span class="text-dark ms-2">${data.content}</span>
                  <span class="text-dark ms-2">${star} <i class="fas fa-star"></i></span>
                </h6>
                <p class="mb-0">1-5 days ago</p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="small mb-0" style="color: #aaa;">
                  <a href="#!" class="link-grey">Remove</a> •
                  <a href="#!" class="link-grey">Reply</a> •
                  <a href="#!" class="link-grey">Translate</a>
                </p>
                <div class="d-flex flex-row">
                  <i class="fas fa-star text-warning me-2"></i>
                  <i class="far fa-check-circle" style="color: #aaa;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }

   

})
