function mySet() {
  // the var collection will hold the set
  var collection = [];

  // this method will check for the presence of an element and return
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method return the values of a set
  this.values = function () {
    return collection;
  };

  //this method will return all the values in the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection
  this.size = function () {
    return collection.length;
  };

  // this method will return the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // this method will return the intersection of two sets as new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // this method will return the difference between two ets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  this.subSet = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

// implementing methods
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setA.add("b");
setA.add("c");
setB.add("a");
setB.add("b");
console.log(setA.values());
console.log(setB.values());
console.log("------------");
setB.add("a");
setB.add("b");
console.log("union of setA & setB : ", setA.union(setB).values());
console.log("Intersection of setA & setB :", setA.intersection(setB).values());
console.log("Difference of setA & setB :", setA.difference(setB).values());
console.log("Is setA a subset of setB?", setA.subSet(setB));
