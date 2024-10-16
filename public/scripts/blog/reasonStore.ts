import { writable } from "svelte/store";

export interface ReasonStore {
    currentReasonIndex: number;
}

const reasonStore = writable<ReasonStore>({ currentReasonIndex: 0 });

export default reasonStore;
