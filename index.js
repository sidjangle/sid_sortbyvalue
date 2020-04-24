function sidsortfunction(parametersortby){
    // sid sort method start
    if(parametersortby == 'low'){
      this.sid_sortby.sort(function(a, b) { return a.variantSalePrice - b.variantSalePrice; })
    }
    else if(parametersortby == 'high'){
      this.sid_sortby.sort(function(a, b) { return b.variantSalePrice - a.variantSalePrice; })
    }
    
}

console.log('global');
