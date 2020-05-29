import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analysers/WinsAnalysis';
import { Summary } from './Summary';

const reader = new CsvFileReader('football.csv');
const matches = new MatchReader(reader);
matches.load();
// console.log(matches.matches);

//const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matches.matches);
