import axios from 'axios';
import './NewComment.css'
import { React } from 'react';
import { URL } from '../../api/url';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import commentsAction from '../../redux/actions/commentsAction';
import './NewComment.css'
import { useSelector } from 'react-redux';

export default function NewComments(prop) {
    let token = useSelector((store) => store.loginInReducer.token)
    const { id } = prop
    const commentRef = useRef()
    const formRef = useRef()
    let dispatch = useDispatch();
    let { getCommentss } = commentsAction;
    
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
                photoUser: token.photo,
                nameUser: token.name,
                roleUser: token.role,
                showId: id,
                date: new Date(),
                comment: commentRef.current.value,  
            }
            
            try{
                let res = await axios.post(`${URL}/comments/`, dataComment, {headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })  
                if(res.data.success){
                    formRef.current.reset()
                    dispatch(getCommentss(id));

                return( 
                    Swal.fire('Comment published!', '', 'success')
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
                {
                token.logged  ? (
                <form ref={formRef}  onSubmit={submit}>
                    <h2 className='text-center'>Add a new comment</h2>
                    <textarea className='textarea' cols="30" rows="10" placeholder='Write a review...' ref={commentRef}></textarea>
                    <div className='btns-textarea'>
                    <button className='btn-newCom-delete' type="reset">DELETE </button>
                    <button className='btn-newCom-add'> ADD </button>
                    </div>
                </form> 
                    ):null
                }
            </div>       
            
    ) 
    }