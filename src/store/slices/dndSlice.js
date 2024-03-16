import { createSlice,nanoid ,buildCreateSlice, asyncThunkCreator} from "@reduxjs/toolkit";


// export const fetchDnd = createAsyncThunk(
//   'dnd/fetchDnd',
//   async function(){ 
//     const responce = await fetch('https://www.dnd5eapi.co/api/races'); 
//     const data = await responce.json(); 
//     return data ; 
//   }  
// );
const createSliceWithThunks = buildCreateSlice({
    creators: {asyncThunk : asyncThunkCreator}
})

const initialState = { 
    items: [] ,
    status : null , 
    error : null ,
};  

export const dndSlice = createSliceWithThunks({
    name : 'dnd' , 
    initialState,
    reducers: (create) => ({

        fetchDnd : create.asyncThunk(
            async (urlAPI) => {
                const responce = await fetch(`https://www.dnd5eapi.co/api/${urlAPI}`); 
                const data = await responce.json(); 
                return data ; 
            },
            {
                pending : (state) => {
                    state.status = 'loading'
                },
                fulfilled : (state , actions) => {
                    state.status = "resolved" 
                    state.items = actions.payload 
                    console.log(state.items)
                },
                rejected : (state) => {}
            }
        )
    })
})

// export const dndSlice = createSlice({
//     name : 'dnd' , 
//     initialState, 
//     reducers: { 
        
//     },
//     extraReducers:{
//         [fetchDnd.pending] : (state) => {
//             state.status = 'loading' ; 

//         } ,
//         [fetchDnd.fulfilled] : (state , actions) => {
//             state.status = 'resolved' ; 
//             state.items = actions.payload ;

//         } ,
//         [fetchDnd.rejected] : (state , actions) => {} ,

//     },  
// })

export const {fetchDnd} = dndSlice.actions ; 

export default dndSlice.reducer
