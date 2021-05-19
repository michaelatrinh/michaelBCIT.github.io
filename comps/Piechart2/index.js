function Pie(){
    return`
        <div onclick='Pie.HandleClick(this)'>
            <h1 style='
                opacity: 1;
                transition: opacity 1s;
            '>Click here!</h1>
            <div id='pie'
            style='
                position: relative;

                width: 0px;
                height: 0px;
                transition: width 0.5s, 0.5s;
                border-radius: 50%;
                background: conic-gradient(#FE9179 20%, #FCC695 0);
                
                margin-bottom: 50px;
                margin-left: 50px;

                padding: 50px;


                
            '>

            </div>
        </div>
    
    `
}

Pie.HandleClick = (el) =>{
    el.querySelector("h1").style.opacity= 0;
    setTimeout(()=>{
        el.querySelector("#pie").style.width = "100px";
        el.querySelector("#pie").style.height = "100px";

        var percent = 1;
        setInterval(()=>{
            if(percent <= 63){
            el.querySelector("#pie").style.background = `conic-gradient(#FE9179 ${percent}%, #FCC695 0)`;
            }
            percent += 1;
        },30)
    }, 1000)

}