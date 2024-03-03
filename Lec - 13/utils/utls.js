export function filterData(searchText, resturantData) {
    return resturantData.filter((resturant) => resturant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
};