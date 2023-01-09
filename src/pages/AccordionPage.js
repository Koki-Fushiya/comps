import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: 'okoko',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'okoko2',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'okoko3',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        }
    ]

    return <Accordion items={items} />;
};


export default AccordionPage;