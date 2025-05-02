import { createContext, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { GlobalActions, GlobalState, GlobalStore } from "./types";
import { getState } from "./appStore";


export const GlobalContext = createContext<GlobalState | null>(null);

function injectContext(PassedComponent: FunctionalComponent): FunctionalComponent {
    const AppProvider: FunctionalComponent = (props: {}) => {

        // Estado global sencillo
        const [state, setState] = useState(getState({
            getStore: (): GlobalStore => state.store,
            getActions: (): GlobalActions => state.actions,
            setStore(updatedStore) {
                setState({...state, store: Object.assign(state.store, {...state.store, ...updatedStore})});
            },
        }));

        // Actiones iniciales (al iniciar la pagina)
        useEffect(() => {

        }, []);

        return (
            <GlobalContext.Provider value={state}>
                <PassedComponent {...props} />
            </GlobalContext.Provider>
        );
    };

    return AppProvider;
}

export default injectContext;