// Useful for generating some keys
export const generateKey = ()=>{
    return (new Date).getTime().toString().concat(Math.floor(Math.random()*10000).toString());
};

// Descending sorting return
export const descSortReturn = (a, b)=>{
    return a < b? 1:-1;
};
// Ascending sorting return
export const ascSortReturn = (a, b)=>{
    return a > b? 1:-1;
};

