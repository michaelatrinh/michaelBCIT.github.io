

//Alicia

import {BackNextButton} from '../comps/BackNextButton';
import {PieChart} from '../comps/PieChart';

//Arielle
import {ButtonUI} from '../accomps/button';
import {TabUI} from '../accomps/tab';
import {TrashCan} from '../accomps/trash-can';
import {FooterUI} from '../accomps/footer';




//Jessica
import {Header} from '../comps/header';
import {SubHeader} from '../comps/subheader';
import {StartButton} from '../comps/StartButton';
import {LogoUI} from '../comps/Logo';


export default {
    title: "My Components"
}

//Jessica
export const MyHeader = () => Header;
export const MySubHeader = () => SubHeader;
export const StartButtonUI = () => StartButton;
export const MyLogoUI = () => LogoUI;

//Alicia
export const MyBackNextButton = () => BackNextButton;
export const MyPieChart = () => PieChart;


//Arielle
export const MyButtonUI = () => ButtonUI;
export const MyTabUI = () => TabUI;


import {StartButton} from '../comps/StartButton';
export const StartButtonUI = () => StartButton;

import {LogoUI} from '../comps/Logo';
export const MyLogoUI = () => LogoUI;

export const MyTrashCan = () => TrashCan;
export const MyFooterUI = () => FooterUI;

//Michael
import {textBubbleLight} from '../comps/textBubbleLight';
export const TextBubbleTemplate = () => textBubbleLight;


