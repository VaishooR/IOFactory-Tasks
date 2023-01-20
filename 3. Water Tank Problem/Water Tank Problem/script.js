var trap=function(blocksHeight){                       //blockHeight is an array with the heights of each block
    
    let waterTrapped=0;
    let totalLengthOfBlocks=blocksHeight.length;         //total length of (blocks + empty spaces)
    
    let firstIndex=0;                                    //1st index of 'blockHeight' array (i.e) here 0
    let lastIndex=blocksHeight.length-1;                 //Last index of 'blockHeight' array (i.e) here 9
    
    let MaxHeightFromLeft=blocksHeight[firstIndex];      //initial maximum height from left of 'blockHeight' array. (i.e) here 0 (value at 0th index)
    let MaxHeightFromRight=blocksHeight[lastIndex];      //initial maximum height from right of 'blockHeight' array. (i.e) here 0 (value at 9th index)
    
    let arrayFromLeft=new Array(totalLengthOfBlocks);    //An empty Array for storing the maximum block height present in the left, compared with current block height
    let arrayFromRight=new Array(totalLengthOfBlocks);   //An empty Array for storing the maximum block height present in the right, compared with current block height
    
    for(i=0;i<=lastIndex;i++){
      MaxHeightFromLeft=Math.max(blocksHeight[i],MaxHeightFromLeft);    //Starting from index 0, height of each block is compared with updated value of 'MaxHeightFromLeft' and
      arrayFromLeft[i]=MaxHeightFromLeft;                               //max of the compared values, is stored in the 'arrayFromLeft' array at their respective indexes.
    }
    for(j=lastIndex;j>=0;j--){                                           
      MaxHeightFromRight=Math.max(blocksHeight[j],MaxHeightFromRight);   //Starting from index 9, height of each block is compared with updated value of 'MaxHeightFromRight'  
      arrayFromRight[j]=MaxHeightFromRight;                              //and max of the compared values, is stored in the 'arrayFromRight' array at their respective indexes.
    }
    
    for(k=0;k<=lastIndex;k++){
      waterTrapped += (Math.min(arrayFromLeft[k],arrayFromRight[k])-blocksHeight[k])  //At each index, both 'arrayFromLeft' and 'arrayFromRight' values are compared.
    }                                                                                 //sum of (min of compared values - block height) =  total water trapped between blocks
    return waterTrapped; 

  }
  
  let result = trap([0,4,0,0,0,6,0,6,4,0])
  console.log('Water trapped is '+ result + ' units')                                 // "Water trapped is 18 units"