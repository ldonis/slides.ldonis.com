document.addEventListener('DOMContentLoaded', function() {

    if (location.hash != "#slide0") {
        location.href = "#slide0"
        location.reload()
        return
    }

    var elements = []

    // getting elements to navigate
    var sections = document.getElementsByTagName("section")

    // creating collection of navigable elements
    for (var section in sections) {

        elements.push(section)

    }

    // adding identifier to slide elements (sections)
    elements.map(function(element, index) {

        var index_next = index + 1
        var index_prev = index - 1

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

    document.onkeydown = function(e) {

        var id = (location.hash).substring(1)
        var slide = document.getElementById(id)

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
