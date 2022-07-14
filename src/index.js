let random = () => {
    return Math.floor(Math.random() * 100);
}

let randomName = () => {
    return Math.floor(Math.random() * 22)
}


let names = [
'Tomer', 'Nate', 'Lari', 'Mark', 'Ashwin', 'Z', 'Michael', 'Tyron', 'Zach',
'Ahnaf', 'Will', 'Aaron', 'Agnieszka', 'Anastasia', 'Eriche',
'George', 'Mohammed', 'Nathan', 'Nick', 'Olivia', 'Riley', 'Shane', ]

const dogImage = document.getElementById('dog-image')
dogImage.innerHTML = ''
const dogButton = document.getElementById('random-dog')
const baseURL = 'https://random.dog/'
const selectButton = document.getElementById('select-dog')
const savedDogs = document.getElementById('saved-dogs')
const icon = document.createElement('i')
icon.setAttribute = ('class')
const adoptedDog = document.getElementById('dog-template')
const form = document.getElementById('form-section')
inputName = document.getElementById('name')
inputAddress = document.getElementById('address')
inputOccupation = document.getElementById('occupation')
dogName = document.getElementById('dog-name')


const postApplication = async (Obj) => {
    let req = await fetch('http://localhost:3000/Application', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(Obj)

    })
}


const fetchDogs = async () => {
    let req = await fetch('https://random.dog/doggos')
    let res = req.json();
    return res
}

const randomDog = async (min, max) => {
    let dogs = await fetchDogs();
    let step1 = max - min + 1;
    let step2 = Math.random() * step1
    let result = Math.floor(step2) + min;
    
    return result;
}

dogButton.addEventListener('click', async () => {
    const newDog = await fetchDogs();
    index = random();
    dogImage.src = `${baseURL}${newDog[index]}`
    dogIndex = randomName();
    dogName.textContent = names[dogIndex]
    
})

selectButton.addEventListener('click', async () => {
    const img = document.createElement('img')
    adoptedDog.src = dogImage.src
    img.addEventListener('click', () => {
        img.remove()
    }) 
    // savedDogs.append(img)
})  

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    let newObj = {
        name: inputName.value,
        address: inputAddress.value,
        occupation: inputOccupation.value,
        dog: dogName.textContent,
        image: adoptedDog.src,
    }
    inputName.value = ''
    inputAddress.value = ''
    inputOccupation.value = ''
    await postApplication(newObj)

})


