// 2. Импортировать все js файлы в главный "main.js"
import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js'; 
import { Airliner } from './Airliner.js';
import { BusinessJet } from './BusinessJet.js';

const emiratesPlane = new Airliner('Emirates', 'Airbus', 'A380-800', 644);
const saudiArabianPlane = new Airliner('Saudi Arabian', 'Boeing', '787 Dreamliner', 330);
const netJetsPlane = new BusinessJet('NetJets', 'Cessna', 'Citation Latitude', 9, '16млн$');
emiratesPlane.showInfoAirplane();
saudiArabianPlane.showInfoAirplane();
netJetsPlane.showInfoBusinessJet();