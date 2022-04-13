import React from "react";
import cl from "./Loader.module.scss"


const Loader = () => {
    return (
        <div className={cl.loader}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Loader;