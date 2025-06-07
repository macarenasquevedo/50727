grammar SubC;

programa: declaraciones ;

declaraciones
    : declaracion
    | declaraciones declaracion
    ;

declaracion
    : tipo identificador '(' parametros? ')' '{' cuerpo '}'
    ;

tipo: 'int' | 'float' | 'char';

identificador: LETRA (LETRA | DIGITO)*;

parametros
    : parametro
    | parametros ',' parametro
    ;

parametro: tipo identificador ;

cuerpo
    : instruccion
    | cuerpo instruccion
    ;

instruccion: retorno ';' ;

retorno: 'return' expresion | 'return' ;

expresion
    : expresion '+' termino
    | expresion '-' termino
    | termino
    ;

termino
    : termino '*' factor
    | termino '/' factor
    | factor
    ;

factor
    : '(' expresion ')'
    | DIGITO
    | identificador
    ;

LETRA: [a-zA-Z];
DIGITO: [0-9];

WS: [ \t\r\n]+ -> skip;