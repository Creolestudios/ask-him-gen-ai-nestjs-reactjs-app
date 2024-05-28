import React, { useEffect, useState } from "react";
import { QuestionSetWrapper } from "./QuestionSet.styles";
import { Input } from "antd";
import axios from "axios";
import { base_url } from "../../../constant";

const { TextArea } = Input;

const QuestionSet = () => {
  const [disabled, setDisabled] = useState(true);

  const [questionSet, setQuestionSet] = useState([]);

  const [textareaValue, setTextareaValue] = useState('');

  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const handleSave = async() => {
    setDisabled(!disabled);
    await axios.patch(`${base_url}/admin/prompt`, {'question': textareaValue});
  };

  const handleCancel = () => {
    setDisabled(true);
  };

  const handleChange = (e) => {
    setTextareaValue(e.target.value);
  }

  const datagetfun = async() => {
    setLoader(true);
    await axios.get(`${base_url}/admin/all`).then(res => setQuestionSet(res.data));
    setLoader(false);
  }

  useEffect(() => {
    datagetfun();
  },[]);

  useEffect(()=> {
    setTextareaValue(questionSet[0]?.prompt);
  },[loader]);


  return (
    <QuestionSetWrapper>
      <div className="header">
        <div className="title">Question Sets</div>
        <div className="btn-wrapper">
          {disabled ? (
            <button onClick={handleClick}>Add Question Set</button>
          ) : (
            <>
              <button onClick={handleCancel} className="btn cancel">
                Cancel
              </button>
              <button onClick={handleSave} className="btn save">
                Save
              </button>
            </>
          )}
        </div>
      </div>
      <div className="content">
        <TextArea
          disabled={disabled}
          rows={18}
          placeholder="Please Add Question Set"
          // value={questionSet.map(e => e.prompt)}
          value={textareaValue}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {/* <div className="content">
        <div className="question-wrap">
           
               <div className="input-field">
                <div  className={`question ${!disabled && 'editable'}`} id="editor" contentEditable={!disabled} onKeyDown={handleChange}><span>1</span> What is the essence of your teachings?</div>
                <div  className={`answer ${!disabled && 'editable'}`} id="editor" contentEditable={!disabled} onKeyDown={handleChange}> Answer: My teachings revolve around love, compassion, forgiveness, and the importance of serving others. I encourage people to treat others as they would like to be treated and to seek a personal relationship with God. Answer: My teachings revolve around love, compassion, forgiveness, and the importance of serving others. I encourage people to treat others as they would like to be treated and to seek a personal relationship with God. Answer: My teachings revolve around love, compassion, forgiveness, and the importance of serving others. I encourage people to treat others as they would like to be treated and to seek a personal relationship with God. Answer: My teachings revolve around love, compassion, forgiveness, and the importance of serving others. I encourage people to treat others as they would like to be treated and to seek a personal relationship with God. Answer: My teachings revolve around love, compassion, forgiveness, and the importance of serving others. I encourage people to treat others as they would like to be treated and to seek a personal relationship with God. </div>
              </div>
        </div>
      </div> */}
    </QuestionSetWrapper>
  );
};

export default QuestionSet;
