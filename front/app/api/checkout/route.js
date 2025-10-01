export async function POST(req) {
    console.log("POST /api/checkout ejecutado");
  
    return new Response(JSON.stringify({ test: "ok" }), { status: 200 });
  }