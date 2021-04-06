function startClient() {
    $.ajax({
        url: "/startClient", success: function () {
            console.log("Client start request.")
            requestData()
        }
    })
}

function requestData() {
    window.setInterval(function () {
        $.ajax({
            url: "/requestData", success: function (result) {
                if(result){
                    result = result.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("_","")
                    result = result.substring(0,result.length -1)
                    if(result){
                        let data = result.split("%")
                        data.forEach(e => {
                            let s = e.substring(0,e.length -1)
                            let values = s.split(";")
                            if(values[0] === 'rov')
                            processData(values.slice(1))
                        })
                    }

                }
            }
        })
    }, 500)
}
