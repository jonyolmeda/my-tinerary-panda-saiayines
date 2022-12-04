import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../../redux/actions/reactionActions";

export default function Reaction(props) {
    const tokenKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODNiOTJmZjM2Yzg1OTEzNDE2NzM0OCIsIm5hbWUiOiJKb25hdGhhbiIsInBob3RvIjoiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2FyYy13b3JkcHJlc3MtY2xpZW50LXVwbG9hZHMvaW5mb2JhZS13cC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8xNTE2MDgwOC9qb3JvYmFvLmpwZyIsImxvZ2dlZCI6dHJ1ZSwiaWF0IjoxNjcwMTgwMDI0LCJleHAiOjE3MDE3MTYwMjR9.lVzJQYVmFlsYkuQgTk2rPh1yYPsjJsZaDxpZHIAJQL8'
    let { idItinerary } = props;
    let id = useSelector((state) => state.loginInReducer);

console.log(tokenKey);

    id = id.token.id
    let dispatch = useDispatch();

  const { getReactions, updateReaction } = reactionsActions;
  const [reaction, setReaction] = useState([]);
  const [reload, setReload] = useState(true);

  async function changeIcon(event) {
    let name;
    
    reaction.data.forEach((e) => {
      if (e.name === event.target.name) {
        name = e.name;
      }
    });
    try {
      let date = {
        name,
        id: idItinerary,
        tokenKey
      }
      await dispatch(updateReaction(date));
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }console.log(name);
  }



  useEffect(() => {
    reactions();
    // eslint-disable-next-line 
  }, [reload]);

  async function reactions() {
    let res = await dispatch(getReactions(idItinerary))
    setReaction(res.payload)
    console.log(res);
  }

  console.log(reaction)
  return (
    <>
      {reaction.success &&
        reaction.data.map((e) => {
          let res = e.userId.find((user)=> user._id === id)
          return (
            res ? (
            <><img
              src={e.icon}
              alt={e.name}
              name={e.name}
              className=""
              width="40px"
              height="40px"
              onClick={changeIcon}
            />
            <h4>{e.userId.length}</h4>
            </>) : (
              <>
              <img
              src={e.iconBack}
              alt={e.name}
              name={e.name}
              className=""
              width="40px"
              height="40px"
              onClick={changeIcon}
            />
            <h4>{e.userId.length}</h4>
            </>
            )
          )
        })}
    </>
  )
}