import { BASE_URL } from "@/config";

export async function GET() {
    try{
        if(!BASE_URL){
            return new Response('Base url not found', {
                status:404,
                statusText:'Failed'
            })
        }
        const response=await fetch(`${BASE_URL}/api/notifications/`, {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
          },
        });
        if (!response.ok){
          return new Response("Request failed", {
            status:response.status,
            statusText:response.statusText,
          });
        }
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status:200,
        statusText:'Success'
      });
    }
    catch(error:any){
        return new Response(error.message,{
            status:500,
            statusText:'Failed'
        })
    }
    
}