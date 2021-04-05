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
                result = result.replaceAll("<p>", "").replaceAll("</p>", "")
                values = result.split(";")
                if(values[0] === 'rov'){
                    processData(values.slice(1))
                }
                console.log(result)
            }
        })
    }, 500)
}
