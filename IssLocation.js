async function getIssData() {

    try {
        const res = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await res.json();
        
        //Destruct        
        const {iss_position: {longitude:long, latitude:lat}} = data;

        console.log(`ISS Current Location => ${lat},${long}`);


    } catch (error) {
        console.log(error);
        
    }

}

getIssData();