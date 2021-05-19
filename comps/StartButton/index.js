// function StartButtonUI(text="Start") {
//     return `<div class="back" style="
//     background-color:#FE9179;
//     Width:241px;
//     Height:64px;
//     Top:629px;
//     Left:66px;
//     Border-radius:20px;
//     color: white;

//     display:flex;
//     align-items:center;
//     justify-content: center;
//     font-family: sans-serif;
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 36px;


//     display:flex;
//     align-items:center;
//     justify-content: center;

//     font-family: sans-serif;
//     font-weight: bold;
//     font-size: 36px;


//     line-height: 42px;
//     text-align: center;
//     ">${text}



//     </div>


//     `
// }

// //export const StartButton = StartButtonUI();

function StartButtonUI(text="Start") {
    return `<div class="back" style="

    background-color:#59A091;

    background-color:#59A091;

    Width:241px;
    Height:64px;
    Top:629px;
    Left:66px;
    Border-radius:20px;
    color: white;

    display:flex;
    align-items:center;
    justify-content: center;

    font-family: sans-serif;
    font-weight: bold;
    font-size: 36px;

    line-height: 42px;
    text-align: center;
    "
    onclick='NextPage(".page2")'
    back:hover{
        background-color: #FBAD81;
    }
    >${text}
    </div>
    `;
}
//export const StartButton = StartButtonUI();

