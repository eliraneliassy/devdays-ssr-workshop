import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import 'zone.js/dist/zone-node';

import 'reflect-metadata';
import { writeFileSync, readFileSync } from 'fs';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/devdays-ssr-workshop-server/main');


import * as express from 'express';

enableProdMode();

const app = express();

const distFolder = __dirname + '/dist/devdays-ssr-workshop';

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
}));

app.set('view engine', 'html');

app.set('views', __dirname + '/dist/devdays-ssr-workshop');


app.get('*.*', express.static(distFolder, {
    maxAge: '1y'
}));


app.get('*', (req, res) => {
    res.render('index', { req });
});


app.listen(4200, () => {
    console.log('app running');
});

