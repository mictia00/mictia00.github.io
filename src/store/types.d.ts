export interface GlobalStore {

}

export interface GlobalActions {

}

export interface GlobalState {
    store: GlobalStore;
    actions: GlobalActions;
}

export interface GlobalStateParams {
    getStore: () => GlobalStore;
    getActions: () => GlobalActions;
    setStore: (updatedStore: Partial<GlobalStore>) => void; 
}