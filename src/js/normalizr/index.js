import { normalize, schema } from 'normalizr';

const clients = new schema.Entity('clients', {}, { idAttribute: '_id' });

const clientList = new schema.Array(clients);

function normalizeClientList(data) {
    const result = normalize(data, clientList);
    return { ids: result.result, clients: result.entities.clients };
}


export default normalizeClientList;