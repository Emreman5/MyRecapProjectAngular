import { Color } from "./Color";
import { responseModel } from "./responseModel";

export interface ColorResponseModel extends responseModel{
    data : Color[];
}