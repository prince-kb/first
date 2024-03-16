import { NextResponse } from "next/server";

export async function POST (request) {
    let x = await request.json();
    console.log(x)
    return NextResponse.json({
        success : true,
        code : "POST",
        data : x
    })
}