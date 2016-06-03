Uduk Fretboard

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
  var n = drawNote6(f, 6, 7, "1");
  var nn = drawSeq6(f, 509, "3");
  var block = drawBlock6(f, 1, 4);
</script>

<script type="text/paperscript" canvas="Canvas7">
  var f = UdukFretboard7(100, 100, ["e", "B", "G", "D", "A", "E", "(B)"]);
  var n = drawNote7(f, 7, 2, "1");
  var nn = drawSeq7(f, 703, "2");
  var block = drawBlock7(f, 1, 4);
</script>

<script type="text/paperscript" canvas="Canvas8">
  var f = UdukFretboard8(100, 100, ["e", "B", "G", "D", "A", "E", "(B)", "(Gb)"]);
  var n = drawNote8(f, 8, 3, "1");
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
Direct canvas drawing, [x, y] measurement:

1. Strings --- posY + (i - 1) * 30<br>
⋅⋅* 1 = posY + 0<br>  
⋅⋅* 2 = posY + 30<br> 
⋅⋅* 3 = posY + 60<br> 
⋅⋅* 4 = posY + 90<br> 
⋅⋅* 5 = posY + 120<br>
⋅⋅* 6 = posY + 150<br>
<br>
2. Fret -- posX + 20 + (i - 1) *  40<br>
⋅⋅* 0 -<br>
⋅⋅* 1 - posX + 20<br>
⋅⋅* 2 - posX + 20 + 40<br>
