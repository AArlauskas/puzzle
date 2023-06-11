import { Panel } from "rsuite";
import "rsuite/styles/index.less";

interface CardProps {
  children: any;
}
const Card = ({ children }: CardProps) => {
  return (
    <Panel style={{ textAlign: "center" }} bordered>
      {children}
    </Panel>
  );
};

export default Card;
