/// <reference path='crud.d.ts' />

import * as CRUD from 'crud.js';
import {RowID, RowElement} from 'interface.ts';

const row: RowElement = {firstName: "Guillaume", lastName: "Salva"};
const newRowID: RowID = insertRow;
const updatedRow: RowElement = {row: 23};
updateRow();
deleteRow();

