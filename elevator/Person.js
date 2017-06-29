var Person = {
  
    weigth : 0,
    
    setWeight : function (kg) {
        if (isNaN(kg)) {
          throw Error('KG must be a numeric value, either integer or float');
        }
      
        this.weigth = parseFloat(kg);
        
        return this;
    },
    
    getWeight : function () {
        return this.weigth;
    }
    
}
