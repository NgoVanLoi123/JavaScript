//bai1
function giaithua(a){
    if(a==0){
        return 1;
    }else if(a==1){
        return 1;
    }else{
        return a*giaithua(a-1);
    }
}
console.log(giaithua(5));
//bai2
function daochuoi(s){
   let charArray = s.split('');
   let left=0;
   let right =charArray.length - 1;
   while(left < right){
        let tmp=charArray[left];
        charArray[left] = charArray[right];
        charArray[right] =tmp;
        left++;
        right--;
   }
   let reversedString = charArray.join('');
   console.log(reversedString);
}
daochuoi("hello");
//bai3
function maquocgia(s){
    switch(s){
    case 'VN':
        console.log("Xin chào");
        break;
    case 'EN':
        console.log("Hello");
        break;
    case 'Fra':
        console.log("Bonjour"); 
        break;   
    default:
        console.log("Bạn đã nhập sai");
        break;
}
}
maquocgia("Fra");
//bai4
function catchuoi(s){
    let charArray =s.split('');
    let result='';
    for(let i=0;i<10;i++){
        result +=s[i];
    }
    result+='...';
    console.log(result);
}
catchuoi('xinchaocacban');

