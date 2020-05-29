"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matches = MatchReader_1.MatchReader.fromCsv('football.csv');
var summaryHtmlReport = Summary_1.Summary.winsAnalysisWithHtmlReport('Chelsea');
matches.load();
summaryHtmlReport.buildAndPrintReport(matches.matches);
