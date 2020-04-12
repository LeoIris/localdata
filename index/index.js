// ~ function () {
//     function check(n) {
//         n = Number(n);
//         return n = isNaN(n) ? 0 : n;
//     }

//     function add(n) {
//         n = check(n);
//         return this + n
//     };

//     function minus(n) {
//         n = check(n);
//         return this - n
//     }
//     ['add', 'minus'].forEach(item => {
//         Number.prototype[item] = eval(item);
//     })
// }();

// console.log((5).add(3).minus(2));


// document.body.onclick= ()=> { 
//     //THIS指向window 
//  }



// document.body.onclick=function () { 
//THIS指向body
// Array.sort(function (a,b){
//     //THIS指向window
//     return a - b
// })
//     var arr=[2,1,7,5,4,7,9]
//     arr.sort((a,b)=>{
//         //THIS指向body
//         return a - b
//     })
//     console.log(arr)
//  }

// ~ function () {
//     function myindexof(T) {
//         let myT = T.length,
//             myS = this.length,
//             res = -1;
//         if (myS < myT) {
//             return -1
//         }
//         for (let i = 0; i <= myS - myT; i++) {
//             if (this.substr(i, myT) === T) {
//                 res = i;
//                 break;
//             }
//         }
//         return res;
//     }
//     String.prototype.myindexof = myindexof
    //正则处理
//     function myindexof(t){
//         let myt = RegExp(T);
//         let res = myt.exec(this);
//         return res==null?-1:res.index
//     }
//     String.prototype.myindexof=myindexof

// }();

// let S = 'bbbbbaaaaaaaa'
// T = 'a'
// console.log(S.myindexof(T))


// 100 和‘100’作为属性名会重叠为一个属性名100 
//Symble是ES6中的新增数据类型 他创建的值是唯一的
//对象本身作为属性名会先调用tostring方法，因此会统一变为Objiect Objiect
//  正则表达式：  ^在[]中表示非

//匹配网址的正则表达式
//url格式：1协议 次要 http|https|ftp  
//2域名 必须   xxx.xx.xx
//3请求路径  次要 index/stu/xx  
//4问号传参  次要
//5哈希 #xx
// let str ="https://www.bilibili.com/video/BV1n4411m7TQ?p=7"
// let reg =/^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
// console.log(reg.exec(str)) 

function FOO(){
    FOO.a=function () {
        console.log(1)
      };
    this.a=function (){
        console.log(2)
    }
}

FOO.prototype.a=function () {
    console.log(3)
  }
FOO.a=function () {
    console.log(4)
  }

FOO.a()   //4
let f1=new FOO()   //执行一次FOO，其this.a指向f1

FOO.a()  //1
f1.a()   //2
