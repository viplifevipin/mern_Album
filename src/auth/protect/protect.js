import React from 'react'
import {  Route ,Redirect} from "react-router-dom";

const ProtectedRouter=({component,...rest}) =>{
        let RenderComponent=component;
        let hasToken=JSON.parse(localStorage.getItem('auth'))
        return (
            <div>
                <Route
                {...rest}
                render ={
                    props=>{
                     return hasToken !==null ?(
                            <RenderComponent {...props} />
                        ) :(
                            <Redirect
                            to={{
                                pathname:'/login'
                            }}
                            />
                        )
                        
                    }
                }
                />
            </div>
        )
    }

export default  ProtectedRouter ;

