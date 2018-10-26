//  车顶
index_ctx.beginPath();

index_ctx.moveTo(150,20);
index_ctx.lineTo(300,20);

index_ctx.lineTo(335,55);
index_ctx.lineTo(385,55);

index_ctx.lineTo(385,95);
index_ctx.lineTo(335,95);

index_ctx.stroke();
index_ctx.closePath();

//  右车轮
index_ctx.beginPath();
index_ctx.arc(310,95,25,Math.PI*2,0,false);
index_ctx.stroke();
index_ctx.closePath();

index_ctx.beginPath();
index_ctx.arc(310,95,15,Math.PI*2,0,false);
index_ctx.stroke();
index_ctx.closePath();

//  底盘
index_ctx.beginPath();

index_ctx.moveTo(285,95);
index_ctx.lineTo(150,95);

index_ctx.stroke();
index_ctx.closePath();

//  左车轮
index_ctx.beginPath();
index_ctx.arc(125,95,25,Math.PI*2,0,false);
index_ctx.stroke();
index_ctx.beginPath();

index_ctx.arc(125,95,15,Math.PI*2,0,false);
index_ctx.stroke();
index_ctx.closePath();

//  车尾
index_ctx.beginPath();

index_ctx.moveTo(100,95);

index_ctx.lineTo(55,95);

index_ctx.lineTo(55,55);

index_ctx.lineTo(100,55);

index_ctx.lineTo(150,20);

index_ctx.stroke();
index_ctx.closePath();

//  车窗及线条
index_ctx.beginPath();

index_ctx.moveTo(100,55);
index_ctx.lineTo(335,55);
index_ctx.stroke();
index_ctx.closePath();

index_ctx.beginPath();
index_ctx.moveTo(150,20);
index_ctx.lineTo(150,55);
index_ctx.stroke();
index_ctx.closePath();

index_ctx.beginPath();
index_ctx.moveTo(225,20);
index_ctx.lineTo(225,55);
index_ctx.stroke();
index_ctx.closePath();

index_ctx.beginPath();
index_ctx.moveTo(300,20);
index_ctx.lineTo(300,55);
index_ctx.stroke();
index_ctx.closePath();