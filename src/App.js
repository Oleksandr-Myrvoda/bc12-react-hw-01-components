import "./App.css";

import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import TransactionHistory from "./components/TratsactionHistory";

import friends from "./dataBase/friends.json";
import user from "./dataBase/user.json";
import data from "./dataBase/data.json";
import transactions from "./dataBase/transactions.json";

const App = () => {
  return (
    <>
      <FriendList friends={friends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
