import React, { FC, useEffect } from "react";
import './GreedySnake.scss';

import GameControl from "../modules/gameControl";

const GreedySnake: FC = (props) => {
   
    useEffect(() => {
        console.log('1')
        const game = new GameControl();
    }, [])


    return <div className='wraper'>
        <div className='stage'>
            <div id="snake">
                <div></div>
            </div>
            <div id="food">
                <div/><div/><div/><div/>
            </div>
        </div>

        <div className='score-panel'>
            <div>
                SOCRE:<span id='score'>0</span>
            </div>
            <div>
                level:<span id='level'>1</span>
            </div>
        </div>
    </div>
}

export default React.memo(GreedySnake);