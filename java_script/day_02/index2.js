// JSON 방법
var information = {
    // key   ↑  value
    'name' : 'Yang Da Eun',
    'age' : 28,
    'address' : '대전 산서로 53번길',
    'isMarry' : false
};

var age = information.age;
if(age >= 30) {
    console.log('계란 한판')
} else { console.log('20대')
}


//상수
const PI= 3.14
var array = [1,2,3,5,10];
console.log(array[0]); //배열 0번째 값 호출
var len =array.length;
for(var i=0; i<=len; i++){
    var value =array[i];
    if(value % 2 == 0){
        console.log(value) 
    }
}

var max = 0;
for(var i=0; i<len; i++){
    if(max < array[i]){
     max = array[i];
    }
}
console.log(max)