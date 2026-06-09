const formSurvey = document.getElementById("form-survey-perokok")

function handleSubmit(e){
    e.preventDefault()
    const datas = new FormData(e.target)
    const savedSurvey = window.localStorage.getItem("survey")
    let dataArray = []
    const formData = {}
    const formatObjectData = Object.fromEntries(datas.entries())
    
    for(const data in formatObjectData){
        if(formatObjectData[data] === "on"){
          if(formData["rokok"]) formData["rokok"] = [...formData["rokok"], data]
          else formData["rokok"] = [data]
        } else {
          formData[data] = formatObjectData[data]
        }
    }

    if(savedSurvey) dataArray = [...JSON.parse(savedSurvey)]

    dataArray.push(formData)
    window.localStorage.setItem("survey", JSON.stringify(dataArray))
    console.log(formData)
    console.log(formSurvey.childNodes)
}

formSurvey.addEventListener("submit", (e) => { handleSubmit(e) })