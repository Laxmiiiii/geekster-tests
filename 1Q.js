// Q. Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item.
var list = ['geek','geekster', 'geeky'];
console.log(list);
for(let i=0;i<list.length;i++){
    if(list[i]=='geekster')
    {
        var arr= i;
        for( let p=i;p<list.length-1;p++){
           list[p]=list[p+1];
        }
    }
}
list.pop();
console.log(list);