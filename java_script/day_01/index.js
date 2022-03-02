
// 자바 
// FileSystem.out.println("Hello World") 
console.log('Hello World');
// 자바스크립트는 "", '' 구분 안해도 됨
var x = 10;
var y = '안녕하세요';
console.log('x의 값은?'+ x);
console.log('y의 값은?'+ y);
console.log('blah blah');

var num = 10;
var num2 = 20;
var result = num+num2;
console.log(result);
if(result == 30){
    console.log('30입니다.')
}

var num = 10;
var num2 = 20;
var result = num2-num;
console.log(result);
if(result == 10){
    console.log('10입니다.')
}

for(var i=0; i<10; i++){
if(i%2 == 0){
console.log(i + '는 짝수입니다.')
}
}

for(var i=0; i<10; i++){
    if(i%2 == 1){
        console.log(i + '는 홀수입니다')
    }
}

for(var i=0; i<6; i++){
    for(var j=0; j<i; j++ ){
        console.log('*')
    }
    console.log('')
}

