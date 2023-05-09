// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";



export async function middleware(request: NextRequest, response: NextResponse,)
{
    const token = request.cookies.get("token")?.value;
    console.log(token);
    request.headers.set("Authorization", `Bearer ${token}`);





}