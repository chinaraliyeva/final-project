const plusImg = document.querySelectorAll('.plus_img')
const plusText = document.querySelectorAll('.plus_text')
const btn = document.querySelectorAll('.btn')



for (let i = 0; i < plusImg.length; i++) {
    plusImg[i].addEventListener("click", function(){
        for (let k = 0; k < plusText.length; k++) {
           if(i == k){
            plusText[k].classList.toggle('show_text');
            plusImg[k].classList.toggle('rotated')
           }
           else{
            plusText[k].classList.remove('show_text');
            plusImg[k].classList.remove('rotated')
           }
        }
    })
}

for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", function(){
   for (let j = 0; j < btn.length; j++) {
    if(i == j){
        btn[i].classList.toggle('clicked')
    }
    else{
        btn[j].classList.remove('clicked')
    }
   }
   })    
}
    