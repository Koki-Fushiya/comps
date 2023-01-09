import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {
    const handleClick = () => {
        console.log('Click!!')
    }

    return ( 
        <div>
            <div>
                <Button success rounded outline onClick={handleClick}>
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Buy now
                </Button>
            </div>
            <div>
                <Button warning>
                 <GoDatabase />
                    See deal
                </Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded>Something!</Button>
            </div>    
        </div>
    )
};


export default ButtonPage;