const tbody = document.querySelector(".table-body")
const dataSurvey = JSON.parse(window.localStorage.getItem("survey"))

dataSurvey.forEach((list, idx) => {
    const tr = document.createElement("tr")
    tr.setAttribute("height", "70")
    const ol = document.createElement("ol")
    ol.setAttribute("align", "start")
    
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
            const res = cig.split("-").map((item) => 
                item.charAt(0).toUpperCase()+item.slice(1)
            ).join(" ")

            const listCigarette = document.createElement("li")
            listCigarette.classList.add("listing")
            listCigarette.innerText = res
            ol.appendChild(listCigarette)
        })

        tr.appendChild(ol)
    }
    tbody.appendChild(tr)
})
