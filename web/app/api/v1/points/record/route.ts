import { handleRouteError, jsonSuccess } from "@/lib/server/apiResponse";
import { getAccessTokenPayload } from "@/lib/server/auth/request";
import { awardPoints } from "@/lib/server/points/service";
import { recordPointsSchema } from "@/validators/points.schema";

export async function POST(request: Request) {
  try {
    const payload = getAccessTokenPayload(request);
    const body: unknown = await request.json();
    const input = recordPointsSchema.parse(body);
    const data = await awardPoints(payload.sub, input.reason, input.sourceKey);
    return jsonSuccess(data);
  } catch (error) {
    return handleRouteError(error);
  }
}
