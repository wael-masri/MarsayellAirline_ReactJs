import React from 'react';
import Data from './Data.json';

export function getById(id){
    const product = Data.item_shopping.find(item => item.id === id);

    return Promise.resolve(product);
}
