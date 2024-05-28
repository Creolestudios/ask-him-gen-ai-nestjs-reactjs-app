import React, { useEffect, useRef, useState } from 'react';
import { FaqWrapper } from './Faq.styles';
import { ExtraSmallTitle, SmallTitle } from '../../globalStyles';
import { Avatar, Input, Popconfirm } from 'antd';
import CustomButtom from '../CustomButtom/CustomButtom';
import { ReactComponent as MessageSvg } from '../../assets/images/message.svg';
import { ReactComponent as SendSvg } from '../../assets/images/send.svg';
import { ReactComponent as Refresh } from '../../assets/images/refresh.svg';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { base_url, faqQuestion } from '../../constant';
import jesusImg from '../../assets/images/jesus.png';
import dummyAvatar from '../../assets/images/dummy-avatar.svg';
import Loader from '../Loader/Loader';
import Icon from '@ant-design/icons';

const Faq = () => {
  const contentRef = useRef();

  const storedUserId = localStorage.getItem('userId');

  const [userId, setUserId] = useState(storedUserId || '');

  const [userData, setUserData] = useState([]);

  const [scrollArrow, setScrollArrow] = useState(false);

  const [inputData, setInputData] = useState('');

  const [windowWidth, setWindowWidth] = useState(null);

  const [loader, setLoader] = useState(false);

  const [arrPrompt, setArrPrompt] = useState('');

  const [sessionChange, setSessionChange] = useState(false);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleFaqQuestion = async (title) => {
    setInputData(title);
    setArrPrompt(title);
    if (userId) {
      if (title?.length > 0 || inputData?.length > 0) {
        setLoader(true);
        await axios.post(`${base_url}/${userId}`, {
          prompt: title,
          data: userData.dataEntries || [],
        });

        setLoader(false);

        setTimeout(async () => {
          await axios.get(`${base_url}/${userId}`).then((res) => {
            setUserData(res?.data);
            setTimeout(() => {
              contentRef.current.scrollTop = contentRef.current.scrollHeight;
            }, 100);
          });
        }, 100);
      }

      setInputData('');
      setArrPrompt('');
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loader) {
      handleclickAsk();
    }
  };

  const getUserChat = async () => {
    if (userId) {
      await axios
        .get(`${base_url}/${userId}`)
        .then((res) => setUserData(res?.data));
    }
  };

  useEffect(() => {
    getUserChat();
  }, []);

  const handleclickAsk = async () => {
    setArrPrompt(inputData);
    if (userId) {
      if (inputData?.length > 0) {
        setLoader(true);

        await axios.post(`${base_url}/${userId}`, {
          prompt: inputData,
          data: userData?.dataEntries || [],
        });

        setLoader(false);

        setTimeout(async () => {
          await axios.get(`${base_url}/${userId}`).then((res) => {
            setUserData(res?.data);
            setTimeout(() => {
              contentRef.current.scrollTop = contentRef.current.scrollHeight;
            }, 100);
          });
        }, 100);
      }

      setInputData('');
      setArrPrompt('');
    }
  };

  const handleReset = () => {
    localStorage.removeItem('userId');
    setUserData([]);
    setSessionChange(!sessionChange);
    setUserId('');
  };

  useEffect(() => {
    contentRef.current.scrollTop = contentRef.current.scrollHeight;
  }, [arrPrompt]);

  useEffect(() => {
    console.log('session');
    if (!userId) {
      // Generate a new UUID and store it in localStorage
      const newUserId = uuidv4();
      localStorage.setItem('userId', newUserId);
      setUserId(newUserId);
    }
  }, [userId, sessionChange]);

  const scrollBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

  const scrollMessageContainer = () => {
    if (
      contentRef?.current?.scrollTop + contentRef?.current?.clientHeight >
        contentRef?.current?.clientHeight &&
      contentRef?.current?.scrollTop + contentRef?.current?.clientHeight !==
        contentRef?.current?.scrollHeight
    ) {
      setScrollArrow(true);
    } else if (
      contentRef?.current?.scrollTop + contentRef?.current?.clientHeight ===
      contentRef?.current?.scrollHeight
    ) {
      setScrollArrow(false);
    } else {
      setScrollArrow(false);
    }
  };

  useEffect(() => {
    contentRef?.current.addEventListener('scroll', scrollMessageContainer);
  }, [contentRef?.current?.scrollTop]);

  const window_width = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', window_width);
    return () => {
      document.removeEventListener('resize', window_width);
    };
  }, [windowWidth]);

  console.log('userdata', userData, arrPrompt);

  return (
    <FaqWrapper>
      <div className='chat-wrapper-content' ref={contentRef}>
        {scrollArrow && <div onClick={scrollBottom} className='scroll'></div>}
        <SmallTitle className='title'>Frequently Asked Questions </SmallTitle>
        <div className='faq-wrapper'>
          {faqQuestion.map((e) => (
            <div className='faq-item'>
              <div className='content'>
                <ExtraSmallTitle className='sub-title'>
                  {e?.title}
                </ExtraSmallTitle>
                <button
                  className={loader ? 'disabled' : ''}
                  onClick={() => handleFaqQuestion(e?.title)}
                >
                  ask
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='message-wrapper'>
          {userData?.dataEntries?.map((e) => {
            let userTimeZone = e?.prompt_time;
            let responseTimeZone = e?.response_time;

            const userDate = new Date(userTimeZone);
            const responseDate = new Date(responseTimeZone);

            // Specify the target time zone as 'Asia/Kolkata' for India Standard Time (IST)
            const targetTimeZone = 'Asia/Kolkata';

            // Convert the date to the target time zone
            const options = { timeZone: targetTimeZone, hour12: true };

            const userFormattedDate = userDate.toLocaleString('en-IN', options);
            const responseFormattedDate = responseDate.toLocaleString(
              'en-IN',
              options
            );

            // const newUserDate = userFormattedDate.split(",").at(0);
            const newUserTime = userFormattedDate
              .split(',')
              .at(1)
              .split(' ')
              .at(1)
              .split(':')
              .slice(0, -1)
              .join(':');

            // const newResponseDate = responseFormattedDate.split(",").at(0);
            const newResponseTime = responseFormattedDate
              .split(',')
              .at(1)
              .split(' ')
              .at(1)
              .split(':')
              .slice(0, -1)
              .join(':');

            return (
              <>
                <div key={e?.id}>
                  <div className='message'>
                    <Avatar size={34}>
                      <img src={dummyAvatar} alt='user' />
                    </Avatar>
                    <div className='msg-content'>
                      <div className='user-name'>You</div>
                      <div className='message-text'>
                        {/* {arrPrompt?.map(el => 
                          <pre>{el}</pre>
                          )} */}
                        <pre>{e?.prompt}</pre>
                        <div className='time'>
                          {newUserTime}{' '}
                          {userFormattedDate
                            .split(',')
                            .at(-1)
                            .split(' ')
                            .at(-1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='message response'>
                    <Avatar size={34}>
                      <img src={jesusImg} alt='user' />
                    </Avatar>
                    <div className='msg-content'>
                      <div className='user-name'>Jesus</div>
                      <div className='message-text'>
                        <pre>{e?.response}</pre>
                        <div className='time'>
                          {newResponseTime}{' '}
                          {responseFormattedDate
                            .split(',')
                            .at(-1)
                            .split(' ')
                            .at(-1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {arrPrompt?.length > 0 && (
            <div className='message'>
              <Avatar size={34}>
                <img src={dummyAvatar} alt='user' />
              </Avatar>
              <div className='msg-content'>
                <div className='user-name'>You</div>
                <div className='message-text'>
                  <pre>{arrPrompt}</pre>
                </div>
              </div>
              {/* <div className="time">
              {newUserTime}{" "}
              {userFormattedDate.split(",").at(-1).split(" ").at(-1)}
            </div> */}
            </div>
          )}
          {loader && (
            <div className='message response'>
              <Avatar size={34}>
                <img src={jesusImg} alt='user' />
              </Avatar>
              <div className='msg-content'>
                <div className='user-name'>Jesus</div>
                <div className='loader'>
                  <Loader />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='footer'>
        <Input
          placeholder='I am here, ask me'
          onChange={handleChange}
          value={inputData}
          onKeyDown={handleKeyPress}
          disabled={loader ? true : false}
        />
        {!loader ? (
          <>
            <div
              className={`${loader ? 'disabled' : ''}`}
              onClick={handleclickAsk}
            >
              <CustomButtom
                className='secondary-btn small'
                text='Ask Now'
                height={'55px'}
                background={'#496186'}
                color={'#fff'}
                icon={windowWidth < 768 ? SendSvg : MessageSvg}
                textVisiableMb={false}
              />
            </div>
            <div className='reset'>
              <Popconfirm
                title={'Delete the Chat'}
                description='Are you sure to Delete this Chat?'
                okText='Yes'
                cancelText='No'
                onConfirm={handleReset}
              >
                <Icon component={Refresh} />
              </Popconfirm>
            </div>
          </>
        ) : (
          <div className='loader-wrapper'>
            <Loader />
          </div>
        )}
      </div>
    </FaqWrapper>
  );
};

export default Faq;
