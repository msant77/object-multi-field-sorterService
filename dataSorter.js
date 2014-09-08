exports.sort = sortIt;


//data from testCase
var data = [ 
	{ 
		title 	: "Java How to Program",
		author 	: "Deitel & Deitel",
		year 	: 2007
	},
    {
		title 	: "Patterns of Enterprise Application Architecture",
		author 	: "Martin Fowler",
		year 	: 2002
    },
	{
		title 	: "Head First Design Patterns",
		author 	: "Elisabeth Freeman",
		year 	: 2004
	},
	{
		title 	: "Internet & World Wide Web: How to Program",
		author 	: "Deitel & Deitel",
		year 	: 2007
	}
]; 


function sortIt (queryArray, callback) {

	data.sort(dynamicSortMultiple(queryArray));
    if (callback) callback(data); 
}


function dynamicSortMultiple(configObj) {

    //configObj must be an array of objects on which 
    //each object must contain a property field with the name of the field
    //and another field named direction with the value "asc" for ascending order
    //or anything else for descending order

    var props = configObj;

    
    return function (obj1, obj2) {
        var i = 0;
        var result = 0;
        var numberOfProperties = props.length; 

        // try getting a different result from 0 (equal)
        // as long as we have extra properties to compare
        //

        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

function dynamicSort(obj) { 

    //the overall directional behaviour carries on in here
    //whenever the direction is asc, ascending order takes place,
    //otherwise, any other value for the direction property, 
    //descending order is assumed

	var ascDirection = (obj.direction == "asc") ? 1 : -1;
	var descDirection = (obj.direction != "asc") ? 1 : -1;

    return function (obj1,obj2) {
        return obj1[obj.property] > obj2[obj.property] ? ascDirection
            : obj1[obj.property] < obj2[obj.property] ? descDirection : 0;
    }
}




