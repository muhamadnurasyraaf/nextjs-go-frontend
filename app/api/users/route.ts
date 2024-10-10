export async function GET(request: Request):Promise<Response>{

    const users =[
        {id: 1,name:'John'},
        {id:2,name:'Bob'},
        {id:3,name:'Jane'}
    ];
    return new Response(JSON.stringify(users))
}