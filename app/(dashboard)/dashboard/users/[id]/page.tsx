interface myParams{
    params:{id:string};
}
const Page = async({params} : myParams)=>{
    const { id }= await params;
    return(
        <div>
            User {id}
        </div>
    )
}
export default Page;