const dropDown_Lists = document.getElementsByTagName('li');
const button = document.getElementById('btn1');
console.log('dev') ;
for (let i = 0; i < dropDown_Lists.length; i++) {
    dropDown_Lists[i].addEventListener('click', function(){
        // dropDown_Lists[i].textContent = dropDown_Lists[i].textContent.toUpperCase();   
        button.innerHTML=dropDown_Lists[i].innerHTML                       
    });
  }