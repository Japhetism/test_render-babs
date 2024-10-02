import { loginResponse } from "./login";
import { verifyotpResponse } from "./verifyotp";
import { profileResponse } from "./profile";
import { vendorsResponse } from "./vendors";
import { categoriesResponse } from "./categories";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getMockResponse = async (url: string) => {
    console.log("url is ", url);
    await delay(3000);
    
    if (url.includes("login") || url.includes("signup")) {
        return loginResponse();
    } else if (url.includes("profile")) {
        return profileResponse();
    } else if (url.includes("otp/validate")) {
        return verifyotpResponse();
    } else if (url.includes("vendor")) {
        console.log("should return ", vendorsResponse())
        return vendorsResponse();
    } else if (url.includes("product/category")) {
        console.log("Should return categories")
        return categoriesResponse();
    } else {
        console.log("should return null")
        return null;
    }

}