import { Request, Response } from "express"
import dbConnect from "../config/mongo";
import { HandleHttp } from "../utils/error.handle";

const getItem = (req:Request, res:Response) => {
    try {

    } catch (e) {
        HandleHttp(res, 'ERROR_B')
    }
};

const getItems = (req:Request, res:Response) => {
    try {

    } catch (e) {
        HandleHttp(res, 'ERROR_BLOGS_')
    }
}

const updateItem= (req:Request, res:Response) => {
    try {

    } catch (e) {
        HandleHttp(res, 'ERROR_UPDATE_B')
    }
};

const postItem = ({body}:Request, res:Response) => {
    try {
        res.send(body);
    } catch (e) {
        HandleHttp(res, 'ERROR_POST_B')
    }
};

const deleteItem = (req:Request, res:Response) => {
    try {

    } catch (e) {
        HandleHttp(res, 'ERROR_DELETE_B')
    }
}

export {getItem, getItems, postItem, updateItem, deleteItem};
