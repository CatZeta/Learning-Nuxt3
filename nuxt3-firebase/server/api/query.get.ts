import {add} from '../../lib/firestore';

export default defineEventHandler(async (event) => {
    try{
        const query = getQuery(event.req)
        const body = await readBody(event.req)

        const docRef = await add(query.col as string, body);

        return{result: docRef};
    }catch(error){
        return{error: error.message}
    }
})