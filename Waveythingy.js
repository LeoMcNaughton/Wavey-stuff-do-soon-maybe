let Point = require(.Point/js){}

let Waveythingy = function(array){
  let numberOfPoints = array.length;
  let Points = array;
  let transformedPoints = array;
  let range = r;
  let period = p;

  function = getRange(){ return Range;}
  function = getPeriod(){ return Period;}
  function = getPointArray(){ return PointsArray;}

  function = shiftX(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();s
    }
  }
  function = shiftY(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
    }
  }
  function = stretchX(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempx *=value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }
  function = stretchY(value){
    for(a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempy *=value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }
  function = transformation(){

  }
  function = outputOf(xvalue){
     for(let x = 0; x < points.length; x++){

     }
  }
  calculateSpan(array){

  }
   return(shiftX,shiftY,stretchX,stretchY,transformation,outputOf)
}
