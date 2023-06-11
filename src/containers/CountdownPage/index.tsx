import Countdown from "react-countdown";
import "./styles.css"

interface IProps {
    date: Date;
    onComplete: () => void;
}

const CountdownPage = ({date, onComplete}: IProps) => {
    return <div className="countdown-page">
        <Countdown className="countdown" autoStart date={date} onComplete={onComplete}/>
    </div>
}

export default CountdownPage;