import "./topDeals.scss";
import { topDealUsers } from "../../data";

const TopDeals = () => {
  return (
    <div className="topDeals">
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.slice(0, 7).map(user => (
                <div className="listItem" key={user.id}>
                    <div className="user">
                        <img src={user.img} alt="" />
                        <div className="user-info">
                            <span> {user.username} </span>
                            <span> {user.email} </span>
                        </div>
                    </div>
                        <span> ${user.amount} </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopDeals;