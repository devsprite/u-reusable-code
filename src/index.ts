import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matches = MatchReader.fromCsv('football.csv');
const summaryHtmlReport = Summary.winsAnalysisWithHtmlReport('Chelsea');

matches.load();
summaryHtmlReport.buildAndPrintReport(matches.matches);
