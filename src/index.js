let random = () => {
    return Math.floor(Math.random() * 100);
}

let names = ['Tomer', 'Nate', 'Lari', 'Mark', 'Ashwin', 'Z', 'Michael']

const dogImage = document.getElementById('dog-image')
dogImage.innerHTML = ''
const dogButton = document.getElementById('random-dog')
const baseURL = 'https://random.dog/'
const selectButton = document.getElementById('select-dog')
const savedDogs = document.getElementById('saved-dogs')





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
})

selectButton.addEventListener('click', async () => {
    img = document.createElement('img')
    img.src = dogImage.src
    img.addEventListener('click', () => {
        img.remove()
    }) 
    savedDogs.append(img)
})  

