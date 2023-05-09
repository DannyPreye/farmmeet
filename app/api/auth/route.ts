import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { setCookie } from "nookies";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { m } from "framer-motion";

export async function GET(request: Request)
{
  return new Response('Hello, Next.js!');
}

export async function POST(request: Request,)
{

  const { email, password } = await request.json();

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/auth/signin`, {
      email,
      password
    });

    if (res.data.token) {
      const { token } = res.data;

      return new Response(JSON.stringify({ success: true, token }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": serialize("token", token, { path: "/", httpOnly: true })
        }
      });
    }
    else {
      return NextResponse.json({ success: false, message: res.data.message });
    }

  } catch (error) {
    console.log(error);

    NextResponse.json({ success: false });
  }
}
