function SubHeaderUI (h="64px", w="361px", size="24px", text="ENVIRONMENTAL COSTS", fontcolor="#FFFFFF", bgcolor="#59A091"){
    return `<div style="
    display: flex;
    background: ${bgcolor};
    border-radius: 50px;
    justify-content: center;
    align-items:center;
    height:${h};
    width:${w};
    padding: 3px;
    ">
        <h1 style="
        font-family: sans-serif;
        font-weight: bold;
        font-size: ${size};
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 23pt;
        text-align: center;
        color: ${fontcolor};
        margin: 0;
        ">
        ${text}
        </h1>
    </div>`;
}
//export const SubHeader = SubHeaderUI();   