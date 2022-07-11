import { FC } from "react";
import { Accordion } from "react-bootstrap";

type AccordianProps = {
  accordianPaneList: {
    key: string;
    accordianTitle: any;
    accordianContent: any;
  }[];
};

const AccordianView: FC<AccordianProps> = (props) => {
  const { accordianPaneList } = props;
  return (
    <Accordion>
      {accordianPaneList?.map(({ key, accordianTitle, accordianContent }) => (
        <Accordion.Item eventKey={key} key={key}>
          <Accordion.Header>{accordianTitle}</Accordion.Header>
          <Accordion.Body>{accordianContent}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordianView;
