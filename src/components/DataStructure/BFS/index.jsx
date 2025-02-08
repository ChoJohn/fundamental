import { useState } from 'react';
import { useLocation } from "react-router-dom";
import './index.css';
import '../../utils/DarkMode/index.css';
import { Row, Column } from '../../utils/FlexBox';
import { Body } from '../../Library/Body';
import { Button } from '../../Library/Button';
import { Header } from '../../utils/Font';

import TableOfContext from '../../TableOfContext';
import Question from '../../Question';
import Answer from '../../Answer/index';

import { BFSQuestions } from "../../../Data/Questions/BFS";
// import { intQuestion } from "../../../Data/Questions/Test/test.js";
// import { floatQuestion } from "../../../Data/Questions/Test/test.js";
// import { stringQuestion } from "../../../Data/Questions/Test/test.js";
// import { arrayQuestion } from "../../../Data/Questions/Test/test.js";
// import { objectQuestion } from "../../../Data/Questions/Test/test.js";

const BFS = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const location = useLocation();

    if (selectedQuestion === null || location.pathname === "/bfs") {
        return (
            <TableOfContext 
                dataStructureType={'bfs'}
                questions={BFSQuestions} 
                setSelectedQuestion={setSelectedQuestion} 
            />
        )    
    } else {
        return (
            <Body>
                <Row>
                    <Column width={'30%'}>
                        <Row>
                            <Column>
                                <Header>BFS</Header>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Question type={'flat'} question={BFSQuestions[selectedQuestion]}  />
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
                        <Answer type={'in'} question={BFSQuestions[selectedQuestion]} />
                    </Column>
                </Row>
            </Body>
        );
    }
};
  
export default BFS;


