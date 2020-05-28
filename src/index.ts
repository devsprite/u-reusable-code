import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
const matches = new MatchReader(reader);
matches.load();

console.log(matches.matches);
