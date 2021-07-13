const cat_list = require('./cat_list');

function Add_cat(id, name, colors){
	
	class Cat {
	  constructor(id, name, colors) {
	    this.id = id;
	    this.name = name;
	    this.colors = colors;
	  }
	}

	const cat = new Cat(id,name,colors);

	cat_list.push(cat);
}

module.exports = Add_cat;