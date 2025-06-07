// Generated from grammar/SubC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SubCListener from './SubCListener.js';
import SubCVisitor from './SubCVisitor.js';

const serializedATN = [4,1,17,127,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,34,8,1,10,1,12,1,37,9,1,1,2,1,2,1,2,1,2,
3,2,43,8,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,5,4,54,8,4,10,4,12,4,57,9,
4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,65,8,5,10,5,12,5,68,9,5,1,6,1,6,1,6,1,7,1,
7,1,7,1,7,1,7,5,7,78,8,7,10,7,12,7,81,9,7,1,8,1,8,1,8,1,9,1,9,1,9,3,9,89,
8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,100,8,10,10,10,12,
10,103,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,114,8,11,10,
11,12,11,117,9,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,125,8,12,1,12,0,5,2,
10,14,20,22,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,2,1,0,5,7,1,0,15,16,125,
0,26,1,0,0,0,2,28,1,0,0,0,4,38,1,0,0,0,6,49,1,0,0,0,8,51,1,0,0,0,10,58,1,
0,0,0,12,69,1,0,0,0,14,72,1,0,0,0,16,82,1,0,0,0,18,88,1,0,0,0,20,90,1,0,
0,0,22,104,1,0,0,0,24,124,1,0,0,0,26,27,3,2,1,0,27,1,1,0,0,0,28,29,6,1,-1,
0,29,30,3,4,2,0,30,35,1,0,0,0,31,32,10,1,0,0,32,34,3,4,2,0,33,31,1,0,0,0,
34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,3,1,0,0,0,37,35,1,0,0,0,38,
39,3,6,3,0,39,40,3,8,4,0,40,42,5,1,0,0,41,43,3,10,5,0,42,41,1,0,0,0,42,43,
1,0,0,0,43,44,1,0,0,0,44,45,5,2,0,0,45,46,5,3,0,0,46,47,3,14,7,0,47,48,5,
4,0,0,48,5,1,0,0,0,49,50,7,0,0,0,50,7,1,0,0,0,51,55,5,15,0,0,52,54,7,1,0,
0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,9,1,0,0,0,57,
55,1,0,0,0,58,59,6,5,-1,0,59,60,3,12,6,0,60,66,1,0,0,0,61,62,10,1,0,0,62,
63,5,8,0,0,63,65,3,12,6,0,64,61,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,
1,0,0,0,67,11,1,0,0,0,68,66,1,0,0,0,69,70,3,6,3,0,70,71,3,8,4,0,71,13,1,
0,0,0,72,73,6,7,-1,0,73,74,3,16,8,0,74,79,1,0,0,0,75,76,10,1,0,0,76,78,3,
16,8,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,15,1,0,
0,0,81,79,1,0,0,0,82,83,3,18,9,0,83,84,5,9,0,0,84,17,1,0,0,0,85,86,5,10,
0,0,86,89,3,20,10,0,87,89,5,10,0,0,88,85,1,0,0,0,88,87,1,0,0,0,89,19,1,0,
0,0,90,91,6,10,-1,0,91,92,3,22,11,0,92,101,1,0,0,0,93,94,10,3,0,0,94,95,
5,11,0,0,95,100,3,22,11,0,96,97,10,2,0,0,97,98,5,12,0,0,98,100,3,22,11,0,
99,93,1,0,0,0,99,96,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,
0,102,21,1,0,0,0,103,101,1,0,0,0,104,105,6,11,-1,0,105,106,3,24,12,0,106,
115,1,0,0,0,107,108,10,3,0,0,108,109,5,13,0,0,109,114,3,24,12,0,110,111,
10,2,0,0,111,112,5,14,0,0,112,114,3,24,12,0,113,107,1,0,0,0,113,110,1,0,
0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,23,1,0,0,0,117,115,
1,0,0,0,118,119,5,1,0,0,119,120,3,20,10,0,120,121,5,2,0,0,121,125,1,0,0,
0,122,125,5,16,0,0,123,125,3,8,4,0,124,118,1,0,0,0,124,122,1,0,0,0,124,123,
1,0,0,0,125,25,1,0,0,0,11,35,42,55,66,79,88,99,101,113,115,124];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SubCParser extends antlr4.Parser {

    static grammarFileName = "SubC.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "'int'", "'float'", 
                            "'char'", "','", "';'", "'return'", "'+'", "'-'", 
                            "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "LETRA", 
                             "DIGITO", "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "identificador", "parametros", "parametro", "cuerpo", 
                         "instruccion", "retorno", "expresion", "termino", 
                         "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SubCParser.ruleNames;
        this.literalNames = SubCParser.literalNames;
        this.symbolicNames = SubCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.declaraciones_sempred(localctx, predIndex);
    	case 5:
    	    		return this.parametros_sempred(localctx, predIndex);
    	case 7:
    	    		return this.cuerpo_sempred(localctx, predIndex);
    	case 10:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 11:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    declaraciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    parametros_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    cuerpo_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SubCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.declaraciones(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	declaraciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new DeclaracionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, SubCParser.RULE_declaraciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.declaracion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new DeclaracionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_declaraciones);
	                this.state = 31;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 32;
	                this.declaracion(); 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SubCParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.tipo();
	        this.state = 39;
	        this.identificador();
	        this.state = 40;
	        this.match(SubCParser.T__0);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0)) {
	            this.state = 41;
	            this.parametros(0);
	        }

	        this.state = 44;
	        this.match(SubCParser.T__1);
	        this.state = 45;
	        this.match(SubCParser.T__2);
	        this.state = 46;
	        this.cuerpo(0);
	        this.state = 47;
	        this.match(SubCParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SubCParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SubCParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(SubCParser.LETRA);
	        this.state = 55;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 52;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 57;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	parametros(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ParametrosContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, SubCParser.RULE_parametros, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.parametro();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ParametrosContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_parametros);
	                this.state = 61;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 62;
	                this.match(SubCParser.T__7);
	                this.state = 63;
	                this.parametro(); 
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SubCParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.tipo();
	        this.state = 70;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	cuerpo(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CuerpoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, SubCParser.RULE_cuerpo, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 79;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CuerpoContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_cuerpo);
	                this.state = 75;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 76;
	                this.instruccion(); 
	            }
	            this.state = 81;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SubCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.retorno();
	        this.state = 83;
	        this.match(SubCParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SubCParser.RULE_retorno);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.match(SubCParser.T__9);
	            this.state = 86;
	            this.expresion(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(SubCParser.T__9);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, SubCParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 99;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_expresion);
	                    this.state = 93;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 94;
	                    this.match(SubCParser.T__10);
	                    this.state = 95;
	                    this.termino(0);
	                    break;

	                case 2:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_expresion);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 97;
	                    this.match(SubCParser.T__11);
	                    this.state = 98;
	                    this.termino(0);
	                    break;

	                } 
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, SubCParser.RULE_termino, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 115;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 113;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_termino);
	                    this.state = 107;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 108;
	                    this.match(SubCParser.T__12);
	                    this.state = 109;
	                    this.factor();
	                    break;

	                case 2:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_termino);
	                    this.state = 110;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 111;
	                    this.match(SubCParser.T__13);
	                    this.state = 112;
	                    this.factor();
	                    break;

	                } 
	            }
	            this.state = 117;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SubCParser.RULE_factor);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.match(SubCParser.T__0);
	            this.state = 119;
	            this.expresion(0);
	            this.state = 120;
	            this.match(SubCParser.T__1);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.match(SubCParser.DIGITO);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
	            this.identificador();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SubCParser.EOF = antlr4.Token.EOF;
SubCParser.T__0 = 1;
SubCParser.T__1 = 2;
SubCParser.T__2 = 3;
SubCParser.T__3 = 4;
SubCParser.T__4 = 5;
SubCParser.T__5 = 6;
SubCParser.T__6 = 7;
SubCParser.T__7 = 8;
SubCParser.T__8 = 9;
SubCParser.T__9 = 10;
SubCParser.T__10 = 11;
SubCParser.T__11 = 12;
SubCParser.T__12 = 13;
SubCParser.T__13 = 14;
SubCParser.LETRA = 15;
SubCParser.DIGITO = 16;
SubCParser.WS = 17;

SubCParser.RULE_programa = 0;
SubCParser.RULE_declaraciones = 1;
SubCParser.RULE_declaracion = 2;
SubCParser.RULE_tipo = 3;
SubCParser.RULE_identificador = 4;
SubCParser.RULE_parametros = 5;
SubCParser.RULE_parametro = 6;
SubCParser.RULE_cuerpo = 7;
SubCParser.RULE_instruccion = 8;
SubCParser.RULE_retorno = 9;
SubCParser.RULE_expresion = 10;
SubCParser.RULE_termino = 11;
SubCParser.RULE_factor = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_programa;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_declaraciones;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SubCParser.LETRA);
	    } else {
	        return this.getToken(SubCParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SubCParser.DIGITO);
	    } else {
	        return this.getToken(SubCParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_parametros;
    }

	parametro() {
	    return this.getTypedRuleContext(ParametroContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_cuerpo;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_retorno;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_factor;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	DIGITO() {
	    return this.getToken(SubCParser.DIGITO, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SubCParser.ProgramaContext = ProgramaContext; 
SubCParser.DeclaracionesContext = DeclaracionesContext; 
SubCParser.DeclaracionContext = DeclaracionContext; 
SubCParser.TipoContext = TipoContext; 
SubCParser.IdentificadorContext = IdentificadorContext; 
SubCParser.ParametrosContext = ParametrosContext; 
SubCParser.ParametroContext = ParametroContext; 
SubCParser.CuerpoContext = CuerpoContext; 
SubCParser.InstruccionContext = InstruccionContext; 
SubCParser.RetornoContext = RetornoContext; 
SubCParser.ExpresionContext = ExpresionContext; 
SubCParser.TerminoContext = TerminoContext; 
SubCParser.FactorContext = FactorContext; 
