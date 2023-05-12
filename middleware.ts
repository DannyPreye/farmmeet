// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";



export async function middleware(request: NextRequest, response: NextResponse,)
{
    const token = request.cookies.get("token")?.value;

    const jwtdata = jwt.decode(token as string);

    if (request.nextUrl.pathname.startsWith("/dashboard") && !jwtdata) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (request.nextUrl.pathname.startsWith("/auth") && jwtdata) {
        return NextResponse.redirect(new URL("/dashboard/discover", request.url));
    }

    request.headers.set("Authorization", `Bearer ${token}`);

    return NextResponse.next();

}