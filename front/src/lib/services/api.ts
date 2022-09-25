import type { Color } from "$lib/types/interfaces";
import axios from 'axios';
import { shadesColorListFromStore } from '$lib/store/store';

export const sendColors = async (colorsList: Color[]) => {
    await axios.post('http://localhost:3000/api/v1/colors', colorsList)
        .then((result) => shadesColorListFromStore.set(result.data.shadesColorList))
        .catch((error) => console.error(error));
}