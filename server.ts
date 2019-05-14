import { renderModuleFactory } from '@angular/platform-server';
import 'zone.js/dist/zone-node';

import 'reflect-metadata';
import { writeFileSync } from 'fs';

const { AppServerModuleNgFactory } = require('./dist/devdays-ssr-workshop-server/main');

renderModuleFactory(AppServerModuleNgFactory, {
    document: '<app-root></app-root>',
    url: '/'
}).then(html => {
    console.log('pre renderer success!');
    writeFileSync('./index-prerender.html', html);
})
    .catch(err => console.log(err));