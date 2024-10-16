import { writable } from "svelte/store";

export interface InfoBarStore {
    reasonToShowIndex: number;
    visible: boolean;
}

const infoBarStore = writable<InfoBarStore>({ reasonToShowIndex: 0, visible: false });

export default infoBarStore;
