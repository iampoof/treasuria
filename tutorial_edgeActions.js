
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageHeight=sym.$('Stage').height();sym.$("#Stage").css({"transform-origin":"0 0","-ms-transform-origin":"0 0","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-o-transform-origin":"0 0"});function scaleStage(){var stage=sym.$('Stage');var parent=sym.$('Stage').parent();var parentWidth=stage.parent().width();var stageWidth=stage.width();var desiredWidth=Math.round(parentWidth*1);var rescale=(desiredWidth/stageWidth);stage.css('transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');stage.css('-ms-transform','scale('+rescale+')');stage.css('-webkit-transform','scale('+rescale+')');stage.css('-moz-transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');parent.height(stageHeight*rescale);}
$(window).on('resize',function(){scaleStage();});$(document).ready(function(){scaleStage();});sym.$('pause').click(function(){sym.stop();sym.$("play").show();sym.$("pause").hide();});sym.$('play').click(function(){var timelinePos=sym.getPosition();sym.play(timelinePos);sym.$("pause").show();sym.$("play").hide();});sym.$('start_button').click(function(){sym.play('start');});});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.$('replay').click(function(){sym.play('start');});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Text_1'
(function(symbolName){})("Text_1");
//Edge symbol end:'Text_1'

//=========================================================

//Edge symbol: 'Text_2'
(function(symbolName){})("Text_2");
//Edge symbol end:'Text_2'

//=========================================================

//Edge symbol: 'Text_3'
(function(symbolName){})("Text_3");
//Edge symbol end:'Text_3'

//=========================================================

//Edge symbol: 'Text_4'
(function(symbolName){})("Text_4");
//Edge symbol end:'Text_4'

//=========================================================

//Edge symbol: 'Text_5'
(function(symbolName){})("Text_5");
//Edge symbol end:'Text_5'

//=========================================================

//Edge symbol: 'Text_1_0'
(function(symbolName){})("Text_1_0");
//Edge symbol end:'Text_1_0'

//=========================================================

//Edge symbol: 'start_button'
(function(symbolName){})("start_button");
//Edge symbol end:'start_button'

//=========================================================

//Edge symbol: 'pause'
(function(symbolName){})("pause");
//Edge symbol end:'pause'

//=========================================================

//Edge symbol: 'replay'
(function(symbolName){})("replay");
//Edge symbol end:'replay'

//=========================================================

//Edge symbol: 'play'
(function(symbolName){})("play");
//Edge symbol end:'play'

//=========================================================

//Edge symbol: 'Text_1_1'
(function(symbolName){})("Text_1_1");
//Edge symbol end:'Text_1_1'

//=========================================================

//Edge symbol: 'Text_1_2'
(function(symbolName){})("Text_1_2");
//Edge symbol end:'Text_1_2'

//=========================================================

//Edge symbol: 'Text_6'
(function(symbolName){})("Text_6");
//Edge symbol end:'Text_6'

//=========================================================

//Edge symbol: 'Text_7'
(function(symbolName){})("Text_7");
//Edge symbol end:'Text_7'

//=========================================================

//Edge symbol: 'Text_8'
(function(symbolName){})("Text_8");
//Edge symbol end:'Text_8'
})(jQuery,AdobeEdge,"EDGE-26812176");