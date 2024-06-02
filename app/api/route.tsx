import { NextResponse } from "next/server";

/**
 * Fetch All Products from DB
 */
export async function GET() {
  try {
    let res = await fetch("https://dummyjson.com/products?limit=10");
    if (!res.ok) throw new Error("[PRODUCTS_API_FAILED]");
    let data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("[GET_PRODUCTS_API_FAILED]", error);
    return;
  }
}
