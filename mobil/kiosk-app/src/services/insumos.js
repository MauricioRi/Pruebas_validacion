export const columns = [
    { label: 'Nombre', id: 'Name', minWidth: 100, align: 'center' },
    { label: 'Cantidad', id: 'Quantity', minWidth: 100, align: 'center' },
    { label: 'area', id: 'Area_insumo', minWidth: 100, align: 'right' },
    { label: 'Cant_max', id: 'Stock_max', minWidth: 100, align: 'right' },
    { label: 'Cant_Min', id: 'Stock_min', minWidth: 100, align: 'right' },
    { label: 'Cant_alert', id: 'Stock_alert', minWidth: 100, align: 'right' },
    { label: 'Costo', id: 'Cost', minWidth: 100, align: 'right' },
    { label: '', id: 'actions', minWidth: 0, align: 'right' }
];
//Datos para el datatable
export const rows2 = [
    {
        id: 1,
        nameKioskClient:'Farmacia Guadalajara',
        nameClient:'Juanito Banana',
        email:'jb@mail.com',
        celphone1Client:'4434026232',
        rfcClient:'ASDQWOJI212',
        streetClient:'Acerina',
        extNumberClient: '23',
        zipcodeClient: '58130',
        suburbClient: 'Industrial',
        date:'30/10/1997',
        status: '1',
    },
    {
        id: 2,
        nameKioskClient:'Sears',
        nameClient:'Miguel Banana',
        email:'mb@mail.com',
        celphone1Client: null,
        rfcClient:'ASDQWOJI212',
        streetClient:'Paseo del Abedul',
        extNumberClient: '396',
        zipcodeClient: '58110',
        suburbClient: 'Prados Verdes',
        date:'09/07/2003',
        status: '0',
    },
];

export const getInsumo =async function () {
    try {
        const response = await fetch(`http://localhost:3001/webManager/Insumo`);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        return json;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const InsumoCreate = async function (data) {
    try {
        const response = await fetch(`http://localhost:3001/webManager/InsumoInsert`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw Error(response.statusText);
        }else{
            const json = await response.json();
            return json;
        }
        
    } catch (error) {
        console.log(error);
        return []
    }
}

export const InsumoUpdate = async function (data) {
    try {
        const response = await fetch(`http://localhost:3001/webManager/InsumoUpdate`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw Error(response.statusText);
        }else{
            const json = await response.json();
            return json;
        }
        
    } catch (error) {
        console.log(error);
        return []
    }
}
