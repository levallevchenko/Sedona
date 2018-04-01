var button = document.querySelector(".hotel-search");
 	var popup = document.querySelector(".search-form");
  	var close = popup.querySelector(".hotel-search");
	button.addEventListener("click", function (evt) {
  		 evt.preventDefault();
  		popup.classList.toggle("search-form-show");
 	 });
  	close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("search-form-show");
  });