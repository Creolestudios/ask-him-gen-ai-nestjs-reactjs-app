import React, { useEffect, useState } from 'react';
import { ChatPromptWrapper } from './ChatPrompt.styles';
import { SmallTitle } from '../../globalStyles';
import { Input } from 'antd';
import CustomButtom from '../CustomButtom/CustomButtom';
import { ReactComponent as PencilSvg }  from '../../assets/images/pencil.svg';
import { color } from '../../assets/css/variable';
import axios from 'axios';
import { base_url } from '../../constant';

const {TextArea} = Input;

const ChatPrompt = () => {

    const [disableInput, setDisableInput] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleEdit = async() => {

        await axios.patch(`${base_url}/admin/editchatprompt`,{prompt: inputValue});

        setDisableInput(!disableInput);
    };

    const chatPromptGetApi = async() => {
        await axios.get(`${base_url}/admin/chatprompt`).then(res => setInputValue(res?.data.map(e => e?.prompt)));
    }

    useEffect(() => {
        chatPromptGetApi();
    },[])

    console.log("inputValue", inputValue);

    return (
        <ChatPromptWrapper>
            <div className='promt-input'>
                <SmallTitle className='title'>Chat Prompt</SmallTitle>
                <TextArea row={4} defaultValue={inputValue} value={inputValue} disabled={disableInput} placeholder='I am here, ask me...' onChange={handleChange} />
            </div>
            <div onClick={handleEdit}>
                <CustomButtom className="btn" text={!disableInput ? 'Save Prompt' : 'Edit Prompt'} icon={!disableInput ? '' : PencilSvg} height={'48px'} background={`${color.secondaryColor}`} color={`${color.greyColor1}`} />
            </div>
        </ChatPromptWrapper>
    );
};

export default ChatPrompt;