const changeImage = () => {
  const images = document.querySelectorAll('#image-container > img');

  for(const image of images) {
    image.classList.remove("main__img--selected")
  }

  const selectedItem = images[Math.floor(Math.random() * images.length)]

  selectedItem.classList.add("main__img--selected")
}

// set randomly image on startup
changeImage();

// make non correct button
const nonButton = document.querySelector(".btn.btn--small")

nonButton.addEventListener("click", (event) => {
  const randomlyX = Math.floor(Math.random() * event.currentTarget.offsetLeft)
  const revertX = (Math.floor(Math.random() * 100) / 50) < 2 && "-"
  const randomlyY = Math.floor(Math.random() * event.currentTarget.offsetTop) 
  const revertY = (Math.floor(Math.random() * 100) / 50) < 2 && "-"


  nonButton.style.left = `${revertX}${randomlyX}px`
  nonButton.style.top = `${revertY}${randomlyY}px`
})

// make correct button
const correctButton = document.querySelector("#correct")
const successImg = document.querySelector(".success__wrapper")
const mainTitle = document.querySelector(".main__title")
const mainTitleSuccess = document.querySelector(".main__title--success")

correctButton.addEventListener("click", (event) => {
  mainTitle.style.display = "none"
  mainTitleSuccess.style.display = "initial"
  successImg.style.display = "initial"

  changeImage()
})
