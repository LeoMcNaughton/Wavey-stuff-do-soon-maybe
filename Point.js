var Point = function(xcor,ycor){
  let x = xcor;
  let y = ycor;

  function getx(){ return x;}
  function gety(){ return y;}

  function magnitude(){
    let dist = Math.sqrt(x*x + y*y);
    return distance;
  }
  function distanceTO(p2){
    let xsquared = (x-p2.getx())*(x-p2*getx());
    let ysquared = (y-p2.gety())*(y-p2*gety());
    return Math.sqrt(xsquard+ysquared);
  }
  function direction(){
    return math.atan2(y,x)*180/Math.pi;
  }
  return{getx,gety,magnitude,distanceTO,direction};
}
