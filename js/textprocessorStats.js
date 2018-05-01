    function stats() {
        $('.textLength').text(`Lenght of text: ${$('.textToProcess').val().length}`);
        	
        $('.numberOfSpaces').text(`Number of spaces in text: ${$('.textToProcess').val().replace(/[^ ]/gm, '').length}`);
        
        var $lettersToStatistic = 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzżź';
        var $listOfLettersStatistic = $lettersToStatistic.split('')
        .map(i => `<tr style="border-bottom: 1px solid #ff9500">
            <td style="width: 80px">${i}</td>
            <td style="width: 80px">${$('.textToProcess').val().split('').filter(y => y === i).length > 0 ? 
             $('.textToProcess').val().split('').filter(y => y === i).length : ''}</td>
            <td style="width: 80px">${$('.textToProcess').val().split('').filter(y => y === i.toUpperCase()).length > 0 ?
             $('.textToProcess').val().split('').filter(y => y === i.toUpperCase()).length : ''}</td>
            <td style="width: 80px">${$('.textToProcess').val().split(/[\r\n\ ]+/gm).filter(y => y.slice(0,1) === i).length > 0 ?
             $('.textToProcess').val().split(/[\r\n\ ]+/gm).filter(y => y.slice(0,1) === i).length : ''}</td>
            <td style="width: 80px">${$('.textToProcess').val().split(/[\r\n\ ]+/gm).filter(y => y.slice(0,1) === i.toUpperCase()).length > 0 ?
             $('.textToProcess').val().split(/[\r\n\ ]+/gm).filter(y => y.slice(0,1) === i.toUpperCase()).length : ''}</td>
        </tr>`)
        $('.letters').empty();
        $('.letters').html(`<tr style="border-bottom: 1px solid #ff9500">
                                <td style="width: 80px">Letter</td>
                                <td style="width: 80px">small</td>
                                <td style="width: 80px">Upper</td>
                                <td style="width: 80px">First</br>small</td>
                                <td style="width: 80px">First</br>Upper</td>
                            </tr>
                            ${$listOfLettersStatistic}`);

    }
    
    $(".textToProcess").keyup(x => stats());
    $(".textToProcess").mouseenter(x => stats());
    $(".textToProcess").change(x => stats());
    $("button").click(x => stats());