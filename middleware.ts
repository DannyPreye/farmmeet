import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";


export async function middleware(request: NextRequest, response: NextResponse,)
{
    const token = Cookies.get("token");
    request.headers.set("Authorization", `Bearer ${token}`);

}