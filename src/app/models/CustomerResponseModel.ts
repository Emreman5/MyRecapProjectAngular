import { Customer } from "./Customer";
import { responseModel } from "./responseModel";

export interface CustomerResponseModel extends responseModel {
    data : Customer[];
}