export const getCountryCoordinates = (country: string): [number, number] => {
    const coordinates: {[key: string]: [number, number]} = {
        "Spain": [-3.74922, 40.46366],
        "France": [2.213749, 46.227638],
        "Italy": [12.56738, 41.87194],
        "United Kingdom": [-0.12574, 51.50853],
        "Germany": [13.404954, 52.520007],
        "USA": [-95.712891, 37.09024],
        "China": [116.407396, 39.904200],
        "Japan": [139.691706, 35.689487],
        "South Korea": [126.977969, 37.566535],
        "Russia": [37.618423, 55.751244],
        "India": [77.209021, 28.613939],
        "Brazil": [-47.92920, -15.77972],
        "Mexico": [-99.133208, 19.432608],
        "Canada": [-75.697193, 45.421532],
        "Australia": [149.128684, -35.280937],
    }

    return coordinates[country] || [0, 0]
}