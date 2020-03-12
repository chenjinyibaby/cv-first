let dome = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*你好，我是一个前端新人，
*我叫陈瑾仪，
*现在我要来展示一下我的前端功底，
*制作一个八卦图，
*首先我们要准备一个div,
*/
#div1{
   border:1px solid red;
   width:200px;
   height:200px;
  
}
/*接下来我要准备把它变成一个圆,
*注意看好咯,
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
border:none;
}
/*
众所周知的是，太极图是什么样的，
接下来我们要将这个圆变成两个对称的颜色
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
添加两个两个风火轮;
*/
#div1::before{
  width: 100px;
  height:100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
  
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;

let n = 0;
//string = string.replace(/\n/g, "<br>"); 正则表达式，此时每一个都换行但是会显示<
let string2 = "";
//console.log(string.length);
//demo.innerHTML = string.substring(0, n);
let step = () => {
  setTimeout(() => {
    //console.log(n);
    if (string[n] === "\n") {
      string2 += "<br>"; //string2 = string2 +<br> 如果是回车就不照搬,如果有两个if，可以改写？：表达式
    } else if (string[n] === " ") {
      //"空格"
      string2 += "&nbsp;";
    } else {
      string2 += string[n]; //string2 = string2 +string[n]如果不是回车就照搬
      //console.log(string2);
    }
    n = n + 1;
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    demo.scrollTo(0, 9999);
    if (n < string.length) {
      step();
    }
  }, 50);
};
step();
