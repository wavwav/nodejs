const array = new Array();

for(let i = 0; i <10000 ; i++){
  array.push(i);
}

for(let i = 0; i <array.length ; i++){
  if(i === 0)
  {
    console.log('top start')
  console.time('top');

  }

  if(i === 9999){

    console.timeEnd('top');
     console.log('top stop')
  }
}


array.forEach((i) =>{
  if(i === 0)
  {
    console.log('under start')
  console.time('under');å

  }

  if(i === 9999){
    console.timeEnd('under');
   console.log('under stop')

  }
} )
