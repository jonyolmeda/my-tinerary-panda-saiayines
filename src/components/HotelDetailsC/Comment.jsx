import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import './Comment.css'
import './NewComment.css'
import axios from "axios";
import { URL } from '../../api/url';
import Swal from 'sweetalert2'
import commentsAction from '../../redux/actions/commentsAction';
import EditComment from './EditComment'


export default function Comments({idShow}) {
    let token = useSelector((store) => store.loginInReducer.token)
    let dispatch = useDispatch()
    let { getCommentss } = commentsAction;
    
    const deleteComments = async (id) =>{            try{
    let res = await axios.delete(`${URL}/comments/${id}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })  
    if(res.data.success){
       
        dispatch(getCommentss(idShow))
    return( 
        Swal.fire('Comment deleted!', '', 'success')
        )
    }
    else{
        Swal.fire(`Errors: ${res.data.message.join(", ")}`)
    }
}catch(err){
    Swal.fire(`Error. You must be logged in.`)
}}
let userData = useSelector((state) => state.loginInReducer);
let commentsData = useSelector((state) => state.commentReducer);
let [mostrarOcultar, setMostrarOcultar] = useState(false);
let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
};

let [getComments, setGetComments] = useState([])
useEffect(() => {
    dispatch(getCommentss(idShow));
}, [getCommentss, idShow]);

return (
    <div className="cont-main-comments ">
        {mostrarOcultar ? (
            <>
        {commentsData[idShow].map((e) => {
            const isMyUser = e.userId === userData.token.id
            const user = e.roleUser === 'user'
            console.log(user)
        
            console.log(e, '<==')
            return (
            <div className={ isMyUser ? 'cont-coment-1 myuser-comment' : 'cont-coment-1'}>
                <div className="buttom-see">
                    <h3 onClick={hide}>See less comments</h3>
                </div>
                <div className="cont-coment-2">
                    <div className="coment-img">
                        <img className="photo-comment"src={e.photoUser} alt={e.nameUser}/>
                    </div>

            
                        <div className ={user ? "cont-info-comment-user" : "cont-info-comment"}>
                            <h4 className="comment-title">{e.nameUser}</h4>
                            <p className="comment">{e.comment}</p>
                        </div>
                  

                    <div className="cont-date-comment">
                        <p>{e.date}</p>
                    </div>
                </div>
                {isMyUser &&  <EditComment id={e._id} idShow={idShow}/>}      
                { isMyUser && <button className="btn-comment-delete" onClick={() => deleteComments(e._id)}>Delete Comment</button> }
            </div>
            )
        })
        }
            </>
        ) : (
            <div className="buttom-see">
                <h3 onClick={hide}>See More Comments</h3>
            </div>
        )}
    </div>
    );
        }