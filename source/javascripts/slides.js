document.addEventListener('DOMContentLoaded', function(){

    if (location.hash != "#slide0") {
        location.href = "#slide0"
        location.reload()
        return
    }

    var slide = -1

    let elements = []

    // getting elements to navigate
    let sections = document.getElementsByTagName("section")

    // creating collection of navigable elements
    for (var section of sections) {

        elements.push(section)

    }

    // adding identifier to slide elements (sections)
    elements.map((element, index) => {

        let index_next = index + 1
        let index_prev = index - 1

        if (index_prev < 0) {
            index_prev = elements.length - 1
        }

        if (index_next == elements.length) {
            index_next = 0
        }

        element.setAttribute("id", "slide" + index)
        element.setAttribute("slide-next", "slide" + index_next)
        element.setAttribute("slide-prev", "slide" + index_prev)

    })

    document.onkeydown = (e) => {

        let id = (location.hash).substring(1)
        let slide = document.getElementById(id)

        e = e || window.event;

        if(e.key == "ArrowDown" || e.key == "ArrowRight"){

            location.href = '#'+slide.attributes['slide-next'].value;

        }

        if(e.key == "ArrowUp" || e.key == "ArrowLeft"){

            location.href = '#'+slide.attributes['slide-prev'].value;

        }

    }

    /*
    document.getElementsByTagName("section").forEach(section => {
        
        section.addEventListener("click", () => {
            console.log("click")
        })

    })
    */

})
