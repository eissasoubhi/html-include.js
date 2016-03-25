ready(function()
{
    var html_file, marker, filename;

    var include_elements = document.querySelectorAll('include');

    Array.prototype.forEach.call(include_elements, function(el, i)
    {
        var include = el;

        html_file = include.getAttribute('src'); // the partial file location

        if (typeof html_file !== "undefined" && html_file !== "")
        {
            get( html_file, function(partial)
            {

                if (include.getAttribute('marker') !== "false")
                {   // insert marker

                    html_file = include.getAttribute('src');
                    filename = getFileName(html_file);
                    begin_marker = createCommentElement('marker-begin '+filename)
                    end_marker = createCommentElement('marker-end '+filename, 10)

                    partial = begin_marker + partial + end_marker;
                };

                include.outerHTML = partial;  //insert the partial file content
            },
            function()
            {
                console.error("couldn't load " + html_file + " file")
            });
        }
        else
        {
            console.error("The html source file must be setted in the src attribute")
        }
    });

    /********************* functions *************************/

    function getFileName (path) {
        return path.replace(/.*(\/|\\)/, '');
    }

    // creates an html comment element
    function createCommentElement (text, length)
    {
        if (typeof length === 'undefined')
        {   // default value (starts number)
            length = 40;
        };

        var comment = "<!-- ";
        for (var i = 0; i < length; i++)
        {
            if (i == length / 2)
            {
                comment += " " + text + " ";
                continue;
            };
            comment += "*";
        };

        return comment += " -->";
    }

    // ajax get request
    function get(url, success, fail)
    {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function()
        {
            if (request.status >= 200 && request.status < 400)
            {
                //success !
                var resp = request.responseText;
                success(resp);
            }
            else
            {
            // We reached our target server, but it returned an error
                fail();
            }
        };

        request.onerror = function() {
          // There was a connection error of some sort
          fail();
        };

        request.send();
    }

});

// document content loaded
function ready(fn)
{
    if (document.readyState != 'loading')
    {
        fn();
    }
    else
    {
        document.addEventListener('DOMContentLoaded', fn);
    }
}