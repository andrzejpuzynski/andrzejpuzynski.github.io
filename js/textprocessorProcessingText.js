	var textClear = {
        clearTags: function () {
         	var $textToProcess = $('.textToProcess').val().replace(/<[A-Za-z0-9\/]+\b[^>]*>/gm,'');
            	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
		},
        clearNbsp: function () {
            var $textToProcess = $('.textToProcess').val().replace(/&nbsp;/gm, '');
            $('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
        },
        clearTabs: function () {
            var $textToProcess = $('.textToProcess').val().replace(/\t/gm,'');
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
		},
        clearMultiSpaces: function () {
            var $textToProcess = $('.textToProcess').val().replace(/ +/gm, ' ').trim();
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
		},
        clearBlankLines: function () {
            var $textToProcess = $('.textToProcess').val().replace(/\s+\n/gm, '\n');
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
		},
        clearLineBreak: function () {
            var $textToProcess = $('.textToProcess').val().replace(/\n/gm, '').trim();
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
        }
    }
    
    var textRemove = {
        wordDuplicates: function () {
            var $textToProcess = $('.textToProcess').val().split(' ').filter((i, idx, ar) => ar.indexOf(i) === idx).join(` `);
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
        },
        wordsIncludingInLongerWords: function () {
            var $textToProcess = $('.textToProcess').val().split(' ').filter((i, idx, ar) => !ar.some((y, idy) => y.includes(i) && y.length > i.length) ).join(' ');
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
        },
        wordsNotIncludingFirstLetterFromInput: function () {
            var $firstLetterOfWord = $('#firstLetterOfWord').val();
            var $textToProcess = $('.textToProcess').val().split(' ')
            .filter(i => $firstLetterOfWord.includes(i.slice(0,1)) ).join(' ');
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
        },
        wordsIncludingFirstLetterFromInput: function () {
            var $firstLetterOfWordToIncluding = $('#firstLetterOfWordToIncluding').val();
            var $textToProcess = $('.textToProcess').val().split(' ')
            .filter(i => !$firstLetterOfWordToIncluding.includes(i.slice(0,1)) ).join(' ');
            $('.textToProcess').empty();
            $('.textToProcess').val($textToProcess);
            stats();
        }
    }
    
    var textProcess = {
        allWordsStartsUpperCase: function () {
            var $textToProcess = $('.textToProcess').val().split(' ').map(i => i.slice(0, 1).toUpperCase().concat(i.slice(1))).join(` `);
        	$('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess);
            stats();
        },
        swapAllWords: function () {
            var result = [];
            var $textToProcess = $('.textToProcess').val().split(' ');
            
            while ($textToProcess.length > 0 ) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                result.push($textToProcess.filter((i, idx) => idx === tempIndex));
                $textToProcess = $textToProcess.filter((i, idx) => idx !== tempIndex);
            }
                        
            $('.textToProcess').empty();
            $('.textToProcess').val(result.join(` `));
            stats();
        },
        divideTextOnCertainCharacters: function () {
            var result = [[]];
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $lenghtOfTextAfterDividing = !$('#lenghtOfTextAfterDividing').val() ? 1000 : $('#lenghtOfTextAfterDividing').val();
            var partOfText = 0;
                        
            while ($textToProcess.length > 0 ) {

                if (result[partOfText].join(' ').concat(` ${$textToProcess[0]}`).length > $lenghtOfTextAfterDividing) {
                    result.push([]);
                    partOfText = partOfText + 1;
                }
                
                result[partOfText].push($textToProcess[0]);
                $textToProcess.shift();

            }
            
            result = result.map(i => i.join(' '));
            $('.textToProcess').empty();
            $('.textToProcess').val(result.join(`\n\n`));
            stats();
        },
        divideTextOnEqualParts: function () {
            var result = "";
            var $textToProcess = $('.textToProcess').val();
            var parts = !$('#lenghtOfEqualParts').val() ? 10 : parseInt($('#lenghtOfEqualParts').val());   

            for(i = 0; i < $textToProcess.length; i += parts) {
                result = result.concat(`${$textToProcess.slice(i, i+parts)} `);
                console.log(i);
            }

            $('.textToProcess').empty();
            $('.textToProcess').val(result.trim());
            stats();
        },
        addAtEndOfTheWordsCharacter: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $numberOfWords = !$('#numberOfWords').val() ? 10 : $('#numberOfWords').val();
            var $characterToAdding = !$('#characterToAdding').val() ? "," : $('#characterToAdding').val();
                        
            for (i = 1; i <= $numberOfWords; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? i.concat($characterToAdding) : i);
            }
            $('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
        wrapTheWordsWithSimpleQuotes: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $maxWordsForSimpleQuotes = $textToProcess.filter(i => i.slice(0, 1) !== "'").length;
            var $numberOfWordsforSimpleQuotes = !$('#numberOfWordsforSimpleQuotes').val() ?
                                                $maxWordsForSimpleQuotes :
                                                ($maxWordsForSimpleQuotes < $('#numberOfWordsforSimpleQuotes').val()) ?
                                                $maxWordsForSimpleQuotes : $('#numberOfWordsforSimpleQuotes').val();
                        
            for (i = 1; i <= $numberOfWordsforSimpleQuotes; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);

                while($textToProcess[tempIndex].slice(0,1) === "'") {
                    var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                };

                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? "'".concat(i).concat("'") : i);
            }
            $('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
        wrapTheWordsWithDoubleQuotes: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $maxWordsForDoubleQuotes = $textToProcess.filter(i => i.slice(0, 1) !== String.fromCodePoint(34)).length;
            var $numberOfWordsforDoubleQuotes = !$('#numberOfWordsforDoubleQuotes').val() ?
                                                $maxWordsForDoubleQuotes :
                                                ($maxWordsForDoubleQuotes < $('#numberOfWordsforDoubleQuotes').val()) ?
                                                $maxWordsForDoubleQuotes : $('#numberOfWordsforDoubleQuotes').val();
                        
            for (i = 1; i <= $numberOfWordsforDoubleQuotes; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);

                while($textToProcess[tempIndex].slice(0,1) === String.fromCodePoint(34)) {
                   var tempIndex = Math.floor(Math.random()*$textToProcess.length); 
                }

                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? String.fromCodePoint(34).concat(i).concat(String.fromCodePoint(34)) : i);
            }
            $('.textToProcess').empty();
        	$('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
        wrapTheWordsWithTriangleBrackets: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $numberOfWordsforTriangleBrackets = !$('#numberOfWordsforTriangleBrackets').val() ? 10 : $('#numberOfWordsforTriangleBrackets').val();
                        
            for (i = 1; i <= $numberOfWordsforTriangleBrackets; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? String.fromCharCode(60).concat(i).concat(String.fromCharCode(62)) : i);
            }
            $('.textToProcess').empty();
            $('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
        wrapTheWordsWithSquareBrackets: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $numberOfWordsforSquareBrackets = !$('#numberOfWordsforSquareBrackets').val() ? 10 : $('#numberOfWordsforSquareBrackets').val();
                        
            for (i = 1; i <= $numberOfWordsforSquareBrackets; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? String.fromCharCode(91).concat(i).concat(String.fromCharCode(93)) : i);
            }
            $('.textToProcess').empty();
            $('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
        wrapTheWordsWithBackticks: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $numberOfWordsforBackticks = !$('#numberOfWordsforBackticks').val() ? 10 : $('#numberOfWordsforBackticks').val();
                        
            for (i = 1; i <= $numberOfWordsforBackticks; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? String.fromCharCode(96).concat(i).concat(String.fromCharCode(96)) : i);
            }
            $('.textToProcess').empty();
            $('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
        wrapTheWordsWithCurlyBrackets: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $numberOfWordsforCurlyBrackets = !$('#numberOfWordsforCurlyBrackets').val() ? 10 : $('#numberOfWordsforCurlyBrackets').val();
                        
            for (i = 1; i <= $numberOfWordsforCurlyBrackets; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? String.fromCharCode(123).concat(i).concat(String.fromCharCode(125)) : i);
            }
            $('.textToProcess').empty();
            $('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
        wrapTheWordsWithRoundBrackets: function () {
            var $textToProcess = $('.textToProcess').val().split(' ');
            var $numberOfWordsforRoundBrackets = !$('#numberOfWordsforRoundBrackets').val() ? 10 : $('#numberOfWordsforRoundBrackets').val();
                        
            for (i = 1; i <= $numberOfWordsforRoundBrackets; i++) {
                var tempIndex = Math.floor(Math.random()*$textToProcess.length);
                $textToProcess = $textToProcess.map((i, idx) => idx === tempIndex ? String.fromCharCode(40).concat(i).concat(String.fromCharCode(41)) : i);
            }
            $('.textToProcess').empty();
            $('.textToProcess').val($textToProcess.join(' '));
            stats();
        },
    }

    var textGenerate = {
        characterPairs: function () {
            $('.textToProcess').val("");

            var result = [];

            var smallEnglishLetters = $(`#smallEnglishLetters`)[0].checked ? `abcdefghijklmnopqrstuvwxyz` : ``;
            var largeEnglishLetters = $(`#largeEnglishLetters`)[0].checked ? `ABCDEFGHIJKLMNOPQRSTUVWXYZ` : ``;

            var addedSmallPolishLetters = $(`#addedSmallPolishLetters`)[0].checked ?  `ąćęńłóśżź` : ``;
            var addedLargePolishLetters = $(`#addedLargePolishLetters`)[0].checked ? `ĄĆĘŃŁÓŚŻŹ` : ``;

            var numbers = $(`#numbers`)[0].checked ? `0123456789`: ``;
            var programmerCharacters = $(`#programmerCharacters`)[0].checked ? `~!@#$%^&*()-=_+[]{};:,./<>?` : ``;
            var programmerCharactersFromCode = $(`#programmerCharacters`)[0].checked ? String.fromCharCode(96, 34, 39, 92, 124) : ``;

            var source = "".
            concat(smallEnglishLetters).
            concat(largeEnglishLetters).
            concat(addedSmallPolishLetters).
            concat(addedLargePolishLetters).
            concat(numbers).
            concat(programmerCharacters).
            concat(programmerCharactersFromCode);

            for (i = 0; i <= (source.length-1); i++) {
              for (j = 0; j <= (source.length-1); j++) {
                result.push(`${source.split('')[i]}${source.split('')[j]}`)
              }
            }

            $('.textToProcess').val(`${result.join(" ")}`);
            stats();
        },
        optimizePairs: function () {
            var $textToProcess = $('.textToProcess').val();
            var inputArray = $textToProcess.split(" ");
            var maxLength = 10;
            var outputString = "";


            while (inputArray.length !== 0) {
          
                var tempIndex = Math.floor(Math.random()*inputArray.length);
                var lastCharacterOfOutputString = outputString.slice(-1);
                var outputStringIsEmpty = outputString.length === 0;
                var isPairToConnected = inputArray.some(item => lastCharacterOfOutputString === item.slice(0,1));

                var lastWordOfStringIsShorterThanMaxLength = outputString.split(" ").slice(-1)[0].length < maxLength;

                if (outputStringIsEmpty) {
              
                    outputString = outputString.concat(inputArray[tempIndex].toString());

                } else if (lastWordOfStringIsShorterThanMaxLength && isPairToConnected) {
             
                    while(inputArray[tempIndex].slice(0,1) !== lastCharacterOfOutputString) {
                        var tempIndex = Math.floor(Math.random()*inputArray.length);
                    }
                    outputString = outputString.concat(inputArray[tempIndex].toString().slice(1));
             
                } else {

                    outputString = outputString.concat(" ").concat(inputArray[tempIndex].toString());             

                }

                inputArray = inputArray.filter((item, idx) => idx !== tempIndex);

            }

            $('.textToProcess').val(outputString);
            stats();
        }
    }