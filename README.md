Uduk Fretboard, a very simple guitar fretboard

```javascript
o   o o-o   o   o o  o 
|   | |  \  |   | | /  
|   | |   O |   | OO   
|   | |  /  |   | | \  
 o-o  o-o    o-o  o  o 

<script type="text/paperscript" src="fretboard6.js" canvas="Canvas6"></script>
<script type="text/paperscript" src="fretboard7.js" canvas="Canvas7"></script>
<script type="text/paperscript" src="fretboard8.js" canvas="Canvas8"></script>
```
Example usage:

```javascript
<script type="text/paperscript" canvas="Canvas6">
  var f = UdukFretboard6(100, 100, ["e", "B", "G", "D", "A", "E"]);
  var n = drawNote6(f, 4, 4, "1");
  //n.remove();
  var nn = drawSeq6(f, 505, "3");
  var block = drawBlock6(f, 1, 4);
  //block.remove();
</script>

<script type="text/paperscript" canvas="Canvas7">
  var f = UdukFretboard7(100, 100, ["e", "B", "G", "D", "A", "E", "(B)"]);
  var n = drawNote7(f, 7, 7, "1");
  var nn = drawSeq7(f, 700, "2");
  var block = drawBlock7(f, 1, 4);
</script>

<script type="text/paperscript" canvas="Canvas8">
  var f = UdukFretboard8(100, 100, ["e", "B", "G", "D", "A", "E", "(B)", "(Gb)"]);
  var n = drawNote8(f, 8, 8, "1");
  var nn = drawSeq8(f, 805, "3");
  var block = drawBlock8(f, 1, 4);
</script>

...
 <canvas id="Canvas6" width="1100" height="380" style="border:1px solid #333333;"></canvas>
 <canvas id="Canvas7" width="1100" height="380" style="border:1px solid #333333;"></canvas>
 <canvas id="Canvas8" width="1100" height="380" style="border:1px solid #333333;"></canvas>
...
```
---
Direct drawing into the canvas, [string, fret] function:

String = posY + (i - 1) * 30<br>
Fret = posX + 20 + (i - 1) *  40<br>

(*) Once the fretboard has been initiated, it will return an array containing [posX, posY]
