function MyButtonUI(text="TIP 1", src="https://www.flaticon.com/svg/vstatic/svg/135/135763.svg?token=exp=1614648432~hmac=9e642e1bafc99f9244e976aa3c4fbdf9"){
  return `
    <div style='
    height: 130px;
    width: 125px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: sans-serif;

    background-color: #FBAD81;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
         box-shadow: 0 10px 6px -6px #777;
    
    '>

    <div style='
      padding-top: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
    '>
    ${text}</div>

      <img src= ${src} alt="bread" 
        style= '
        width: 80px;
        height: 80px;
        align-items: center;
        justify-content: center;
        display: flex;
        padding-top: 10px;
        padding-left: 20px;
        '>

    </div>

  `

}

//export const ButtonUI = MyButtonUI();