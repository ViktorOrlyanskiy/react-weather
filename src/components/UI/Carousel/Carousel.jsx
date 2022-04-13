import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import cl from "./Carousel.module.scss"


const Carousel = ({ children, ...arg }) => {

    const ITEM_WIDTH = arg.itemWidth;
    const maxOffset = -(children.length - 1) * ITEM_WIDTH;
    const lastLeftPos = -ITEM_WIDTH;
    const lastRightPos = -((children.length - 2) - arg.numberVisibleElements) * ITEM_WIDTH;


    const [offset, setOffset] = useState(0);
    const [styleLeftArrow, setStyleLeftArrow] = useState(`${cl.arrow} ${cl.arrowLeft} ${cl.hidden}`);
    const [styleRightArrow, setStyleRightArrow] = useState(`${cl.arrow} ${cl.arrowRight}`);


    const handleLeftArrowClick = () => {
        //    скрывает и показывает стрелку
        if (offset === lastLeftPos) {
            setStyleLeftArrow(`${cl.arrow} ${cl.arrowLeft} ${cl.hidden}`)
        }
        setStyleRightArrow(`${cl.arrow} ${cl.arrowRight}`)


        setOffset((currentOffset) => {
            const newOffset = currentOffset + ITEM_WIDTH;
            return Math.min(newOffset, 0);
        })
    }


    const handleRightArrowClick = () => {
        //    скрывает и показывает стрелку
        if (offset === lastRightPos) {
            setStyleRightArrow(`${cl.arrow} ${cl.arrowRight} ${cl.hidden}`)
        }
        setStyleLeftArrow(`${cl.arrow} ${cl.arrowLeft}`)

        setOffset((currentOffset) => {
            const newOffset = currentOffset - ITEM_WIDTH;
            return Math.max(newOffset, maxOffset);
        })
    }


    return (
        <div className={cl.mainContainer}>
            <FaChevronLeft className={styleLeftArrow} onClick={handleLeftArrowClick} />
            <div className={cl.window}>
                <div className={cl.itemsContainer}
                    style={{ transform: `translateX(${offset}px)` }}>
                    {children}
                </div>
            </div>
            <FaChevronRight className={styleRightArrow} onClick={handleRightArrowClick} />
        </div >
    )
}
export default Carousel;