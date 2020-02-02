$(document).ready(()=>{
    $.ajax({
        url: "../mock/data.json"
    }).done(data => {
        let info = data.lista;
        console.info(`Lista: ${info}`);
        info.forEach(element => {
            console.info(element);
            $("#Lista").append(`<ol class="list-group">
            <li class="list-group-item llave">Id: ${element.id}</li>
            <li class="list-group-item">Name: ${element.name}</li>
            <li class="list-group-item">Brewery: ${element.brewery_type}</li>
            <li class="list-group-item">Street: ${element.street}</li>
            <li class="list-group-item">City: ${element.city}</li>
            <li class="list-group-item">State: ${element.State}</li>
            <li class="list-group-item">Potal code: ${element.postal_code}</li>
            <li class="list-group-item">Country: ${element.country}</li>
            <li class="list-group-item">Longitude: ${element.longitude}</li>
            <li class="list-group-item">Latitude: ${element.latitude}</li>
            <li class="list-group-item">Phone: ${element.phone}</li>
            <li class="list-group-item">Website url: ${element.website_url}</li>
            <li class="list-group-item">Updated at: ${element.updated_at}</li></ol>`)
            
        });
    });
});