const formSurvey = document.getElementById("form-survey-perokok")
const savedSurvey = window.localStorage.getItem("survey")

function handleSubmit(e){
    e.preventDefault()
    try {
        const datas = new FormData(e.target)
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
        window.location.href ="table-survey/index.html"

    } catch(err) {
        console.log(err.message)
    }
}

formSurvey.addEventListener("submit", (e) => { handleSubmit(e) })