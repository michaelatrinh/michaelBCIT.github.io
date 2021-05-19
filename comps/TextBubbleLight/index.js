function textBubbleLightUI(bubbleText = "lorem ipsum", width = "250px", bubbleColor = "#FFFFFF", font="18px", fontcolor="#766654", height="auto", mgtop="0px"){
    return `
        <div style="
        display: flex;
        background-color: ${bubbleColor};
        width: ${width};
        height: ${height};
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        ">
            <span style="
            font-size: ${font};
            font-family: sans-serif;
            font-weight: bold;

            color: ${fontcolor};
            padding: 0.75rem;
            text-align: center;
            margin-top: ${mgtop}
            ">
            ${bubbleText}
            </span>
        </div>
    `
}

// rando comment
// export const textBubbleLight = textBubbleLightUI();