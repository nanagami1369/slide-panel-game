(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],f=0,h=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},1887:function(e,t,n){"use strict";var r=n("1f97"),i=n.n(r);i.a},"1f97":function(e,t,n){},"85ec":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("0086"),a=n.n(i),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Game")],1)},o=[],c=n("d4ec"),u=n("262e"),l=n("2caf"),f=n("9ab4"),h=n("60a3"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"control"}},[n("div",[e._v(" "+e._s(e.Timer.viewString)+" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.Timer.isEnuable,expression:"Timer.isEnuable"}],on:{click:e.disassemble}},[e._v("スタート")])])]),n("main",{attrs:{id:"main"}},[n("table",{staticClass:"gameView"},[e._l(e.correctAnswer,(function(t,r){return[n("tr",{key:e.createKey(r)},[e._l(t,(function(t,i){return[n("td",{key:e.createKey(i,r),staticClass:"panel",style:e.GetcolorPalette(e.correctAnswer[r][i])})]}))],2)]}))],2),n("table",{staticClass:"gameView"},[e._l(e.panels,(function(t,r){return[n("tr",{key:e.createKey(r)},[e._l(t,(function(t,i){return[n("td",{directives:[{name:"touch",rawName:"v-touch:swipe",value:e.move(i,r),expression:"move(x,y)",arg:"swipe"}],key:e.createKey(i,r),staticClass:"panel",style:e.GetcolorPalette(e.panels[r][i])})]}))],2)]}))],2)])])},p=[],m=(n("4160"),n("fb6a"),n("a434"),n("d3b7"),n("25f0"),n("159b"),n("96cf"),n("1da1")),d=n("bee2"),g=function(){function e(){Object(c["a"])(this,e),this._time=0,this._viewString="0",this._timerId=-1,this.isEnuable=!0}return Object(d["a"])(e,[{key:"Start",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isEnuable=!1,-1!==this._timerId&&clearInterval(this._timerId),this._viewString="3",e.next=5,this.sleep(1e3);case 5:return this._viewString="2",e.next=8,this.sleep(1e3);case 8:return this._viewString="1",e.next=11,this.sleep(1e3);case 11:this._viewString="start",this._timerId=setInterval((function(){n._viewString=n.time.toString(),n._time+=1,t()&&-1!==n._timerId&&(clearInterval(n._timerId),n._viewString=n.time+"秒でClear",n.isEnuable=!0)}),1e3);case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sleep",value:function(e){return new Promise((function(t){setTimeout((function(){return t()}),e)}))}},{key:"time",get:function(){return this._time}},{key:"viewString",get:function(){return this._viewString}}]),e}(),b=function e(t){Object(c["a"])(this,e),this.backgroundColor="",this.backgroundColor=t},y=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.call(this),e.panels=[[0,0,0,1,1,1],[0,0,0,1,1,1],[0,0,0,1,1,1],[2,2,2,3,3,3],[2,2,2,3,3,3],[2,2,2,3,3,3]],e.correctAnswer=new Array,e.colorPalette=["red","blue","green","yellow"],e.Timer=new g,e.panels.forEach((function(t){return e.correctAnswer.push(t.slice(0))})),e}return Object(d["a"])(n,[{key:"GetcolorPalette",value:function(e){return new b(this.colorPalette[e])}},{key:"isClear",value:function(){return JSON.stringify(this.panels)===JSON.stringify(this.correctAnswer)}},{key:"move",value:function(e,t){var n=this;return function(r){switch(r){case"top":return void n.moveTop(e);case"bottom":return void n.moveBottom(e);case"right":return void n.moveRight(t);case"left":return void n.moveLeft(t);default:return void console.log(r)}}}},{key:"moveTop",value:function(e){if(0<=e&&e<this.getXSize())for(var t=0;t<this.panels.length-1;t++){var n=this.panels[t][e];this.panels[t].splice(e,1,this.panels[t+1][e]),this.panels[t+1].splice(e,1,n)}}},{key:"moveBottom",value:function(e){if(0<=e&&e<this.getXSize())for(var t=this.panels.length-1;0<t;t--){var n=this.panels[t-1][e];this.panels[t-1].splice(e,1,this.panels[t][e]),this.panels[t].splice(e,1,n)}}},{key:"moveRight",value:function(e){if(0<=e&&e<this.getYSize())for(var t=this.panels[e],n=t.length-1;0<n;n--){var r=t[n-1];t.splice(n-1,1,t[n]),t.splice(n,1,r)}}},{key:"moveLeft",value:function(e){if(0<=e&&e<this.getYSize())for(var t=this.panels[e],n=0;n<t.length-1;n++){var r=t[n];t.splice(n,1,t[n+1]),t.splice(n+1,1,r)}}},{key:"createKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return-1===t?"#"+String(e)+"#":String(e)+"_"+String(t)}},{key:"getXSize",value:function(){return this.panels[0].length}},{key:"getYSize",value:function(){return this.panels.length}},{key:"_rand",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"disassemble",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.Timer.Start(this.isClear);case 2:for(t=this.getXSize()+this.getYSize(),this.moveRight(3),n=0;n<t;n++)n%2===0?this.moveBottom(this._rand(this.getXSize())):this.moveRight(this._rand(this.getYSize()));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(h["b"]);y=Object(f["a"])([h["a"]],y);var w=y,_=w,S=(n("1887"),n("2877")),O=Object(S["a"])(_,v,p,!1,null,"5246bfa0",null),k=O.exports,j=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(h["b"]);j=Object(f["a"])([Object(h["a"])({components:{Game:k}})],j);var x=j,P=x,T=(n("034f"),Object(S["a"])(P,s,o,!1,null,null,null)),z=T.exports;r["a"].use(a.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(z)}}).$mount("#app")}});
//# sourceMappingURL=app.269c39e5.js.map