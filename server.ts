import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import 'zone.js/dist/zone-node';

import 'reflect-metadata';
import { writeFileSync, readFileSync } from 'fs';

const { AppServerModuleNgFactory } = require('./dist/devdays-ssr-workshop-server/main');

import * as express from 'express';

enableProdMode();

const app = express();

const indexHtml = readFileSync(__dirname + '/dist/devdays-ssr-workshop/index.html', 'utf-8').toString();

app.get('*.*', express.static(__dirname + '/dist/devdays-ssr-workshop', {
    maxAge: '5y'
}));

app.route('*').get((req, res) => {
    renderModuleFactory(AppServerModuleNgFactory, {
        document: indexHtml,
        url: req.url
    }).then(html => res.status(200).send(html))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

app.listen(4200, () => {
    console.log('app running');
});

