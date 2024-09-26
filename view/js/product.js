class Product {
    constructor(objData) {
        this._objData = objData
    }

    listProduct() {

        fetch("http://localhost:3000/gifts", {
            method: 'GET'
        })
            .then(response => response.json())  
            .then(data => {
                console.log(data); 

                let container = document.getElementById(this._objData.container);

                data.forEach(item => {
                    container.innerHTML += 
                        `<div class="col-lg-4 col-md-6 portfolio-item ${item.company.name} wow fadeInUp" data-wow-delay="0.1s">
                            <div class="portfolio-inner rounded">
                                <img class="img-fluid" src="assets/img/gifts.jpg" alt="">
                                <div class="portfolio-text">
                                    <h4 class="text-white mb-4">${item.name}</h4>
                                    <h4 class="text-white mb-4">${item.price} points</h4>
                                    <p class="text-white mb-4">Company: ${item.company.name}</p>
                                    <div class="d-flex">
                                        <a class="btn btn-lg-square rounded-circle mx-2" href="#" data-bs-toggle="modal" data-bs-target="#imageModal"><i class="fa fa-eye"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                });
            })
            .catch(error => {
                console.log(error);
            });


    }
}