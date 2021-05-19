function StartButtonUI(page="page1", text="Start") {
    return `<div class="back" style="
    background-color:#FE9179;
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
    onclick='StartButtonUI.NextPage("${page}")'
    >${text}?



    </div>


    `
}

StartButtonUI.NextPage = (page) =>{
    console.loge(page);
    document.querySelector(page).style.display = "flex";
}

//export const StartButton = StartButtonUI();