import React from 'react';
import { DashboardWrapper } from './Dashboard.styles';
import ChatPrompt from '../../../components/ChatPrompt/ChatPrompt';
import QuestionSet from '../../../components/Admin/QuestionSet/QuestionSet';

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <ChatPrompt />
            <QuestionSet />
        </DashboardWrapper>
    );
};

export default Dashboard;