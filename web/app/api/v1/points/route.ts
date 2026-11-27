import { handleRouteError, jsonSuccess } from "@/lib/server/apiResponse";
import { getAccessTokenPayload } from "@/lib/server/auth/request";
import { getPointsSummaryForUser } from "@/lib/server/points/service";

export async function GET(request: Request) {
  try {
    const payload = getAccessTokenPayload(request);
    const data = await getPointsSummaryForUser(payload.sub);
    return jsonSuccess(data);
  } catch (error) {
    return handleRouteError(error);
  }
}
