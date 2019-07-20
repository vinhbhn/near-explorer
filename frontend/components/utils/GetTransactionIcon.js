import AddKey from "../../static/images/icon-t-key-new.svg";
import Call from "../../static/images/icon-t-call.svg";
import Sent from "../../static/images/icon-t-transfer.svg";
import Staked from "../../static/images/icon-t-stake.svg";
import DeployContract from "../../static/images/icon-t-contract.svg";

const GetTransactionIcon = {
  Call: <Call />,
  Sent: <Sent />,
  Staked: <Staked />,
  DeployContract: <DeployContract />,
  AddKey: <AddKey />
};

export default GetTransactionIcon;
