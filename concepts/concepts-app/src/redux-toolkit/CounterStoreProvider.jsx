import {Provider} from "react-redux"
import CounterStore from "./CounterStore"
import CounterApp from "./CounterApp"

export default function CounterStoreProvider(){
    return <>
        <Provider store={CounterStore}>
            <CounterApp/>{/* This can access and modify the store states */}
        </Provider>
    </>
}