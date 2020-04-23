# sid_sortbyvalue
This method help to to sort by price and character for eg Low to High or High to Low 


use this in javascript file
function sidsortfunction(parametersortby){
    // sid sort method start
    if(parametersortby == 'low'){
      this.sid_sortby.sort(function(a, b) { return a.variantSalePrice - b.variantSalePrice; })
    }
    else if(parametersortby == 'high'){
      this.sid_sortby.sort(function(a, b) { return b.variantSalePrice - a.variantSalePrice; })
    }
    else if(parametersortby == 'A'){
      this.sid_sortby.sort(function(a, b) {
        var nameA = a.variantName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.variantName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }
    else if(parametersortby == 'Z'){
      this.sid_sortby.reverse(function(a, b) {
        var nameA = a.variantName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.variantName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });

    }
    // sid sort method end
