var Elevator = {

  maxWeightAllowed : 225,
  
  maxOccupantsAllowed : 3,

  floors : [],
  
  selectedFloors : [],
  
  bips : 3,
  
  occupants : [],
  
  alerts : {
    'exceed' : '',
    'door_open' : '',
  },
  
  selectFloor : function(floor) {},
  
  addPeople : function (person) {
      if (this.isFull()) return false;
      
      if (person instanceof Person) {
          this.occupants.push(Person);
      }
    
      return this;
  },
  
  isFull : function () {
      return this.occupants.length == 3;
  },
  
  isOver : function () {
      var weight += this.occupants.map(function(person) {
          return person.weight;
      })
    
      return weigth > this.maxWeightAllowed;
  },
  
  up : function () {},
  
  down : function () {},
  
  stop : function () {},
  
  closeDoor : function () {},
  
}
