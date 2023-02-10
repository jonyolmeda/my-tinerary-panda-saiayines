import React, { useState } from "react";
import "../MyReactionC/myreactions.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import reductionAction from "../../redux/actions/reactionActions";
import { useEffect } from "react";
import MyReactionCard from "./MyReactionCard";

export default function MyReactionC(props) {
  let { id } = props;
  const { getMyReactions, deleteMyReactions } = reductionAction;
  const [tokenKey, setTokenKey] = useState();
  const dispatch = useDispatch();
  const myreactions = useSelector((state) => state.reactionReducer).myreactions;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      setTokenKey(token);
    }
  }, []);
  console.log(id);
  useEffect(() => {
    dispatch(getMyReactions(id));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-page-reactions">
      <div className="container-title-page-reactions">
        <h1 className="title-page-reactions">My Reactions</h1>
      </div>

      <div className="cards-page-reactions">
        {myreactions?.map((item) => {
          function deleteFunc() {
            Swal.fire({
              icon: "question",
              title: " Do you want to delete the reaction?",
              showConfirmButton: true,
              iconColor: "#01344f",
              confirmButtonColor: "#01344f",
              confirmButtonText: "Sure",
              showCancelButton: true,
            }).then(async (result) => {
              if (result.isConfirmed) {
                try {
                  dispatch(
                    deleteMyReactions({ idReaction: item._id, tokenKey })
                  );
                } catch (error) {
                  console.log(error);
                }
              }
            });
          }
          return (
            <MyReactionCard
              event={item.itineraryId}
              nameReaction={item.name}
              reaction={item.icon}
              photo={item.itineraryId?.photo[0]}
              name={item.itineraryId?.name}
              onClick={deleteFunc}
            />
          );
        })}
      </div>
    </div>
  );
}
