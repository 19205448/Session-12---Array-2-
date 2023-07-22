//BAI 1:
// let myColor = ["Red", "Green", "White", "Black"];
// let result = "";
// let result2= "";

// for(let i=0; i<myColor.length; i++){
//     if(i===0){
//         result+= myColor[i];
//         result2+=myColor[i];
//     }
//     else{
//     result+= '+' + myColor[i];  
//     result2+= ',' + myColor[i]
//     }

// }
// console.log(result)
// console.log(result2)


//BAI 5:
//let arr = [12,2,-9,5,3];
// let arr = prompt("nhap vao day so").split(",")
// let min = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i] < min )
//     min = arr[i]
// }

// alert(`so nho nhat la ${min}`)


//BAI 6:
// let arr2 = [3,4, 6, -9, 10, -88,3, 2];
// let number = Number(prompt('nhap vao mot so'));
// var found = false ;

// for(var i = 0 ;i < arr2.length; i++){
//     if(number === arr2[i] ){
//         alert('tim thay tai index '+ i);
//         found = true;
//     }   
// }
//     if(found){
//         found = true;
//     }
//     else
//         alert('khong tim thay '+number);

//BAI 7:
//MY SHEEP
var arr=[5,7,300,90,24,50,75];
console.log('My sheep   : '+arr);
//MAX
let max = Math.max(...arr)
console.log('Max        : '+max);
//AFTER CUT
for(let i=0;i<arr.length;i++){
    if(max === arr[i]){
        arr[i]=8;
    }
}
console.log('After cut  : '+arr);

//LOOP
for(let k=1; k<=3; k++){

for(let j=0; j<arr.length; j++){
    arr[j]+=50
}
console.log(`Month ${k}    : ${arr}   `);
var maxMonth =Math.max(...arr);
for(let q=0; q<arr.length; q++){
    if(maxMonth===arr[q]){
        arr[q]=8
    }
}
console.log('After cut  : ' +arr);
}

//SELL 
let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log('Sum = '+sum);
console.log('$$$ = '+sum*2);















