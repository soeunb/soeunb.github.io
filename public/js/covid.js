const COVID_API_KEY = 'uFuur3upB7DtU3dYv8lWPOKNUNqyqt7tIDuM%2FjCcii9w0PPUr6pOAp1b8Yca8u6ScaFOudCO%2BVGNZx6LCdZRQg%3D%3D';
const date = new Date();
const dateFormat = date.getFullYear() + String(date.getMonth()+1).padStart(2, '0') + String(date.getDate()).padStart(2, '0');

function getCovidInfo(position) {
    const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${COVID_API_KEY}&startCreateDt=${dateFormat}&endCreateDt=${dateFormat}`;

    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

function covidError() {
    // error
}

getCovidInfo();