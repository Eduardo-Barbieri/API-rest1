const cat_list = require('./cat_list');

function Generate_ID(){
	var id = cat_list.length + 1;
	return id; 	
}
function Reset_ID(){
	
	for(n=0;n<cat_list.length;n++){
		cat_list[n].id = n+1;
	}
}

module.exports.Generate_ID = Generate_ID;
module.exports.Reset_ID = Reset_ID;