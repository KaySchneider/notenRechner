/**
 * @author Kay Schneider <kayoliver82@gmail.com>
 * @license MIT
 * Grade calc/ simple linear grade calculation in nodejs.
 * Calculates grades from 1 best grade --> to 6 worst grade ( german )
 */
var gradeList = function() {
  var defaultPoints = 100;
  var maxPoints = 0;
  var reachedPoints=0.0;
  this.notenCalc(); //init with default vars in case set MaxPoints will never be called
};

gradeList.prototype.notenCalc = function notenCalc() {
  this.maxPoints = this.defaultPoints;
  this.reachedPoints=0.0;
  return this;
};

/**
 * @params <int> points
 */
gradeList.prototype.setMaxPoints = function(points) {
  this.maxPoints = points;
  return this;
};

gradeList.prototype.getMaxPoints = function() {
  return this.maxPoints;
};

/**
 * @params <double> points
 */
gradeList.prototype.setReachedPoints = function(points) {
  this.reachedPoints = points;
  return this;
};

gradeList.prototype.calcResult = function() {
  this.result = 3 *  ((this.maxPoints - this.reachedPoints) / (this.maxPoints - (this.maxPoints/2.5) )) + 1;
  return Math.round( this.result*100.00 ) / 100.00;
};

export default  gradeList;
