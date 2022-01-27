import axios from "axios";

const request = axios.create({
  baseURL: "https://api.tfl.gov.uk/Line",
});

// Bakerloo
export const getBakerlooData = () => {
  return request.get("/bakerloo/Status").then((statusData) => {
    console.log("bakerloo API");
    return statusData.data[0];
  });
};

// Central
export const getCentralData = () => {
  return request.get("/central/Status").then((statusData) => {
    console.log("central API");
    return statusData.data[0];
  });
};

// Circle
export const getCircleData = () => {
  return request.get("/circle/Status").then((statusData) => {
    console.log("circle API");
    return statusData.data[0];
  });
};

// District
export const getDistrictData = () => {
  return request.get("/district/Status").then((statusData) => {
    console.log("district API");
    return statusData.data[0];
  });
};

// Hammersmith & City
export const getHammersmithData = () => {
  return request.get("/hammersmith-city/Status").then((statusData) => {
    console.log("hammersmith API");
    return statusData.data[0];
  });
};

// Jubilee
export const getJubileeData = () => {
  return request.get("/jubilee/Status").then((statusData) => {
    return statusData.data[0];
  });
};

// Metropolitan
export const getMetropolitanData = () => {
  return request.get("/metropolitan/Status").then((statusData) => {
    console.log("metropolitan API");
    return statusData.data[0];
  });
};

// Northern
export const getNorthernData = () => {
  return request.get("/northern/Status").then((statusData) => {
    console.log("northern API");
    return statusData.data[0];
  });
};

// Piccadilly
export const getPicadillyData = () => {
  return request.get("/piccadilly/Status").then((statusData) => {
    console.log("picadilly API");
    return statusData.data[0];
  });
};

// Victoria
export const getVictoriaData = () => {
  return request.get("/victoria/Status").then((statusData) => {
    console.log("victoria API");
    return statusData.data[0];
  });
};

// Waterloo and city
export const getWaterlooData = () => {
  return request.get("/waterloo-city/Status").then((statusData) => {
    console.log("waterloo API");
    return statusData.data[0];
  });
};
