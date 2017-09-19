let Point = require("./Point.js");

let Waveythingy = function(array){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range = calculateSpan(array,"Y");
  let period = calculateSpan(array,"X");

  function getRange(){ return range;}
  function getPeriod(){ return period;}
  function getPointArray(){ return transformedPoints;}

  function shiftX(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      temp += value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }
  function shiftY(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      temp += value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }
  function stretchX(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempx *=value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }
  function stretchY(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempy *=value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }
  function transform(){
    return transform;
  }
  function outputOf(xvalue){
     let position = xvalue % period;
     return points[position].getY();
     }
  function calculateSpan(array,coor){
     let max = points[0];
     let min = points[0];
     if(coor = "X"){
       for (let p=1;p<numberOfPoints;p++){
         if(points[p].getX() < min){
           min = points[p].getX();
       }
       if(points[p].getX() > max){
           max = points[p].getX();
       }
       return max-min;
     }
   }
     else if(coor = "Y"){
       for (let p=1;p<numberOfPoints;p++){
         if(points[p].getY() < min){
           min = points[p].getY();
         }
           if(points[p].getY() > max){
               max = points[p].getY();
           }
     }

  }
  return max-min;
}
   return(shiftX,shiftY,stretchX,stretchY,transform,outputOf,calculateSpan)
}
module.exports = Waveythingy;
