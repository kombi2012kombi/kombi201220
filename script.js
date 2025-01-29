const btn = document.getElementById(`btn`);
const eye = document.getElementById(`eye`);
const parolInput = document.getElementById(`parol`);
const nomerInput = document.getElementById(`nomer`);
const box = document.getElementById(`box`);
const ota = document.getElementById(`ota`);
const back=document.getElementById(`back`);

localStorage.setItem("ism","Otabekov Kamron")
localStorage.setItem("gruh","F2 1944")
localStorage.setItem("coin","7999 coin")




eye.addEventListener(`click`, () => {
    if (parolInput.type === `password`) {
        parolInput.type = `text`;
    } else {
        parolInput.type = `password`;
    }
})





parolInput.addEventListener(`input`, () => {
    if (nomerInput.value.length > 0 && parolInput.value.length > 3) {
        btn.disabled = false;
        btn.style.backgroundColor = `#f0400f`;
    } else {

        btn.disabled = false;
        btn.style.backgroundColor = `#ec8c71`;

    }
})

btn.addEventListener("click",()=>{
    if(parolInput.value=="1234"&& nomerInput.value=="mars"){
        box.style.display="none";
        ota.style.display="block";
    }
    else{
        alert("login yoki parol hato")
    }
})
parolInput.addEventListener(`keypress`,(e)=>{
    if(e.key==`Enter`){
        if(parolInput.value=="1234"&& nomerInput.value=="mars"){
            box.style.display="none";
            ota.style.display="block";
        }
        else{
            alert("login yoki parol hato")
        }
    }

})

back.addEventListener("click",()=>{
    box.style.display="block";
        ota.style.display="none";
})




