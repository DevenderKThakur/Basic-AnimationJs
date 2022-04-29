let ima = document.querySelector('img');
document.addEventListener('click',change);
 function change(){
     if(ima.src.includes('monkeyClosed.png')){
          ima.src='monkeyOpen.png';
     }else{
         ima.src='monkeyClosed.png'
     }
}