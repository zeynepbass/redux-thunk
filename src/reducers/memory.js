const INITIAL_STATE={
    yaziListesi:[]
}
const Movies = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'YAZI':
        return {...state,yaziListesi:action.payload}
     

        default:
            return state;
    }
};
export default Movies;