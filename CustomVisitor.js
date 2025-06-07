const SubCVisitor = require("./generated/SubCVisitor").SubCVisitor;

class CustomVisitor extends SubCVisitor {
    visitPrograma(ctx) {
        return this.visit(ctx.declaraciones());
    }

    visitDeclaraciones(ctx) {
        if (ctx.declaraciones()) this.visit(ctx.declaraciones());
        return this.visit(ctx.declaracion());
    }

    visitDeclaracion(ctx) {
        const tipo = ctx.tipo().getText();
        const id = ctx.identificador().getText();
        console.log(`\nFunción ${id} de tipo ${tipo}`);
        return this.visit(ctx.cuerpo());
    }

    visitCuerpo(ctx) {
        if (ctx.cuerpo()) this.visit(ctx.cuerpo());
        return this.visit(ctx.instruccion());
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.retorno());
    }

    visitRetorno(ctx) {
        return ctx.expresion() ? this.visit(ctx.expresion()) : null;
    }

    visitExpresion(ctx) {
        if (ctx.getChildCount() === 3) {
            const left = this.visit(ctx.expresion());
            const right = this.visit(ctx.termino());
            const op = ctx.getChild(1).getText();
            return eval(`${left} ${op} ${right}`);
        } else {
            return this.visit(ctx.termino());
        }
    }

    visitTermino(ctx) {
        if (ctx.getChildCount() === 3) {
            const left = this.visit(ctx.termino());
            const right = this.visit(ctx.factor());
            const op = ctx.getChild(1).getText();
            return eval(`${left} ${op} ${right}`);
        } else {
            return this.visit(ctx.factor());
        }
    }

    visitFactor(ctx) {
        const text = ctx.getText();
        return !isNaN(text) ? parseInt(text) : text;
    }
}

module.exports = CustomVisitor;