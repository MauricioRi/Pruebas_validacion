export const columns = [
    { label: 'Usuario', id: 'Username', minWidth: 100, align: 'center' },
    { label: 'Contraseña', id: 'Password', minWidth: 100, align: 'center' },
     { label: 'Rol', id: 'Rol', minWidth: 100, align: 'center' },
    { label: 'Correo', id: 'Mail', minWidth: 100, align: 'right' },
    
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

export const getUsers =async function () {
    try {
        const response = await fetch(`http://localhost:3001/webManager/kiosks`);
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

export const kioskCreate = async function (data) {
    try {
        const response = await fetch(`http://localhost:3001/webManager/UserInsert`, {
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

export const kioskUpdate = async function (data) {
    try {
        const response = await fetch(`http://localhost:3001/webManager/kioskUpdate`, {
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


//INSERT INTO table_name (nameClient, nameKioskClient, rfcClient, streetClient, suburbClient, zipcodeClient, )
//VALUES (value1, value2, value3, ...);