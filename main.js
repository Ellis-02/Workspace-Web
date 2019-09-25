console.log( 'main.js loaded' )
$(document).ready(function() {
     'use strict';
     paper.install(windows);
     paper.setup( document.getElementByld( 'mainCanvas' ) );
     var c;
     for ( var x = 25; x < 400; x += 50 ) {
         for ( var y = 25; y < 400; y += 50 ) {
             c = Shape.Cicle( X, Y, 20 );
             c.fillColor = 'green' ;
         }
     }
 
     var tool = new Tool();
     var c = Shape.Circle( 200, 200, 80 );
     c.fillColor = 'black' ;
     var text = new PointText( 200, 200 );
     text.justification = 'center'; text.fillColor = 'white' ; text.fontsize = 20;
     text.center = 'Hello, World!!';
    
     tool.onMouseDown = function( event ) {
         var x =Shape.Circle( event.point, 20 );
         c.fillColor = 'green' ;
     };
     paper.view.draw();
     console.log( 'jquery - main.js loaded' );
    
    });
