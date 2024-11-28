import * as mtyp from "../model/types"

export interface chat {
    message:string
}
export interface GeneralResponse {
    id?:string,
    message:string,
    status?:mtyp.Status
}