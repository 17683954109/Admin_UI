
/*
*  首页 js 文件
* */

/*
*  获取屏幕的宽度
* */
let client_w = document.documentElement.clientWidth;
let client_h = document.documentElement.clientHeight;

/*
*  根据屏幕大小得到首页背景的canvas 宽高
* */
let index_bg = document.getElementById('index_bg');
let index_bg_w = client_w;
let index_bg_h = client_h*0.2;
index_bg.setAttribute('width',index_bg_w);
index_bg.setAttribute('height',index_bg_h);
let index_ctx = index_bg.getContext('2d');

index_ctx.lineWidth=5;

//  汽车类
function Car(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
    car_arr.push(this);
}

//  汽车数组
let car_arr = [];

//  汽车的渲染方法
Car.prototype.render = function(){
    index_ctx.strokeStyle = this.color;
    // x : 150 , y : 20
//  车顶
    index_ctx.beginPath();

    index_ctx.moveTo(this.x, this.y);
    index_ctx.lineTo(this.x+150, this.y);

    index_ctx.lineTo(this.x+185, this.y+35);
    index_ctx.lineTo(this.x+235, this.y+35);

    index_ctx.lineTo(this.x+235, this.y+75);
    index_ctx.lineTo(this.x+185, this.y+75);

    index_ctx.stroke();
    index_ctx.closePath();

//  右车轮
    index_ctx.beginPath();
    index_ctx.arc(this.x+160, this.y+75, 25, Math.PI * 2, 0, false);
    index_ctx.stroke();
    index_ctx.closePath();

    index_ctx.beginPath();
    index_ctx.arc(this.x+160, this.y+75, 15, Math.PI * 2, 0, false);
    index_ctx.stroke();
    index_ctx.closePath();

//  底盘
    index_ctx.beginPath();

    index_ctx.moveTo(this.x+135, this.y+75);
    index_ctx.lineTo(this.x, this.y+75);

    index_ctx.stroke();
    index_ctx.closePath();

//  左车轮
    index_ctx.beginPath();
    index_ctx.arc(this.x-25, this.y+75, 25, Math.PI * 2, 0, false);
    index_ctx.stroke();
    index_ctx.beginPath();

    index_ctx.arc(this.x-25, this.y+75, 15, Math.PI * 2, 0, false);
    index_ctx.stroke();
    index_ctx.closePath();

//  车尾
    index_ctx.beginPath();

    index_ctx.moveTo(this.x-50, this.y+75);

    index_ctx.lineTo(this.x-95, this.y+75);

    index_ctx.lineTo(this.x-95, this.y+35);

    index_ctx.lineTo(this.x-50, this.y+35);

    index_ctx.lineTo(this.x, this.y);

    index_ctx.stroke();
    index_ctx.closePath();

//  车窗及线条
    index_ctx.beginPath();

    index_ctx.moveTo(this.x-50, this.y+35);
    index_ctx.lineTo(this.x+185, this.y+35);
    index_ctx.stroke();
    index_ctx.closePath();

    index_ctx.beginPath();
    index_ctx.moveTo(this.x, this.y);
    index_ctx.lineTo(this.x, this.y+35);
    index_ctx.stroke();
    index_ctx.closePath();

    index_ctx.beginPath();
    index_ctx.moveTo(this.x+75, this.y);
    index_ctx.lineTo(this.x+75, this.y+35);
    index_ctx.stroke();
    index_ctx.closePath();

    index_ctx.beginPath();
    index_ctx.moveTo(this.x+150, this.y);
    index_ctx.lineTo(this.x+150, this.y+35);
    index_ctx.stroke();
    index_ctx.closePath();

};

Car.prototype.update = function () {
    this.x+=10;
};

Car.prototype.die = function(){
  if (this.x===client_w){
      for (let i = 0; i<car_arr.length;++i){
          if (car_arr[i]===this){
              car_arr.splice(i,1);
          }
      }
  }else{
      this.render();
  }
};

setInterval(function () {
    index_ctx.clearRect(0,0,index_bg_w,index_bg_h);
    car_arr.forEach(e=>{
        e.update();
        e.die();
    });
},30);

setInterval(function () {
    new Car(150,20,`rgb(${Math.random()*254},${Math.random()*254},${Math.random()*254},0.7)`);
},2000);

