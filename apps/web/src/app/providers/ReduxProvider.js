'use client';

import { Provider } from "react-redux";
import store from "@/app/redux/store";
export const ReduxProvider = ({children}) => {
    return(
        <Provider>
            {children}
        </Provider>
    )
}