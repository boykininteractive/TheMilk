import axios from 'axios'

export default (context, inject) => {
    const apiUrl= "https://api.airtable.com/v0/"
    const apiKey= "keywGmx3GLXa7JITD"
    
    inject('airtable', {
        getData
    })

    async function getData(base, table, airtableView) {
        const response = await fetch(`${apiUrl}${base}/${table}/?view=${airtableView}`, {
            headers:{
                Authorization: `Bearer keywGmx3GLXa7JITD`,
            }
        })
        const json = await response.json()
        return json
    }
    
}


/*

const records = await $airtable.getData(
      "apph0xBca451C1vdV",
      "Domain%20Names"
    );

*/