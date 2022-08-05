var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
var newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 2
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
var ok = StatusCodes.OK;
var indiceOk = StatusCodes["OK"];
var stringBadRequest = StatusCodes[400];
console.log('ok', ok); //saída: 200
console.log('indice', indiceOk); //saída: 200
console.log('bad request', stringBadRequest); //saída: BadRequest
// enum - dias da semana
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["domingo"] = 1] = "domingo";
    WeekDays[WeekDays["segunda"] = 2] = "segunda";
    WeekDays[WeekDays["terca"] = 3] = "terca";
    WeekDays[WeekDays["quarta"] = 4] = "quarta";
    WeekDays[WeekDays["quinta"] = 5] = "quinta";
    WeekDays[WeekDays["sexta"] = 6] = "sexta";
    WeekDays[WeekDays["sabado"] = 7] = "sabado";
})(WeekDays || (WeekDays = {}));
var fds = [WeekDays.domingo, WeekDays.sabado];
console.log('fds', fds);
// enum cores do arcoiris
var ArcoIris;
(function (ArcoIris) {
    ArcoIris["red"] = "vermelho";
    ArcoIris["orange"] = "laranja";
    ArcoIris["yellow"] = "amarelo";
    ArcoIris["green"] = "verde";
    ArcoIris["cian"] = "azul";
    ArcoIris["blue"] = "anil";
    ArcoIris["purple"] = "roxo";
})(ArcoIris || (ArcoIris = {}));
var rainbow = [ArcoIris.red, ArcoIris.blue, ArcoIris.cian, ArcoIris.green, ArcoIris.orange, ArcoIris.purple, ArcoIris.yellow];
console.log('arco-iris', rainbow);
// enum ações
var OK;
(function (OK) {
    OK[OK["save"] = 0] = "save";
    OK[OK["print"] = 1] = "print";
    OK[OK["open"] = 2] = "open";
    OK[OK["visual"] = 3] = "visual";
    OK[OK["close"] = 4] = "close";
})(OK || (OK = {}));
var imprimir = OK.print;
console.log('impressora', imprimir);
// enum pontos cardeais
var Cardeais;
(function (Cardeais) {
    Cardeais["norte"] = "N";
    Cardeais["sul"] = "S";
    Cardeais["leste"] = "L";
    Cardeais["oeste"] = "O";
})(Cardeais || (Cardeais = {}));
;
var direcao = "Os polos ficam a ".concat(Cardeais.norte, " e ao ").concat(Cardeais.sul);
console.log(direcao);
