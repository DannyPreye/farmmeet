import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import Cookie from "js-cookie";

export async function GET(request: Request)
{
  return new Response('Hello, Next.js!');
}

export async function POST(request: Request, response: Response)
{


  console.log(NextResponse.json);

  const { email, password } = await request.json();

  console.log(email, password);
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/auth/signin`, {
      email,
      password
    });

    if (res.data.token) {
      const { token } = res.data;

      Cookie.set("token", token, { expires: 1 });

      return NextResponse.json({ success: true, token });
    } else {
      return NextResponse.json({ success: false, message: res.data.message });
    }

  } catch (error) {
    console.log(error);

    NextResponse.json({ success: false });
  }
}
