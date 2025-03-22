const photo = document.querySelector(".slider__image")
const photoSizeControl = document.querySelector(".slider__input")
photoSizeControl.value = 200
photo.style.width = `${photoSizeControl.value}px`;
photo.style.height = `${photoSizeControl.value}px`;


const sizeControl = (e) => {
    photo.style.width = `${e.target.value}px`;
photo.style.height = `${e.target.value}px`;
console.log(photoSizeControl.value)
}
photoSizeControl.addEventListener("input", _.debounce(sizeControl, 300));




const box = document.querySelector("#box")
const boxPlace = (e) => {
    box.style.left = `${e.clientX}px`
  }
document.addEventListener("mousemove", _.debounce(boxPlace, 300))