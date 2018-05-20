import Immutable from 'immutable'
let $$initialState = {
	val: 0
};

export default function home($$state = Immutable.fromJS($$initialState), action){
	let val = 0;
	switch (action.type) {
	    default: 
	        return $$state;
	}
};












// keyMirror
// "use static";
// let KeyVal = function(obj) {
// 	let ret = {};
// 	let key;
// 	if((obj instanceof Object && !Array.isArray(obj))) {
// 		throw new Error('arg must be an object')
// 	}
// 	for (key in obj) {
//        if (obj.hasOwnProperty(key)) {
// 		   ret[key] = key;
// 	   }
// 	};

// 	return ret;
// }