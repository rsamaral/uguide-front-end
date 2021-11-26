import React from "react";
import { useHistory } from "react-router-dom";
import TourList from "../../components/SearchAndList/tour-list";

export const List = () => {
  const history = useHistory()

  const onClickAdd = () => {
    history.push("/add");
  }

  return (
    <div className="list">
    <TourList />
    </div>
  )
}

export default List