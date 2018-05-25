import { createSelector } from 'reselect';

const getClients = (state, props) => props.clientsAfterSearth.clients;
const getId = (state, props) => props.clientsAfterSearth.ids;

export const filterList = createSelector(
    [ getClients, getId ],
    (clients, getId ) => {
        let clientsList = getId.map((id) => {
            return clients[id];
        });
        return clientsList;
    }
);