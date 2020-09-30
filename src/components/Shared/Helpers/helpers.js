import * as moment from "moment";


export const preferenciaData = data => moment(data).format('D/M/yyyy  H:mm'); 
export const prefDataSemHor = data => moment(data).format('D/M/yyyy'); 
