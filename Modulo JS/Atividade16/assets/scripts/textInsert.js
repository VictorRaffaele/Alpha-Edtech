//Add content to result article's text
export function result(resAddress, resDistrict, resCity, resState, resLat, resLng) {
    
    address.textContent += resAddress;
    district.textContent += resDistrict;
    city.textContent += resCity;
    state.textContent += resState;
    lat.textContent += resLat;
    lng.textContent += resLng;

}