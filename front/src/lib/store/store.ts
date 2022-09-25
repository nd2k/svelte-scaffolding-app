import type { Color } from '$lib/types/interfaces';
import { writable } from 'svelte/store';

export let shadesColorListFromStore = writable(new Array<Color>);