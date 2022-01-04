import { Car } from "./Car";
import { responseModel } from "./responseModel";

export interface CarResponseModel extends responseModel {
    data : Car[]
}