var filter_select_el = document.getElementById('filter1');

var items_el = document.getElementById('items');

filter_select_el.onchange = function() {
	console.log(this.value);
  var items = items_el.getElementsByClassName('tank');
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains(this.value)) {
    	items[i].style.display = 'block';
    } else {
    	items[i].style.display = 'none';
    }
  }
};

var filter_select_el2 = document.getElementById('filter2');

var items_el2 = document.getElementById('items');

filter_select_el2.onchange = function() {
	console.log(this.value);
  var items2 = items_el2.getElementsByClassName('tank');
  for (var i=0; i<items2.length; i++) {
  	if (items2[i].classList.contains(this.value)) {
    items2[i].style.display = 'block';
    } else {
    	items2[i].style.display = 'none';
    }
  }
};


