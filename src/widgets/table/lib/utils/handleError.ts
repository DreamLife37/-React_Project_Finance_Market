import {AxiosError} from "axios";
import {Error} from "../../model/types";

export const handleError = (error: AxiosError<Error>) => {
    console.log('error.response?.data', error.response?.data)
    if (error.response?.data) {
        if (error.response?.data.error)
            return error.response?.data.error
        if (error.response?.data.message)
            return error.response?.data.message
        return error.response?.data
    }
    return 'Не удалось загрузить данные'
}