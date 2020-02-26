//when link is clicked, counterValue will increase by 1, the switch will cause javascriptPuzzle() to run only on the first click (when counterValue = 1)
let counterValue = 0

function counter() {
    counterValue++
    switch (counterValue) {
        case 1:
            javascriptPuzzle();
            break;
        default:
            alert('This operation has already been completed');
    }



    function javascriptPuzzle() {

        let objectOne = {
            names: ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Michael Spangler']
        }

        let objectTwo = {
            names: ['Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Tyler Viles']
        }

        let resultObject = Object.create(objectOne)

        console.log(objectOne.names)
        console.log(objectTwo.names)
            //simultaneously adds new strings from objectTwo and gets rid of duplicates
        for (let i = 0; i < objectTwo.names.length; i++) {
            for (let j = 0; j < resultObject.names.length; j++) {
                if (objectTwo.names[i] === resultObject.names[j]) {
                    objectTwo.names.shift()
                } else {
                    resultObject.names.push(objectTwo.names[i])
                }
                break
            }
        }

        console.log(resultObject.names)
            //creates an unordered list of all the names in resultObject just below the bottom-paragraph
        const ul = document.createElement('ul')
        const li1 = document.createElement('li')
        const li2 = document.createElement('li')
        const li3 = document.createElement('li')
        const li4 = document.createElement('li')
        const li5 = document.createElement('li')
        const li6 = document.createElement('li')
        const li1Text = document.createTextNode(resultObject.names[0])
        const li2Text = document.createTextNode(resultObject.names[1])
        const li3Text = document.createTextNode(resultObject.names[2])
        const li4Text = document.createTextNode(resultObject.names[3])
        const li5Text = document.createTextNode(resultObject.names[4])
        const li6Text = document.createTextNode(resultObject.names[5])
        li1.appendChild(li1Text)
        li2.appendChild(li2Text)
        li3.appendChild(li3Text)
        li4.appendChild(li4Text)
        li5.appendChild(li5Text)
        li6.appendChild(li6Text)
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        ul.appendChild(li5)
        ul.appendChild(li6)
        document.getElementById("bottom-paragraph").appendChild(ul)
    }
}