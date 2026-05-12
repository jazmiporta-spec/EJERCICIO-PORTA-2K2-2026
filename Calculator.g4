grammar Calculator;

// REGLAS DE PARSER
program : functionDeclaration EOF ;

functionDeclaration
    : FUNCTION Identifier PARENAP parameterList? PARENCI LLAVEAP functionBody LLAVECI
    ;

parameterList
    : Identifier (COMA Identifier)*
    ;

functionBody
    : statement*
    ;

statement
    : expressionStatement | consoleStatement
    ;

expressionStatement
    : expression PUNTCOM
    ;

consoleStatement
    : CONSOLE PUNTO LOG PARENAP expression PARENCI PUNTCOM
    ;

expression
    : term ((MAS | MENOS) term)*
    ;

term
    : Identifier | Number | PARENAP expression PARENCI
    ;

// REGLAS DE LEXER
FUNCTION : 'function' ;
CONSOLE  : 'console' ;
LOG      : 'log' ;
PARENAP  : '(' ;
PARENCI  : ')' ;
LLAVEAP  : '{' ;
LLAVECI  : '}' ;
COMA     : ',' ;
PUNTCOM  : ';' ;
PUNTO    : '.' ;
MAS      : '+' ;
MENOS    : '-' ;

Identifier : [a-zA-Z] [a-zA-Z0-9_]* ;
Number     : [0-9]+ ;

WS : [ \t\r\n]+ -> skip ;