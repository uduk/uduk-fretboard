/*

o   o o-o   o   o o  o 
|   | |  \  |   | | /  
|   | |   O |   | OO   
|   | |  /  |   | | \  
 o-o  o-o    o-o  o  o  FretBoard 8

*/

UdukFretboard8 = function(posX, posY, tuning) {

  var width = 960;
  var height = 210;

  /* Rectangle */
  var rectangle = new Rectangle(new Point(posX, posY), new Size(width, height));
  var shape = new Shape.Rectangle(rectangle);
  shape.fillColor = '#ffffff';
  shape.strokeColor = 'black';

  /* Nut */
  var rnut = new Rectangle(new Point(posX-16, posY), new Size(16, height));
  var nut = new Shape.Rectangle(rnut);
  nut.fillColor = 'grey';
  nut.strokeColor = 'black';

  /* Last Nut */
  var rrnut = new Rectangle(new Point(width+posX, posY), new Size(6, height));
  var lnut = new Shape.Rectangle(rrnut);
  lnut.fillColor = 'grey';
  lnut.strokeColor = 'black';

  /* Fret */
  for(i = 1; i < 24; i++) {
    var x = (i * 40) + posX;
    var s = new Path.Line({
      from: [x, posY],
      to: [x, height+posY],
      strokeColor: 'black'
    });
  }

  /* Fret number */
  var z = 20 + posX;
  for(var i = 1; i <= 24; i++, z += 40) {
    /* Bottom */
    var bottom = new PointText(new Point(z, posY + height + 30));
    bottom.justification = 'center';
    bottom.fontFamily = 'Silom';
    bottom.fillColor = 'grey';
    bottom.content = i + '';

    /* Top */
    var top = new PointText(new Point(z, posY - 20));
    top.justification = 'center';
    top.fontFamily = 'Silom';
    top.fillColor = 'grey';
    top.content = i + '';
  }

  /* String */
  for(var i = 1; i <= 6; i++) {
    var y = i * 30;
    var s = new Path.Line({
      from: [0+posX, y+posY],
      to: [width+posX, y+posY],
      strokeColor: 'black'
    });
  }

  /* String tuning */
  for(var i = 1; i <= 8; i++) 
  {
    var y = (i + 1) * 30;
    var text = new PointText(new Point(posX - 40, (y+posY) - 30 ));
    text.justification = 'center';
    text.fontFamily = 'Silom';
    text.fillColor = 'grey';
    text.content = tuning[i];
  }

  /* Dots */
  var d1 = 100;
  var d2 = 580;
  for(var i = 1; i < 5; i++, d1 += 80, d2 += 80)
  {
    /* 3, 5, 7, 9 */
    var myCircle = new Path.Circle(new Point(d1+posX, 106+posY), 10);
    myCircle.fillColor = 'grey';

    /* 15. 17, 19, 21 */
    var myCircle = new Path.Circle(new Point(d2+posX, 106+posY), 10);
    myCircle.fillColor = 'grey';
  }

  /* 12 */
  var myCircle = new Path.Circle(new Point(460+posX, 76+posY), 10);
  myCircle.fillColor = 'grey';
  var myCircle = new Path.Circle(new Point(460+posX, 136+posY), 10);
  myCircle.fillColor = 'grey';

  /* 24 */
  var myCircle = new Path.Circle(new Point(940+posX, 76+posY), 10);
  myCircle.fillColor = 'black';
  var myCircle = new Path.Circle(new Point(940+posX, 136+posY), 10);
  myCircle.fillColor = 'black';

  /* Powered: */
  var uduk = new PointText(80, 20);
  uduk.content = 'http://uduk.org';
  uduk.style = {
    fontFamily: 'Silom',
    fontWeight: 'bold',
    fontSize: 16,
    fillColor: 'grey',
    justification: 'center'
  };

  var ret = [posX, posY];
  return ret;
};

drawNote8 = function(pos, s, f, marker) {
  var string = pos[1] + (s - 1) * 30;
  var fret = pos[0] + 20 + (f - 1) * 40;

  var circle = new Path.Circle(new Point(fret, string), 8);
    circle.style = {
    fillColor: '#ff6060',
    strokeColor: 'black',
    strokeWidth: 1,
    shadowColor: new Color(0, 0, 0),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5)
  };

  var text = new PointText(new Point(fret, string+4));
  text.justification = 'center';
  text.fillColor = 'white';
  text.content = marker;

  var group = new Group([circle, text]);
  return group;
};

drawSeq8 = function(pos, seq, marker) {
  var z = UdukSequence.splitNote(seq);
  var s = z[0];
  var f = z[1]; 

  var string = pos[1] + (s - 1) * 30;
  var fret = pos[0] + 20 + (f - 1) * 40;

  var circle = new Path.Circle(new Point(fret, string), 8);
    circle.style = {
    fillColor: '#ff6060',
    strokeColor: 'black',
    strokeWidth: 1,
    shadowColor: new Color(0, 0, 0),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5)
  };

  var text = new PointText(new Point(fret, string+4));
  text.justification = 'center';
  text.fillColor = 'white';
  text.content = marker;

  var group = new Group([circle, text]);
  return group;
};

drawBlock8 = function(pos, start, n) {
  var r = new Rectangle(new Point(pos[0]+(40 * (start-1)), pos[1]), new Size(40 * n, 210));
  var block = new Shape.Rectangle(r);
  block.fillColor = '#0f6060';
  block.opacity = 0.16;
  return block;
};
