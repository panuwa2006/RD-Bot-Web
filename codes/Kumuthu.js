let image = [
    {
        image: "1",
        title: "Abstract",
        description: "Created by Dineth Indusara."
    },
    {
        image: "2",
        title: "Abstract 2",
        description: "Created by Dineth Indusara."
    },
    {
        image: "3",
        title: "Flowers",
        description: "Edited by Dineth Indusara."
    },
    {
        image: "4",
        title: "Butterfly",
        description: "Created by Dineth Indusara."
    }
]

const XCODEJETinject = (kumuthu) => {
    var element = image[kumuthu]
    element = `
    <div class="box-border">
        <div class="box">
            <img draggable="false" src="./Upload/${element.image}.png" alt="">
            <h1>${element.title}</h1>
            <h3>${element.description}</h3>
        </div>
    </div>`
    //document.getElementById("gallery").innerHTML += element
}

var imageState = 0
const Proccess = () => {
    if(image[imageState])
    {
        XCODEJETinject(imageState)
        imageState++
    }
    if(image[imageState])
    {
        Proccess()
    }
}
Proccess()
