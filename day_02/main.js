function max(array){
    let min=0;
    for(let i=0 ;i< array.length;i++){
       if(array[i] < min){
        min=array[i];
       }
    }
    console.log(min);
}
let array1 = [1,2,3,10,5,6];
max(array1);
// bai3
function mangsodu(array){
    let rs=[]
    for(let i=0;i<array.length;i++){
        x=array[i]%2;
        rs.push(x);
    }
    console.log(rs);
}
let array2 =[4,2,5,6,2,7];
mangsodu(array2);
// bai 4
function repeatString(a){
    let array =[];
    for(let i=0;i<10;i++){
        array.push(a);
    }
    let string=array.join('-');
    console.log(string);
}
repeatString('a');
//bai6
function isSymmetriString(string){
     string=string.replace(/\s+/g, '').toLowerCase();
     let array=string.split('');
     let left=0;
     let right=array.length-1;
     let count=0;
     while(left < right){
        if(array[left] !=array[right]){
            count+=1;
        }
        left++;
        right--;
     }
     if(count==0){
       let string2=array.join('');
       console.log(string2);
     }else{
        console.log('false');
     }
}
isSymmetriString('Race car');



// Method : thêm bớt phần tử
// pop():xóa phần tử vào cuối mảng, 
//push():thêm phân tử vào cuối mảng,
//shift():xóa phần tử đầu mảng,unshift:thêm phần tử vào đầu mảng, 
//splice():thêm, xóa ở vị trí bất kì.
// splice(begin(vị trí bắt đầu thao tác), số lượng phần tử muốn xóa,các phần tử muốn thêm)
let myArray=[1,2,3,4,5,6,7,8,9,10];
console.log(myArray);
myArray.forEach(function(x){
    console.log(x);
});
myArray.splice(2,0,100,200);
console.log(myArray);
let text ="Xin chào các bạn";
let word =text.split(" ");
console.log(word);

let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email:"abc@gmail.com",
    address: {
        city: "Hà Nội",
        district:" Cầu giấy"
    },
    languages: ["vietnamese","chinese","japanese"],
    work(){
        console.log("Làm việc tại ngân hàng");
    },
    eat(food){
        console.log("Hôm nay ăn " +food);
    }
}
console.log(user.eat('phở'));
console.log(user.work());
user.age=30;
console.log(user.age);
delete user.email;
console.log(user);
console.log(Object.hasOwnProperty("name"));
console.log(Object.hasOwnProperty("address"));
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
function show(product){
    product.forEach(function(p){
        console.log(`${p.name} - ${p.price} - ${p.brand} - ${p.count}`);
    })
}
show(products);
function sumPrice(product){
    let sum=0;
    product.forEach(function(p){
       sum+= p.price*p.count;
    })
    return sum;
}
console.log(sumPrice(products));
sumPrice(products);
function findPrice(product){
    let rs=[];
    product.forEach(function(p){
       if(p.price > 20000000){
        rs.push(p);
       }
    })
    return rs;
}
console.log(findPrice(products));

function findPro(product){
    let rs=[];
    product.forEach(function(p){
       if(p.name.toLowerCase.includes('pro')){
        rs.push(p);
       }
    })
    return rs;
}
console.log(findPro(products));