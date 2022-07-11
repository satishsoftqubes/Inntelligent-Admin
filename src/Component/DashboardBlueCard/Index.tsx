import { Card } from "react-bootstrap";

function DashboardBlueCard(props: any) {
  return (
    <Card className="dashboard-blue-card">
      <Card.Body>
        <div className="upper-section d-flex justify-content-between align-items-end mb-4">
          <div className="numbers">
            <span>{props.numberData}</span>
          </div>
          <div className="dashboard-blue-img">
            <img
              src={require("../../assets/Images/Icons/cardIcons/" + props.imgData)}
              alt="newAccounts"
            />
          </div>
        </div>
        <div className="lower-section">
          <p>{props.cardHeader}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DashboardBlueCard;
