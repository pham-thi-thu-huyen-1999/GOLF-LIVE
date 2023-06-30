export const checkStaging = () => {
    const staging = process.env.NODE_ENV === "production";
    let baseUrl = "/";

    if(staging){
      baseUrl = '/';
    }

    return baseUrl
}