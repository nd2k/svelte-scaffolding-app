import { Color } from '../types/interfaces';
import * as fs from 'fs'

export const determineColorsTheme = (colorsList: Color[]): Color[] => {
    let shadesColorList: Color[] = [];
    for (let color of colorsList) {
        let r = parseInt(color.value.substring(1, 3), 16);
        let g = parseInt(color.value.substring(3, 5), 16);
        let b = parseInt(color.value.substring(5, 7), 16);
        let results = generateShade(r, g, b, 10, color.label);
        for (let result of results) {
            shadesColorList.push(result);
        }
    }
    let cssContent = createCssColorVariablesContent(shadesColorList);
    cssContent = createCssColorClasses(cssContent, shadesColorList);
    createCssFile(cssContent);
    return shadesColorList;
}

const generateShade = (r: number, g: number, b: number, nbOfShade: number, colorName: String): Color[] => {
    const max = Math.max(Math.max(r, Math.max(g,b)), 1);
    const step = 255 / (max * nbOfShade);
    let shadesColorList: Color[] = [];
    let shadesColor: String;
    let shadesName: String;
    for (let i = 1; i < nbOfShade; i++) {
        shadesColor = `rgb(${(r * step * ((nbOfShade + 2 ) - i)).toFixed()}, ${(g * step * ((nbOfShade + 2 )  - i)).toFixed()}, ${(b * step * ((nbOfShade + 2 )  - i)).toFixed()})`;
        shadesName = colorName + '-' + i*100;
        shadesColorList.push(new Color(shadesName, shadesColor));
    }
    return shadesColorList;
}

const createCssColorVariablesContent = (shadesColorList: Color[]): string => {
    let colorContent = ':root {';
    for (let shadesColor of shadesColorList) {
        colorContent = colorContent + '--' + shadesColor.label + ' : ' + shadesColor.value + '; ';
    }
    colorContent = colorContent + '}';
    return colorContent;
}

const createCssColorClasses = (cssContent: string, shadesColorList: Color[]): string => {
    for (let shadesColor of shadesColorList) {
        cssContent = cssContent + '.' + shadesColor.label + ' { ' + 'background-color: ' + shadesColor.value + '; color: ' + '#ffffff; }';
    }
    return cssContent;
}

const createCssFile = (colorCssContent: string): void => {
    fs.writeFile('../front/src/lib/styles/theme.css', colorCssContent, (error) => {
        console.error(error);
    })
}