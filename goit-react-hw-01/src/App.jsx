import "./App.css";
import user from "./data/user.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
    <Profile {...user} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
    </>
  );
}
