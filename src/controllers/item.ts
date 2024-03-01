import { Request, Response } from "express"
import dbConnect from "../config/mongo";
import { HandleHttp } from "../utils/error.handle";
import { interCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

const getItem = async ({params}: Request, res:Response) => {
    try {
        const {id}= params;
        const response = await getCar(id); 
        const data =  response ? response : 'NOT_FOUND';
        res.send(data);
    } catch (e) {
        HandleHttp(res, 'ERROR')
    }
};

const getItems = async (req:Request, res:Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        HandleHttp(res, 'ERROR_ITEMS')
    }
};

const updateItem= async  ({params, body}:Request, res:Response) => {
    try {
        const {id} = params;
        const response = await  updateCar(id, body);
        res.send(response);
    } catch (e) {
        HandleHttp(res, 'ERROR_UPDATE')
    }
};

const postItem = ({body}:Request, res:Response) => {
    try {
        const responseItem = interCar(body)
        res.send(responseItem);
    } catch (e) {
        HandleHttp(res, 'ERROR_POST', e)
    }
};

const deleteItem = async ({params}:Request, res:Response) => {
    try {
        const {id}= params;
        const response = await deleteCar(id);
        res.send(response);
    } catch (e) {
        HandleHttp(res, 'ERROR_DELETE')
    }
};

export {getItem, getItems, postItem, updateItem, deleteItem};
