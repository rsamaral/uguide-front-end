import React from "react";
import { useHistory } from "react-router-dom";
import TourList from "../../components/tour-list";

export const List = () => {
  const history = useHistory()

  const onClickAdd = () => {
    history.push("/add");
  }

  return (
    <div className="list">
    <TourList />
    <button
      className="badge badge-danger mr-2"
      onClick={onClickAdd}
          >
            Adicionar novo Pacote!
    </button>
    </div>
  )
}

export default List