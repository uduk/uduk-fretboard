
/**
*
* UDUK FretBoard (6) 1.0
* require: uduk-core paperjs
*
*/

var posX = 100;
var posY = 100;

UdukFretboard6 = function(x, y) {

  var width = 960;
  var height = 150;

  this.posX = x;
  this.posY = y;

  /* Rectangle */
	var rectangle = new Rectangle(new Point(this.posX, this.posY), new Size(width, height));
	var shape = new Shape.Rectangle(rectangle);
	shape.fillColor = '#ffeeb1' //ddd //fff;
	shape.strokeColor = 'black';

  /* 1st */
	var rectangle2 = new Rectangle(new Point(this.posX-16, this.posY), new Size(16, height));
	var shape2 = new Shape.Rectangle(rectangle2);
	shape2.fillColor = 'grey';
	shape2.strokeColor = 'black';

	/* last */
	var rectangle3 = new Rectangle(new Point(width+this.posX, this.posY), new Size(6, height));
	var shape3 = new Shape.Rectangle(rectangle3);
	shape3.fillColor = 'grey';
	shape3.strokeColor = 'black';

	/* fret */
	for(i = 1; i < 24; i++) {
		x = (i * 40) + this.posX;
		var s = new Path.Line({
				from: [x, this.posY],
				to: [x, height+this.posY],
				strokeColor: 'black'
		});
	}

  /* fret number */
	var z = 20 + this.posX;
	for(i = 1; i <= 24; i++, z += 40) {

	  // Bottom
		var text = new PointText(new Point(z, this.posY + height + 30));
		text.justification = 'center';
		text.fontFamily = 'Silom';
		text.fontWeight = 'bold';
		text.fillColor = 'black';
		text.content = i + '';

		// Top
		var text2 = new PointText(new Point(z, this.posY - 20));
		text2.justification = 'center';
		text2.fontFamily = 'Silom';
		//text2.fontWeight = 'bold';
		text2.fillColor = 'black';
		text2.content = i + '';
	}

	/* string */
	for(i = 1; i <= 4; i++) {
		var y = i * 30;
		var s = new Path.Line({
				from: [0+this.posX, y+this.posY],
				to: [width+this.posX, y+this.posY],
				strokeColor: 'grey'
		});
	}

  /* string tuning */
	var tuning = ["-", "e", "B", "G", "D", "A", "E"];
	for(i = 1; i <= 6; i++) 
	{
		var y = i * 30;
		var text = new PointText(new Point(this.posX - 40, (y+this.posY) - 30 ));
		text.justification = 'center';
		text.fontFamily = 'Silom';
		//text.fontWeight = 'bold';
		text.fillColor = 'black';
		text.content = tuning[i];
	}

	// dots
	var d1 = 100;
	var d2 = 580;
	for(i = 1; i < 5; i++, d1 += 80, d2 += 80)
	{
	  // 3, 5, 7, 9
		var myCircle = new Path.Circle(new Point(d1+this.posX, 76+this.posY), 10);
		myCircle.fillColor = 'grey';

		// 15. 17, 19, 21
		var myCircle = new Path.Circle(new Point(d2+this.posX, 76+this.posY), 10);
		myCircle.fillColor = 'grey';
	}

  // 12
	var myCircle = new Path.Circle(new Point(460+this.posX, 46+this.posY), 10);
	myCircle.fillColor = 'grey';
	var myCircle = new Path.Circle(new Point(460+this.posX, 106+this.posY), 10);
	myCircle.fillColor = 'grey';

	//	24
	var myCircle = new Path.Circle(new Point(940+this.posX, 46+this.posY), 10);
	myCircle.fillColor = 'black';
	var myCircle = new Path.Circle(new Point(940+this.posX, 106+this.posY), 10);
	myCircle.fillColor = 'black';

	// Powered: 
	var text = new PointText(80, 20);
	text.content = 'http://uduk.org';
	text.style = {
						fontFamily: 'Silom',
						fontWeight: 'bold',
						fontSize: 16,
						fillColor: 'grey',
						justification: 'center'
	};

};

// todo: range check
drawNote6 = function(s, f, marker) {

  // strings --- this.posY + (i - 1) * 30
	// 1 = this.posY + 0  
	// 2 = this.posY + 30 
	// 3 = this.posY + 60 
	// 4 = this.posY + 90 
	// 5 = this.posY + 120
	// 6 = this.posY + 150

	// fret -- this.posX + 20 + (i - 1) *  40
	// 0 -
	// 1 - this.posX + 20
	// 2 - this.posX + 20 + 40

	var string = this.posY + (s - 1) * 30;
	var fret = this.posX + 20 + (f - 1) * 40;

	var path = new Path.Circle(new Point(fret, string), 8);
	path.style = {
			fillColor: '#ff6060',
			strokeColor: 'black',
			strokeWidth: 1
	};

	// marker
	var ntext = new PointText(new Point(fret, string+4));
		ntext.justification = 'center';
		ntext.fillColor = 'white';
		ntext.content = marker;

};

drawSeq6 = function(seq, marker) {

  // strings --- this.posY + (i - 1) * 30
	// 1 = this.posY + 0  
	// 2 = this.posY + 30 
	// 3 = this.posY + 60 
	// 4 = this.posY + 90 
	// 5 = this.posY + 120
	// 6 = this.posY + 150

	// fret -- this.posX + 20 + (i - 1) *  40
	// 0 -
	// 1 - this.posX + 20
	// 2 - this.posX + 20 + 40

	var z = UdukSequence.splitNote(seq);
	var s = z[0];
	var f = z[1]; 

	var string = this.posY + (s - 1) * 30;
	var fret = this.posX + 20 + (f - 1) * 40;

	var path = new Path.Circle(new Point(fret, string), 8);
	path.style = {
			fillColor: '#ff6060',
			strokeColor: 'black',
			strokeWidth: 1
	};

	// marker
	var ntext = new PointText(new Point(fret, string+4));
		ntext.justification = 'center';
		ntext.fillColor = 'white';
		ntext.content = marker;

};

drawBlock6 = function(start, n) {
  var block = new Rectangle(new Point(this.posX+(40 * (start-1)), this.posY), new Size(40 * n, 150));
	var b = new Shape.Rectangle(block);
	b.fillColor = '#0f6060';
	b.opacity = 0.16;
};

