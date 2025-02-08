import { Row } from '../utils/FlexBox';
import { Subheader, Paragraph, Example } from '../utils/Font';


const Question = ({ type, question }) => {
    return (
        <Row type={type} direction={'column'}>
            <Subheader>{ question.title }</Subheader>
            <Paragraph>
                {question.question}
            </Paragraph>
            {
                question.examples.map((example, index) => {
                    return (
                        <div key={index}>
                            <Example>Input: {example.input}</Example>
                            <Example>Output: {example.output}</Example>
                        </div>
                    )
                })
            }
        </Row>
    );
};

export default Question;