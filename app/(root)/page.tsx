import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Qusay",
    lastName: "Alkaleh",
    email: "qusay.alkalih@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>
        TOTAL TRANSACTION
      </div>
      <RightSideBar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 125.65 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;
