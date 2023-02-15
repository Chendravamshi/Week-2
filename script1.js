function getinfo()
{
    var cityname=document.getElementById("cityname").value
    var link = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=a2867c339ca7e1a067601e684eaab3e3&units=metric"
    console.log(link)
    getweather(link)
}
var temp,temp_max,temp_min
function getweather(link)
{
    let wdata=fetch(link)
    wdata.then((rwdata)=>
    {
        rwdata.json().then((data)=>
            {
                let {main:{temp,temp_max,temp_min}}=data
                console.log(temp)
                var resultspace=document.getElementById("resultspace")
                resultspace.innerHTML+="<br><br>temperature today = "+temp+
                                    "<br>minimum temperature today = "+temp_min
                                    +"<br>maximum temperature today = "+temp_max
            }
        );
    }
    );
}