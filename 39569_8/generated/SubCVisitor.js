// Generated from grammar/SubC.g4 by ANTLR 4.13.2
// jshint ignore: start
var antlr4 = require('antlr4');

// Esta clase define un visitor genérico para el árbol producido por SubCParser.
function SubCVisitor() {
    antlr4.tree.ParseTreeVisitor.call(this);
    return this;
}

SubCVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SubCVisitor.prototype.constructor = SubCVisitor;

// Visit a parse tree produced by SubCParser#programa.
SubCVisitor.prototype.visitPrograma = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#declaraciones.
SubCVisitor.prototype.visitDeclaraciones = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#declaracion.
SubCVisitor.prototype.visitDeclaracion = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#tipo.
SubCVisitor.prototype.visitTipo = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#identificador.
SubCVisitor.prototype.visitIdentificador = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#parametros.
SubCVisitor.prototype.visitParametros = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#parametro.
SubCVisitor.prototype.visitParametro = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#cuerpo.
SubCVisitor.prototype.visitCuerpo = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#instruccion.
SubCVisitor.prototype.visitInstruccion = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#retorno.
SubCVisitor.prototype.visitRetorno = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#expresion.
SubCVisitor.prototype.visitExpresion = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#termino.
SubCVisitor.prototype.visitTermino = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SubCParser#factor.
SubCVisitor.prototype.visitFactor = function(ctx) {
    return this.visitChildren(ctx);
};

exports.SubCVisitor = SubCVisitor;
