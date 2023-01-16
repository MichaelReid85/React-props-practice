import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/26196233_10155186628007653_1872520304715938667_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=OmoGTA6cbfMAX_x_BGC&_nc_ht=scontent-sea1-1.xx&oh=00_AfBvhEHye_jlCc_WiH2cWbVzifl8nY_VfegJ5ZBnmi1kTg&oe=63ED4C55" />
      <Card
        className={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        className={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        className={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
