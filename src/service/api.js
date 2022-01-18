import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  // console.log(data);
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling AddUser api", error);
  }
};
export const getUsers = async (data) => {
  // console.log(data);
  try {
    const response = await axios.get(`${URL}/users`, data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling AddUser api", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation api", error);
  }
};
export const getConversation = async (users) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, users);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling get conversation API", error);
  }
};
export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage api", error);
  }
};
export const getMessages = async (id) => {
  try {
    return await axios.get(`${URL}/messages/get/${id}`);
  } catch (error) {
    console.log("Error while calling getMessages api", error);
  }
};
