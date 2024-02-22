let passwordString = "123asdGHY456tgyUKIL789NHGFeraftsyuwiopMNBVCf0987";
let textInput = document.querySelector('.textInput');
let slider = document.querySelector('.slider');
let displayLength = document.querySelector('.lengthDisplay');
let generateBtn = document.querySelector('.generatePassword');

displayLength.innerHTML = slider.value;

//updating the current slider value
slider.oninput = function (){
    displayLength.innerHTML = this.value;
}

generateBtn.addEventListener("click", function(){
    let length = displayLength.innerHTML;
    let pasword = '';
    for(let i=0; i<length; i++)
    {
        let nums = Math.floor(Math.random()*length);
        // console.log(nums);
        pasword += passwordString.charAt(nums);
    } 

    textInput.value = pasword;
    // console.log(textInput.value);
   
});