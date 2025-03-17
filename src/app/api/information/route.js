import Information from "@/models/Information";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, age, desses, number, telegramId, email } = body;

    if (!name || !age || !desses || !number) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const newInformation = await Information.create({
      name,
      age,
      desses,
      number,
      telegramId,
      email,
    });

    return NextResponse.json(
      { massage: "اطلاعات شما ثبت شد" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "moshkeli dar server rokh dade ast" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    await connectDB();

    const information = await Information.find();
    return NextResponse.json({ data: information }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
