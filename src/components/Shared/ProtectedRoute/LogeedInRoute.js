import React from "react"
import {Route, Redirect} from "react-router-dom";
import authService from "../../AuthService/authService";

export function LogeedInRoute(props) {
           
        const{ component: Component, ...rest } = props

        return(
            <Route {...rest}render={(props) => authService.isAuthenticated()
                                                    ? <Redirect to={{pathname:"/cidade"}}/>
                                                    : <Component{...props} {...rest}/>}>
            </Route>                                                
        )
    }


