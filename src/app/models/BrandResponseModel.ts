import { responseModel } from "./responseModel";
import { Brand } from "./Brand";
export interface BrandResponseModel extends responseModel{
    data : Brand[]
}