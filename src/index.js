module.exports = function check(str, bracketsConfig) {
  let arr=str.split('');
  let arrLength=str.length;
  if(arrLength%2!=0) return false;
  let index=0;
  let count;
  for(let j=0;j<bracketsConfig.length;j++)
  {
    count=0;
    index=arr.indexOf(bracketsConfig[j][0]);
    out:for(let t=index+1;t<arrLength;t++){
      if(arr[t]==bracketsConfig[j][0]){
        index=t;
      }
      else {break out;}
    }
    out2:do{
      if(index==arrLength) return false;
      index++;
      if(arr[index]==bracketsConfig[j][1])
      {
        if(count%2==0){
          arr=arr.splice(index,1);
          arr=arr.splice(index-count-1,1);
          arrLength-=2;
          break out2;
        }
        else{
          return false;
        }
      }
      count++;
    }
    while(index<arrLength);

    if(arr.indexOf(bracketsConfig[j][0])!=-1 && bracketsConfig[j][0]!='|'){
      if(arr.indexOf(bracketsConfig[j][0])==arrLength-1){
        return false;

      }
      j--;
    }
    console.log(arr);
  }

  return true;
}
