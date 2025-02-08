import { Link } from 'react-router-dom';
import { Card } from '../../components/Library/Card';
import { Button } from '../../components/Library/Button';
import { Center } from '../../components/utils/FlexBox'


const TableOfContext = ({ dataStructureType, questions, setSelectedQuestion }) => {
    const selectQuestion = (index) => {
        setSelectedQuestion(index);
    }

    return (
        <Card direction='column' width={'100%'}>
            {
                questions.map((question, index) => {
                    return (
                        <Center key={index}>
                            <Link to={`/${dataStructureType}/${index}`}>
                                <Button 
                                    key={index} 
                                    onClick={() => selectQuestion(index)}
                                    width={'500px'}
                                >
                                    {question.title}
                                </Button>
                            </Link>
                        </Center>
                    )
                })
            }
        </Card>
    );
}

export default TableOfContext;