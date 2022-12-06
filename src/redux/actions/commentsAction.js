import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCommentss = createAsyncThunk("getCommentss", async (idShow) => {
try {
    const respComments = await axios
    .get(`http://localhost:4000/api/comments?showId=${idShow}`)
    .catch((error) => console.log(error));
    return { [idShow]: respComments.data.response };
    } catch (error) {
    console.log(error);
    return {
        payload: "Error",
    };
}
});

const commentsAction = {
    getCommentss,
};

export default commentsAction;