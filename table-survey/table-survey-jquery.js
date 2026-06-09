$(document).ready(function(){
 const tbody = $(".table-body")
 const dataSurvey = JSON.parse(window.localStorage.getItem("survey"))

 dataSurvey.forEach((list, idx) => {
    const tr = $("<tr>")
    tr.attr("height", "70")
    const ol = $("<ol>")
    ol.attr("align", "start")
    
    const no = $("<td>").text(idx+1)
    const name = $("<td>").text(list.name)
    const age = $("<td>").text(list.age)
    const gender = $("<td>").text(list.gender)
		.text(list.gender === "female"? "Perempuan" : "Laki-laki")
    const smoker = $("<td>")
		.text(list.smoker.charAt(0).toUpperCase() + list.smoker.slice(1))
    const rokok = $("<td>")

    tr.append(no, name, age, gender, smoker)

    if(list.rokok && list.smoker === 'ya'){
        list.rokok.forEach((cig) => {
            const res = cig.split("-").map((item) => 
                item.charAt(0).toUpperCase()+item.slice(1)
            ).join(" ")

            const listCigarette = $("<li>")
            listCigarette.addClass("listing")
            listCigarette.text(res)
            ol.append(listCigarette)
        })

        tr.append(ol)
    }
    tbody.append(tr)
  })
})