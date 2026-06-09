const tbody = document.querySelector(".table-body")

const dataSurvey = JSON.parse(window.localStorage.getItem("survey"))
console.log(dataSurvey)

dataSurvey.forEach((list, idx) => {
    const tr = document.createElement("tr")
    tr.setAttribute("height", "60")
    const ul = document.createElement("ol")
    ul.setAttribute("align", "start")
    
    const no = document.createElement("td")
    no.innerText = idx+1

    const name = document.createElement("td")
    name.innerText = list.name

    const age = document.createElement("td")
    age.innerText = list.age

    const gender = document.createElement("td")
    gender.innerText = list.gender === "female"? "Perempuan" : "Laki-laki"
    
    const smoker = document.createElement("td")
    smoker.innerText = list.smoker.charAt(0).toUpperCase() + list.smoker.slice(1)
   
    const rokok = document.createElement("td")
    tr.append(no, name, age, gender, smoker)
    if(list.rokok){
        list.rokok.forEach((cig) => {
            const res = cig.split("-").join(" ")
            const listCigarette = document.createElement("li")
            listCigarette.classList.add("listing")
            listCigarette.innerText = res
            ul.appendChild(listCigarette)
        })

        tr.appendChild(ul)
    }
    tbody.appendChild(tr)
})
