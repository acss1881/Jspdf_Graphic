/** 
 * jsPDF Grafic plugin v0.0.1
 * Copyright (c) 2017 Arturo Schloss,
 * Name: Arturo Schloss  
 * city: Panamá +507
 * correo: arturoschloss@gmail.com
 * Licensed under the MIT License. 
 * http://opensource.org/licenses/mit-license 
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jspdf')) :
	typeof define === 'function' && define.amd ? define(['jspdf'], factory) :
	(factory(global.jsPDF));
}(this, function (jsPDF) {
    'use strict';

    jsPDF = 'default' in jsPDF ? jsPDF['default'] : jsPDF;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    jsPDF.API.GraphicPie = function (_radio = 0, _left, _top, _data, tipo) {

        if(_left == 0){
            _left = 15;
        }

       
        var _porcentajes = _data;
        var diametro = _radio * 2

        _left = _radio + _left;
        _top = _radio + _top;

        var suma = 0;

        for (var e in _data) {
            suma = suma + _data[e];
        }
       
        this.circle(_left, _top, _radio, 'FF');

        var tiempo = 0;
        var colores = [
            [245, 66, 55], //rojo
            [150, 55, 25], //blanco
            [76, 174, 80], //verde
            [33, 149, 244], //azul
            [253, 85, 32], // naranja
            [254, 234, 60], // amarillo
            [120, 83, 73], //chocolate
            [76, 174, 80], //verde
            [253, 85, 32], // naranja
            [33, 149, 244], //azul
            [245, 66, 55], //rojo
            [150, 55, 25], //blanco
            [254, 234, 60], // amarillo
            [120, 83, 73], //chocolate
        ];


        this.setLineWidth(2);
        var coordenadastexto = [];
        
        for (var z = 0; z < _data.length; z++) {
            var _grad = (_data[z] / suma) * 360;
          
            if (_grad > 0 && _grad < 360) {
                var lineatexto = 0;
                console.log(_grad)
                for (var i = tiempo; i < _grad + tiempo; i++) {

                    
                    this.setLineWidth(1);
                    var _rad = i * (Math.PI / 180);
                    var x = _left +  _radio * Math.cos(_rad);
                    var y = _top - _radio   * Math.sin(_rad);
                    this.setDrawColor(colores[z][0], colores[z][1], colores[z][2]);
                    
                    if(tipo == 'pie'){
                        this.line(_left, _top, x, y);
                    }
                    else if(tipo == 'donut'){
                    var x2 = (_left + x) / 2
                    var y2 = (_top + y) / 2
                    this.line(x2, y2, x, y);
                    }


                    if (lineatexto == 0) {
                        lineatexto = _radio;
                        _radio = _radio - 15;
                        _rad = ((_grad/2) + tiempo)  * (Math.PI / 180);
                        x = _left + _radio * Math.cos(_rad);
                        y = _top - _radio * Math.sin(_rad );
                    }

                    if (lineatexto > 1) {
                        
                        _radio = lineatexto;
                        lineatexto = 1;
                        coordenadastexto.push({ x: x, y: y, data: _data[z], l:_left, t: _top, color: z});
                    }
                }
                tiempo = tiempo + _grad;
            }
        }

       
        tiempo = 0;
        this.setFontSize(12);

       
       
        //this.setLineWidth(2);
        for (var t in coordenadastexto) {
            var cl  = coordenadastexto[t].color;
            this.setDrawColor(colores[cl][0], colores[cl][1] , colores[cl][2]);
            //this.line(coordenadastexto[t].l, coordenadastexto[t].t, coordenadastexto[t].x, coordenadastexto[t].y);
            
            this.autoTableText(((_porcentajes[t] / suma) * 100).toFixed(2) + '%', coordenadastexto[t].x, coordenadastexto[t].y, { valign: 'middle', halign: 'center' });
        }

        console.log(suma)
        this.setFillColor(255, 255, 255);
         this.setDrawColor(255, 255, 255);
        this.circle(_left, _top, 5, 'FD');
        this.setLineWidth(0);
    }

}));




