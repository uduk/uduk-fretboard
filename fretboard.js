// 7string not scale
// poweed by fixed pos
// change string tuning

var posX = 90;
var posY = 120;

var width = 960;
var height = 150;

drawFretboard = function() {

  /* Rectangle */
	var rectangle = new Rectangle(new Point(posX, posY), new Size(width, height));
	var shape = new Shape.Rectangle(rectangle);
	shape.fillColor = '#ffeeb1' //ddd //fff;
	shape.strokeColor = 'black';

	/* block tmp TODO*/
	var block = new Rectangle(new Point(posX+(40*11), posY), new Size(160, 150));
	var b = new Shape.Rectangle(block);
	b.fillColor = '#0f6060' //ddd //fff;
	b.opacity = 0.2;


  /* 1st */
	var rectangle2 = new Rectangle(new Point(posX-16, posY), new Size(16, height));
	var shape2 = new Shape.Rectangle(rectangle2);
	shape2.fillColor = 'grey';
	shape2.strokeColor = 'black';

	/* last */
	var rectangle3 = new Rectangle(new Point(width+posX, posY), new Size(6, height));
	var shape3 = new Shape.Rectangle(rectangle3);
	shape3.fillColor = 'grey';
	shape3.strokeColor = 'black';

	/* fret */
	for(i = 1; i < 24; i++) {
		x = (i * 40) + posX;
		var s = new Path.Line({
				from: [x, posY],
				to: [x, height+posY],
				strokeColor: 'black'
		});
	}

  /* fret number */
	var z = 20 + posX;
	for(i = 1; i <= 24; i++, z += 40) {

	  // Bottom
		var text = new PointText(new Point(z, posY + height + 30));
		text.justification = 'center';
		text.fontFamily = 'Silom';
		text.fontWeight = 'bold';
		text.fillColor = 'black';
		text.content = i + '';

		// Top
		var text2 = new PointText(new Point(z, posY - 20));
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
				from: [0+posX, y+posY],
				to: [width+posX, y+posY],
				strokeColor: 'grey'
		});
	}

  /* string tuning */
	var tuning = ["-", "e", "B", "G", "D", "A", "E"];
	for(i = 1; i <= 6; i++) 
	{
		var y = i * 30;
		var text = new PointText(new Point(posX - 40, (y+posY) - 30 ));
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
		var myCircle = new Path.Circle(new Point(d1+posX, 76+posY), 10);
		myCircle.fillColor = 'grey';

		// 15. 17, 19, 21
		var myCircle = new Path.Circle(new Point(d2+posX, 76+posY), 10);
		myCircle.fillColor = 'grey';
	}

  // 12
	var myCircle = new Path.Circle(new Point(460+posX, 46+posY), 10);
	myCircle.fillColor = 'grey';
	var myCircle = new Path.Circle(new Point(460+posX, 106+posY), 10);
	myCircle.fillColor = 'grey';

	//	24
	var myCircle = new Path.Circle(new Point(940+posX, 46+posY), 10);
	myCircle.fillColor = 'black';
	var myCircle = new Path.Circle(new Point(940+posX, 106+posY), 10);
	myCircle.fillColor = 'black';

	// Powered: 
	var text = new PointText(100, 20);
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
drawNote = function(s, f, marker) {

  // strings --- posY + (i - 1) * 30
	// 1 = posY + 0  
	// 2 = posY + 30 
	// 3 = posy + 60 
	// 4 = posY + 90 
	// 5 = posY + 120
	// 6 = posY + 150

	// fret -- posX + 20 + (i - 1) *  40
	// 0 -
	// 1 - posX + 20
	// 2 - posX + 20 + 40

	var string = posY + (s - 1) * 30;
	var fret = posX + 20 + (f - 1) * 40;

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

drawSeq = function(seq, marker) {

  // strings --- posY + (i - 1) * 30
	// 1 = posY + 0  
	// 2 = posY + 30 
	// 3 = posy + 60 
	// 4 = posY + 90 
	// 5 = posY + 120
	// 6 = posY + 150

	// fret -- posX + 20 + (i - 1) *  40
	// 0 -
	// 1 - posX + 20
	// 2 - posX + 20 + 40

	var z = parseSeq(seq);
	var s = z[0];
	var f = z[1]; 

	var string = posY + (s - 1) * 30;
	var fret = posX + 20 + (f - 1) * 40;

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


	// tmp
  function parseSeq (sequence)
	{
		var x = sequence.toString();
		var root = x.charAt(0).toString();
		var two = x.substr(1, 2).toString();
		var z = two.charAt(0).toString();
		var subroot = "";

		if (parseInt(z) == 0) {
			subroot = two.charAt(1);
		}
		else {
			subroot = two;
		}

		var ret = [root, subroot];

		return ret;
	}



