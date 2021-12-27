import  userImg  from "../../assets/user.svg";
import { Background } from "../ScoreTable/styles";

export function User() {
    return (
        <Background>
            <img className="user-icon" src={userImg} alt="background-icon" />
        </Background>
    )
    
}