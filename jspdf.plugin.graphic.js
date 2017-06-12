///** 
// * jsPDF Grafic plugin v0.1.0
// * Copyright (c) 2017 Arturo Schloss,
// * Name: Arturo Schloss  
// * city: Panamá +507
// * correo: arturoschloss@gmail.com
// * Licensed under the MIT License. 
// * http://opensource.org/licenses/mit-license 
// */
//(function (global, factory) {
//    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jspdf')) :
//	typeof define === 'function' && define.amd ? define(['jspdf'], factory) :
//	(factory(global.jsPDF));
//}(this, function (jsPDF) {
//    'use strict';

//    jsPDF = 'default' in jsPDF ? jsPDF['default'] : jsPDF;

//    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
//        return typeof obj;
//    } : function (obj) {
//        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
//    };

//    jsPDF.API.GrafPie = function (_radio, _left, _top, _data) {
//        _left = _left + 15;
//        _top = _top + 15;
//        var _porcentajes = _data;
//        var cuadrado = _radio * 2
//        //this.rect(_left - 15, _top - 15, cuadrado + 80, cuadrado + 40);

//        _left = _left + 5;
//        _top = _top + 5;

//        _left = _radio + _left;
//        _top = _radio + _top;

//        var suma = 0;

//        for (var e in _data) {
//            suma = suma + _data[e];
//        }
//        suma = 100 / suma;


       

//        this.circle(_left, _top, _radio, 'FF');

//        var tiempo = 0;
//        var colores = [
//            [245, 66, 55], //rojo
//            [150, 55, 25], //blanco
//            [76, 174, 80], //verde
//            [33, 149, 244], //azul
//            [253, 85, 32], // naranja
//            [254, 234, 60], // amarillo
//            [120, 83, 73], //chocolate
//            [76, 174, 80], //verde
//            [253, 85, 32], // naranja
//            [33, 149, 244], //azul
//            [245, 66, 55], //rojo
//            [150, 55, 25], //blanco
//            [254, 234, 60], // amarillo
//            [120, 83, 73], //chocolate
//        ];


//        this.setLineWidth(2);
//        var coordenadastexto = [];
//        for (var z = 0; z < _data.length; z++) {
//            var _grad = (_data[z] * suma) * 3.6;
//            _data[z] = _grad;
//            if (_grad > 0 && _grad < 360) {
//                var lineatexto = 0;

//                for (var i = tiempo; i < _grad + tiempo; i++) {



//                    var _rad = i * Math.PI / 180;
//                    var x = _left + _radio * Math.cos(_rad);
//                    var y = _top - _radio * Math.sin(_rad);
//                    this.setDrawColor(colores[z][0], colores[z][1], colores[z][2]);
//                    this.line(_left, _top, x, y);
//                    this.setLineWidth(1);

//                    if (lineatexto == 0) {
//                        lineatexto = _radio;
//                        _radio = _radio + 15;

//                        x = _left + _radio * Math.cos(_rad);
//                        y = _top - _radio * Math.sin(_rad);
//                    }

//                    if (lineatexto > 1) {

//                        _radio = lineatexto;
//                        lineatexto = 1;
//                        coordenadastexto.push({ x: x, y: y, data: _data[z], l: _left, t: _top });
//                    }
//                }
//                tiempo = tiempo + _grad - 0.1;
//            }
//        }


//        tiempo = 0;
//        this.setFontSize(12);
//        for (var t in coordenadastexto) {
//            this.setDrawColor(colores[t][0], colores[t][1], colores[t][2]);
//            this.line(coordenadastexto[t].l, coordenadastexto[t].t, coordenadastexto[t].x, coordenadastexto[t].y);
//            this.text(parseFloat(_porcentajes[t]).toFixed(2) + '%', coordenadastexto[t].x, coordenadastexto[t].y)
//        }
//        this.setFillColor(255, 255, 255);
//        this.circle(_left, _top, _radio / 5, 'FD');
//        this.setLineWidth(0);
//    }

//}));
