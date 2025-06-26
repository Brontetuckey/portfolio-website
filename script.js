var icons = document.querySelectorAll(".icons")

icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add("icon-hover")
    })
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove("icon-hover")
    })

})

