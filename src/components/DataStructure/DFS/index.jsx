import { useState } from 'react';
import { useLocation } from "react-router-dom";
import './index.css';
import '../../utils/DarkMode/index.css';
import { Body } from '../../Library/Body';
import { Row, Column } from '../../utils/FlexBox';
import { Button } from '../../Library/Button';
import { Header } from '../../utils/Font';

import TableOfContext from '../../TableOfContext';
import Question from '../../Question';
import Answer from '../../Answer';

import { DFSQuestions } from "../../../Data/Questions/DFS";


const DFS = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const location = useLocation();

    if (selectedQuestion === null || location.pathname === "/fundamental/dfs") {
        return (
            <TableOfContext 
                dataStructureType={'dfs'}
                questions={DFSQuestions} 
                setSelectedQuestion={setSelectedQuestion} />
        )    
    } else {
        return (
            <Body>
                <Row>
                    <Column width={'30%'}>
                        <Row>
                            <Column>
                            <Header>DFS</Header>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                            <Question type={'flat'} question={DFSQuestions[selectedQuestion]}  />
                            </Column>
                        </Row>
                        <Row>
                            <Button 
                                type={'out'} 
                                onClick={() => setSelectedQuestion(null)}
                                width={'250px'}
                            >
                                Back
                            </Button>
                        </Row>
                    </Column>
                    <Column width={'70%'}>
                    <Answer type={'in'} question={DFSQuestions[selectedQuestion]} />
                    </Column>
                </Row>
            </Body>
        );
    }
};
  
export default DFS;
