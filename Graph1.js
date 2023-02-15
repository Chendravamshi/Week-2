let arr=[]
let labels=['day-1','day-2','day-3','day-4','day-5']
let arrsize=0
function getforecast()
{
    var cityname=document.getElementById("cityname").value
    var link ="https://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&appid=a2867c339ca7e1a067601e684eaab3e3&units=metric"
    console.log(link)
    let wdata=fetch(link)
    wdata.then((rwdata)=>
    {
        rwdata.json().then((data)=>
            {
               let temparr=data.list
               console.log(temparr.length)
               for(let i=0;i<temparr.length;i=i+8)
               {
                    arr[arrsize++]=temparr[i].main.temp;
               }
            }
        );
    }
    );
    console.log(labels)


    const ctx = document.getElementById('myChart');
     
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: '# weather forcast in celsius',
              data: arr,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
}
