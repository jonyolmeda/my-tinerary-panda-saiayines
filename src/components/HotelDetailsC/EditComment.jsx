import React, {  useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './Comment.css'
import './NewComment.css'
import axios from "axios";
import { URL } from '../../api/url';
import Swal from 'sweetalert2'
import commentsAction from '../../redux/actions/commentsAction';

export default function EditComment(prop) {
    const { id, idShow } = prop
    const commentRef = useRef()
    const dateRef = useRef(new Date())
    const showIdRef = useRef(id)
    const formRef = useRef()
    let dispatch = useDispatch()
    let { getCommentss } = commentsAction;

    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {setMostrarOcultar(!mostrarOcultar);};

    async function submit(e) {
        e.preventDefault();
            Swal.fire({
                title: '¿Publish comment?',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Yes, publish it.',
                denyButtonText: `No, i miss something...`,
            }).then((result) => {
                if (result.isConfirmed) {
                    publishComment()
                }
            })
        }
        async function publishComment(){
            const dataComment = {
                showId: idShow,
                comment: commentRef.current.value,  
                date: new Date(),
            }
            try{
                let res = await axios.put(`${URL}/comments/${id}`, dataComment, {headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })  
                if(res.data.success){
                    formRef.current.reset()
                    dispatch(getCommentss(idShow))
                return( 
                    Swal.fire('Comment modified!', 'success')
                    )
                }
                else{
                    Swal.fire(`Errors: ${res.data.message.join(", ")}`)
                }
            }catch(err){
                Swal.fire(`Error. You must be logged in.`)
            }
        }

    return (
        
        <div className='text-center'>
            <form className="form-new-comment" ref={formRef}  onSubmit={submit}>
                <h2 className='text-center-newcomment'>Modify comment</h2>
                <textarea className='textarea' cols="30" rows="10" placeholder='Write a review...' ref={commentRef}></textarea>
                <div className='btns-textareaTwo'>
                <button className='btn-newCom-delete-edit' type="reset">DELETE</button>
                <button className='btn-newCom-edit'>EDIT</button>
                </div>
            </form>
        </div>
    ) 
}
