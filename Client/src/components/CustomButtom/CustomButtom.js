import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import { CustomButtonWrapper } from './CustomButtom.styles';

const CustomButtom = ({text,className, icon, height, background, color, textVisiableMb}) => {

    const [windowWidth, setWindowWidth] = useState(null);

    const window_width = () => {
        setWindowWidth(window.innerWidth);   
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', window_width);
        return () => {
            document.removeEventListener('resize', window_width);
        }
    },[windowWidth])

    return (
        <CustomButtonWrapper className={`${className} ${!textVisiableMb && windowWidth < 768 && 'no-text'}`} height={height} background={background} color={color}>
            <Button>
               {icon && <Icon component={icon} />}
                {!textVisiableMb && windowWidth < 768 ? '' : text}
            </Button>
        </CustomButtonWrapper>
    );
};

export default CustomButtom;