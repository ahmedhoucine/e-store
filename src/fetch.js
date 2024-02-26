const baseurl = "http://localhost:3001";
export const fetcher = async (url) => {
    let responseobject = {errormessage:'', data: []}
    try{
    const response = await fetch(baseurl + url);
    if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }
    const responsedata = await response.json();
    responseobject.errormessage='';
    responseobject.data=responsedata;
    
}
    catch(err){
        responseobject.errormessage= err.message
    }
  return responseobject;
}


export const getcategories = () => {
    return fetcher('/categories');
}

export const getproducts = id => {
    return fetcher("/products?catId="+id);
}